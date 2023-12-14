import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="h-14 xl:h-16 xxl:h-20 w-full bg-[#09965D] rounded-b-[20px] px-[20px] flexBetween mx-auto text-base xl:text-2xl xxl:text-4xl lg:px-[160px]">
      <div>
        <div className="hidden xs:block">
          <div className="flex items-center">
            <p className="hidden md:block">Delivery from: </p>
            <span className="mx-1 opacity-50">
              <TiLocation />
            </span>
            <span className="text-white">64 Front Street, 11, Colombo...</span>
          </div>
        </div>
        <p className="xs:hidden text-white/90">
          <TiLocation />
        </p>
      </div>
      <p className="text-white xs:hidden md:block">Hi! Chamindu</p>
      <div className="">
        <div className="flexCenter flex-row">
          <p className="hidden md:block">
            Call Us for any query or help:&nbsp;
          </p>
          <span className="text-white hidden xs:block">(011) 2696523</span>
        </div>
        <p className="xs:hidden text-white/90">
          <IoCall />
        </p>
      </div>
    </div>
  );
};

export default Topbar;
