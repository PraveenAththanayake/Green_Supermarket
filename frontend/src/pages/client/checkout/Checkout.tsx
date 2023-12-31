// Import the necessary modules
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import ClientLayout from "../ClientLayout";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { submitCheckout } from "../../../services/api/checkoutService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import emailjs from "emailjs-com";
import { useShoppingCart } from "../../../store/CartSlice";
import { ProductData } from "../../../types";
import { fetchProduct } from "../../../services/api/fetchProduct";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

// Create interfaces for form data
export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  address: string;
  country: string;
  zipcode: number;
  town: string;
  phone: string;
  email: string;
  description?: string;
}

export interface SubmitCheckoutData extends CheckoutFormData {
  paymentMethod: string;
  totalPrice: number;
}

// Define the validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  companyName: yup.string(),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  zipcode: yup.number().required("Zipcode is required"),
  town: yup.string().required("Town is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  description: yup.string(),
});

const Checkout = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubmitCheckoutData>({
    resolver: yupResolver<SubmitCheckoutData>(schema),
  });

  const { cartItems, clearCartItems } = useShoppingCart();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetchProduct();
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const totalPrice = new URLSearchParams(location.search).get("totalPrice");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data: SubmitCheckoutData) => {
    try {
      const response = await submitCheckout({
        ...data,
        cartItems: cartItems,
      });
      console.log(response.data);

      sendEmail(data);
      setSnackbarOpen(true);
      clearCartItems();
      navigator("/");
    } catch (error) {
      console.error(error);
    }
  };

  const sendEmail = (data: SubmitCheckoutData) => {
    const serviceId = "service_wf5sbz1";
    const templateId = "template_m5om2uo";
    const userId = "GoN6Nf0EO0e8It19v";

    const templateParams = {
      to_email: data.email,
      to_name: `${data.firstName} ${data.lastName}`,
      date: new Date().toLocaleDateString(),
      totalAmount: totalPrice,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent:", response);
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };

  const initialOptions = {
    clientId:
      "AbzOuxKwEicX5cIStPqyASeNpkWvYHR04N2vdi78za17BqOsPsxllJSdkDMMmS8tBPe5RyuB0hYlTa27",
    currency: "USD",
    intent: "capture",
  };

  return (
    <ClientLayout>
      <div className="flex-col w-full mb-20 flexCenter mt-14">
        <div className="max-w-[1120px] flexCenter flex-col">
          <h1 className="text-3xl font-semibold text-center md:text-6xl">
            Checkout
          </h1>
          <form
            className="flex flex-col justify-center gap-5 mt-8 md:justify-between md:flex-row"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-[80vw] md:w-[40vw]">
              <div className="w-full">
                {/* <h2 className="mb-4 text-2xl font-semibold text-center">
                  Billing Details
                </h2> */}
                <div className="flex flex-col gap-4">
                  {Object.keys(schema.fields).map((fieldName, index) => (
                    <div key={index} className="w-full">
                      <Controller
                        name={fieldName as keyof CheckoutFormData}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={fieldName
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                            variant="outlined"
                            className="w-full"
                            error={!!errors[fieldName as keyof typeof errors]}
                            helperText={
                              errors[fieldName as keyof typeof errors]?.message
                            }
                          />
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[80vw] md:w-[40vw]">
              <div className="flex flex-col w-full gap-3 p-5 rounded-lg bg-lightGray">
                <h1 className="text-2xl font-semibold text-left capitalize">
                  Product
                </h1>

                {cartItems.map((cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return (
                    <div
                      className="w-full p-3 border border-gray/20 flexBetween"
                      key={item?.id}
                    >
                      <p className="text-xs md:text-lg">{item?.productName}</p>

                      <p className="text-xs md:text-lg">
                        {formatCurrency(
                          cartItem.quantity *
                            (item?.discountPrice
                              ? item.discountPrice
                              : item?.price ?? 0)
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full max-h-[157px] bg-lightGray rounded-md p-3 mt-4 flexBetween text-2xl">
                <h2 className="text-lg font-semibold md:text-2xl">Total:</h2>
                <span className="text-lg md:text-2xl text-customGreen">
                  LKR {totalPrice}
                </span>
              </div>
              <button
                type="submit"
                className="w-full h-10 mt-4 text-2xl font-medium text-white xl:text-4xl rounded-default md:h-12 xl:h-14 bg-customGreen hover:bg-white hover:text-customGreen hover:border hover:border-Gray"
              >
                Place an Order
              </button>
              <div className="mt-4">
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons />
                </PayPalScriptProvider>
              </div>
            </div>
          </form>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
          >
            Thank you! Your order has been placed.
          </MuiAlert>
        </Snackbar>
        {loading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    </ClientLayout>
  );
};

export default Checkout;
