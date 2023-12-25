import { TbWorldWww } from "react-icons/tb";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import {
  getLoggedInUser,
  isUserLoggedIn,
} from "../../services/auth/AuthService";
import { useEffect, useState } from "react";

const Header = () => {
  const isAuth = isUserLoggedIn();
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Add a delay to ensure sessionStorage is set
      await new Promise((resolve) => setTimeout(resolve, 500));

      setLoggedInUser(getLoggedInUser());
    };

    fetchData();
  }, []);
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
            {isAuth ? (
              <h5 className="text-4xl font-bold leading-6">{loggedInUser}</h5>
            ) : (
              <h5 className="text-4xl font-bold leading-6">Guest</h5>
            )}
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
