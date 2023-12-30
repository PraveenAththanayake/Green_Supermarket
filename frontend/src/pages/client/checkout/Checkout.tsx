// Import the necessary modules
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
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

  const { cartItems } = useShoppingCart();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalPrice = new URLSearchParams(location.search).get("totalPrice");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data: SubmitCheckoutData) => {
    try {
      // Add the selected payment method to the data
      const response = await submitCheckout({
        ...data,
        cartItems: cartItems,
      });
      console.log(response.data);

      // If the form is submitted successfully, send an email and show Snackbar
      sendEmail(data); // Call the function to send email
      setSnackbarOpen(true);
      // navigator("/");
    } catch (error) {
      console.error(error);
    }
  };

  // Function to send an email using emailjs-com
  const sendEmail = (data: SubmitCheckoutData) => {
    // Replace these values with your own EmailJS template and user ID
    const serviceId = "service_wf5sbz1";
    const templateId = "template_m5om2uo";
    const userId = "GoN6Nf0EO0e8It19v";

    // Prepare the template parameters
    const templateParams = {
      to_email: data.email,
      to_name: `${data.firstName} ${data.lastName}`,
      date: new Date().toLocaleDateString(),
      totalAmount: totalPrice,
      // Add more parameters as needed
    };

    // Send the email using EmailJS
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
            className="flex-col flexCenter lg:flexCenter"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <h2 className="mb-4 text-2xl font-semibold text-center">
                Billing Details
              </h2>
              <div className="flex flex-col gap-4">
                {Object.keys(schema.fields).map((fieldName, index) => (
                  <div key={index} className="w-[80vw]">
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
            <div className="bg-gray/20 mt-5 w-[80vw] p-5 rounded-lg">
              {cartItems.map((cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return (
                  <div className="flexBetween" key={item?.id}>
                    <p>{item?.productName}</p>

                    <p className="">
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

            <div className="w-[80vw] max-h-[157px] bg-gray/20 rounded-md p-3 mt-4 flexBetween text-2xl">
              <h2 className="text-xl font-semibold">Total:</h2>
              <span className="text-2xl text-customGreen">
                LKR {totalPrice}
              </span>
            </div>
            <button
              type="submit"
              className="w-[80vw] bg-customGreen text-4xl font-semibold h-12 rounded-md mt-4 text-white "
            >
              Place an Order
            </button>
          </form>
        </div>
        <div className="mt-4">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
          </PayPalScriptProvider>
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
      </div>
    </ClientLayout>
  );
};

export default Checkout;
