import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"; // Update the path based on your project structure
import {
  openCart,
  closeCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
} from "../store/cartSlice";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: { id: number; quantity: number }[];
};

const ShoppingCartContext = React.createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const useShoppingCart = () => {
  const context = React.useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const { isOpen, items: cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const contextValue: ShoppingCartContextType = {
    openCart: () => dispatch(openCart()),
    closeCart: () => dispatch(closeCart()),
    getItemQuantity: (id: number) =>
      cartItems.find((item) => item.id === id)?.quantity || 0,
    increaseCartQuantity: (id: number) => dispatch(increaseCartQuantity(id)),
    decreaseCartQuantity: (id: number) => dispatch(decreaseCartQuantity(id)),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    cartQuantity,
    cartItems,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
      {/* Render your ShoppingCart component here, using isOpen and other context values */}
    </ShoppingCartContext.Provider>
  );
};
