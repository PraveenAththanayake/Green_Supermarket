import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const BottomBar = () => {
  return (
    <div className="h-8 text-xs xs:h-14 w-full bg-[#09965D] rounded-t-[20px] px-[20px] flexCenter gap-12 lg:gap-32 mx-auto xs:text-base lg:px-[100px] xl:px-[160px] mb-[50px] sm:mb-0">
      <p className="text-white">© Copyright 2023. by A65 GROUP TM</p>
      <div className="hidden xxl:block">
        <div className="hidden xs:block">
          <div className="flex items-center">
            <p className="hidden md:block">Delivery from: </p>
            <span className="mx-1 opacity-50">
              <TiLocation />
            </span>
            <span className="text-white">64 Front Street, 11, Colombo...</span>
          </div>
        </div>
        <p className="cursor-pointer xs:hidden text-white/90 hover:scale-110">
          <TiLocation />
        </p>
      </div>
      <div className="hidden md:block">
        <div className="flex-row flexCenter">
          <p className="hidden md:block">
            Call Us for any query or help:&nbsp;
          </p>
          <span className="hidden text-white xs:block">(011) 2696523</span>
        </div>
        <p className="cursor-pointer hover:scale-110 xs:hidden text-white/90">
          <IoCall />
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
