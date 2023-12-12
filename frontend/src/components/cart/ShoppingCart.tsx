import React from "react";

function ShoppingCart() {
  return (
    <div className=" flex flex-row">
      <img
        className=" w=[50px] h-[50px] mt-[27px] ml-[29px]"
        src="topsaverimages/2 6.png"
        alt="2 6"
      />
      <p className=" mt-[27px] ml-[15px] text-sm font-semibold ">
        Wijaya Chili Powder - 500g
      </p>
      <p className=" mt-[51px] ml-[-170px] text-xs font-semibold text-gray">
        500g
      </p>
      <p className=" text-sm font-semibold mt-[47px] ml-[230px]">LKR 400.00</p>
      <p className=" text-sm font-semibold mt-[47px] ml-[218px]">LKR 400.00</p>
    </div>
  );
}

export default ShoppingCart;
