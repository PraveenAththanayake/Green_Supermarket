// Cart.js
import ClientLayout from "../ClientLayout";
import ShoppingCart from "../../../components/cart/ShoppingCart";
import AdminButton from "../../../components/buttons/AdminButton";
import { useShoppingCart } from "../../../store/CartSlice";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../../services/api/fetchProduct";
import { ProductData } from "../../../types";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

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

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, cartItem) =>
        total +
        cartItem.quantity *
          (products.find((p) => p.id === cartItem.id)?.discountPrice ||
            products.find((p) => p.id === cartItem.id)?.price ||
            0),
      0
    );
  };

  return (
    <ClientLayout>
      <div className="flex-col mx-4 my-10 flexCenter">
        <div className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
          Shopping Cart
        </div>
        <div className="flexCenter flex-wrap gap-3 w-[90vw] md:w-[85vw] lg:w-[90vw]">
          {cartItems.map((cartItem) => {
            const item = products.find((i) => i.id === cartItem.id);
            return (
              <ShoppingCart
                key={cartItem.id}
                productName={item?.productName || ""}
                price={item?.discountPrice || item?.price || 0}
                mainImage={item?.mainImage || ""}
                totalPrice={
                  cartItem.quantity *
                  (item?.discountPrice ? item.discountPrice : item?.price ?? 0)
                }
                onQuantityChange={(newQuantity) => {
                  if (newQuantity > cartItem.quantity) {
                    increaseCartQuantity(cartItem.id);
                  } else if (newQuantity < cartItem.quantity) {
                    decreaseCartQuantity(cartItem.id);
                  }
                }}
                onRemove={() => removeFromCart(cartItem.id)}
              />
            );
          })}
        </div>

        <div className="mt-8">
          <div className="overflow-hidden border rounded-lg w-[90vw] md:w-[85vw] lg:w-[90vw]">
            <div className="p-4 bg-lightGray">
              <div className="flex justify-between">
                <p className="text-base font-normal text-gray">Sub Total</p>
                <p className="text-base font-normal">
                  LKR {getTotalPrice().toFixed(2)}
                </p>
              </div>
              <hr className="mt-2 border-gray2" />
              <div className="mt-2">
                <p className="text-base font-normal text-gray">Shipping</p>
                <p className="text-sm font-light">FREE SHIPPING</p>
              </div>
              <hr className="mt-2 border-gray2" />
              <div className="flex justify-between mt-2">
                <p className="text-base font-medium">TOTAL</p>
                <p className="text-base font-normal text-customGreen">
                  LKR {getTotalPrice().toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link to={`/checkout?totalPrice=${getTotalPrice().toFixed(2)}`}>
              <AdminButton
                name="Proceed to Checkout"
                className="w-full text-lg font-normal text-white bg-customGreen hover:bg-white hover:text-customGreen hover:border hover:border-Gray"
              />
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Cart;
