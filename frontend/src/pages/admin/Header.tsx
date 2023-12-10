import { TbWorldWww } from "react-icons/tb";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-[120px] flexBetween flex-row bg-lightGray px-[50px] gap-[723px] mb-6">
      <div className="font-nunito text-darkerGreen text-5xl font-extrabold leading-[32.74px]">
        GREEN <span className="text-black font-nunito">SUPERMARKET</span>
      </div>
      <div className="flexBetween gap-[51px]">
        <div className="flex-row flexCenter gap-[21px] text-[25px] text-gray">
          <div>
            <TbWorldWww />
          </div>
          <div>
            <BsEnvelopeFill />
          </div>
          <div>
            <BiSolidBellRing />
          </div>
        </div>
        <div className="flexCenter gap-[21px]">
          <div className="flex flex-col text-right">
            <h5 className="text-4xl font-bold leading-6">Admin</h5>
            <span className="text-4xl font-medium leading-6 text-gray">
              Super admin
            </span>
          </div>
          <div className="text-gray text-[51px]">
            <FaCircleUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
