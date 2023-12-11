import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCart } from "react-icons/io5";

function ProductCard() {
  return (
    <div className="h-[345px] w-[270px] sm:w-[240px] lg:w-[270px] rounded-lg shadow-lg shadow-gray/20 p-4 border border-gray/50">
      <div className="bg-customGreen w-[43px] h-[24px] text-white rounded-[7px] text-xs flexCenter leading-[15.6px] font-semibold">
        55%
      </div>
      <div className="flexCenter mt-[11px]">
        <img
          src="images 1.png"
          alt="image"
          className="w-[133px] h-[121px] object-cover"
        />
      </div>
      <div className="w-[180px] h-[40px] text-xl leading-[20.4px] font-semibold mt-[27px]">
        Anchor Full Cream Fresh Milk 1L
      </div>
      <div className="flex items-center flex-row mt-[6px] gap-3">
        <div className="flex flex-row text-yellow">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <span className=" text-gray">(4)</span>
      </div>

      <div className="flex items-center flex-row mt-[8px] gap-[14px]">
        <div className="font-semibold text-sm leading-[16.8px]">
          <p className="text-gray">
            LKR : <span className="text-customGreen">850.00</span>
          </p>
        </div>
        <div className="flex flex-row justify-center text-red font-semibold text-[12px] leading-[14.4px]">
          LKR 50 save
        </div>
      </div>

      <div className="flex items-center flex-row my-[12px] text-gray2 gap-[10px]">
        <div className="text-5xl shadow-lg shadow-black/[15%] w-7 h-7 rounded-xs flexCenter rounded-sm">
          <IoMdHeartEmpty />
        </div>
        <div className="text-5xl shadow-lg shadow-black/[15%] w-7 h-7 rounded-xs flexCenter rounded-sm">
          <IoCart />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
