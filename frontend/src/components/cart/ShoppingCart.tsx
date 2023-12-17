import { useState } from "react";

function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-row ">
      <img
        className=" w=[50px] h-[50px] mt-[27px] ml-[29px]"
        src="topsaverimages/2 6.png"
        alt="2 6"
      />
      <div>
        <div>
          <p className=" mt-[27px] ml-[15px] text-sm font-semibold  w-[175px] ">
            Wijaya Chili Powder - 500g
          </p>
        </div>
        <div>
          <p className=" mt-[7px] w-[28px] ml-[15px] text-xs font-semibold text-gray">
            500g
          </p>
        </div>
      </div>
      <div>
        <p className=" text-sm font-semibold mt-[47px] ml-[86px]">LKR 400.00</p>
      </div>
      <div className=" mt-[41px] ml-[66px]  ">
        <div className="w-[96px] h-[32px] flex flex-row">
          <button
            className="w-[32px] h-[32px] bg-gray2 rounded-l-default"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="w-[32px] h-[32px]text-lg leading-[19.2px] font-normal flexCenter">
            {quantity}
          </span>
          <button
            className="w-[32px] h-[32px] bg-gray2 rounded-r-default"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <p className=" text-sm font-semibold mt-[47px] ml-[56px]">LKR 400.00</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
