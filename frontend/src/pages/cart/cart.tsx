import React from "react";
import ShoppingCart from "../../components/cart/ShoppingCart";

const Cart = () => {
  return (
    <div className=" mx-40">
      <div className="font-semibold text-6xl items-center flexCenter">
        <h1>Shopping Cart</h1>
      </div>
      <div className=" flex flex-row gap-5">
        <div className=" pt-20">
          <div className=" w-[769px] h-[365px] border border-gray2">
            <div className=" flex flex-row justify-between w-[767px]  items-center">
              <div className=" flex flex-row w-[769px] h-[50px] bg-lightGray items-center text-base font-medium text-gray ">
                <div>
                  <p className=" ml-[89px]">Products</p>
                </div>
                <div>
                  <p className=" ml-[220px]">Price</p>
                </div>
                <div>
                  <p className=" ml-[106px]">Quantity</p>
                </div>
                <div>
                  <p className=" ml-[94px]">Total</p>
                </div>
              </div>
            </div>
            <ShoppingCart />
            <hr className=" w-[725px] ml-[21px] mt-[15px]  border-gray2" />
            <ShoppingCart />
            <hr className=" w-[725px] ml-[21px] mt-[30px]  border-gray2" />
            <ShoppingCart />
          </div>
        </div>
        <div className=" pt-20">
          <div className=" w-[332px] h-[194px] border border-gray2 bg-lightGray">
            <div className="flex flex-row justify-between">
              <p className=" mt-[12px] ml-[18px] text-base font-normal text-gray">
                Sub Total
              </p>
              <p className="mt-[12px] ml-[18px] mr-[18px] text-base font-normal">
                LKR 1549.00
              </p>
            </div>
            <div className="w-[296px] ml-[18px] mt-[10px]  ">
              <hr className="border-gray2" />
            </div>
            <div className="ml-[18px] mt-[28px] ">
              <p className="text-base font-normal text-gray ">Shipping</p>
              <p className="text-sm font-light">FREE SHIPPING</p>
              <div className="flex flex-row">
                <p className="text-base font-normal text-gray ">Estimate for</p>
                <p className="text-base font-normal ml-[12px] ">User Address</p>
              </div>
            </div>
            <div className="w-[296px] ml-[18px] mt-[10px]  ">
              <hr className="border-gray2" />
            </div>
            <div className=" ml-[12px] mt-[14px] flex flex-row justify-between">
              <p className="text-base font-medium">TOTAL</p>
              <p className="text-base font-normal text-customGreen mr-[18px] ">
                LKR 1549.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
