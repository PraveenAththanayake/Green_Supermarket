import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCart } from "react-icons/io5";

function ProductCard() {
  return (
    <div>
      <div className="col-span-1 h-[345px] w-[270px] bg-white rounded-lg shadow-lg pl-3">
        <div className="bg-customGreen w-[43px] h-[24px] text-white rounded-md text-center text-sm flex items-center justify-center mt-[8px] ml-[8px]">
          55%
        </div>
        <div className="flexCenter mt-[15px]">
          <img
            src="images 1.png"
            alt="image"
            className="w-[133px] h-[121px] "
          />
        </div>
        <div className=" w-[180px] h[40px] text-xl pl-2 leading-5 font-semibold pt-[28px]">
          Anchor Full Cream Fresh Milk 1L
        </div>
        <div className="flex flex-row">
          <div className=" flex flex-row justify-start pl-2 pt-1">
            <div className=" text-yellow ">
              <IoIosStar />
            </div>
            <div className=" text-yellow pl-1">
              <IoIosStar />
            </div>
            <div className=" text-yellow pl-1">
              <IoIosStar />
            </div>
            <div className=" text-yellow pl-1">
              <IoIosStar />
            </div>
            <div className=" text-gray2 pl-1">
              <IoIosStar />
            </div>
          </div>
          <div className=" text-gray ml-[12px]">(4)</div>
        </div>

        <div className="flex flex-row pl-2">
          <div className="flex flex-row justify-center font-semibold text-[12px] pt-[10px]">
            <p className=" text-gray text-sm">LKR</p>
            <p className=" text-black text-sm">:</p>
            <p className=" text-customGreen text-sm">850.00</p>
          </div>
          <div className="flex flex-row justify-center text-red font-semibold text-[12px] pt-[10px] pl-[14px]">
            LKR 50 save
          </div>
        </div>

        <div className="flex flex-row pt-[16px] text-gray2 pl-2 mb-[16px]">
          <div className=" shadow-md rounded-xs overflow-hidden px-1 py-1">
            <IoMdHeartEmpty />
          </div>
          <div className="  shadow-md ml-[10px] rounded-xs overflow-hidden px-1 py-1">
            <IoCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
