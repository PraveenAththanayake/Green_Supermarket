import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategoryPlus, TbDiscount2 } from "react-icons/tb";
import { RiCustomerService2Fill, RiContactsLine } from "react-icons/ri";

const links = [
  { to: "/", label: "Home", icon: <IoHomeOutline /> },
  { to: "/category", label: "Category", icon: <TbCategoryPlus /> },
  { to: "/topsaver", label: "Top Saver", icon: <TbDiscount2 /> },
  { to: "/service", label: "Service", icon: <RiCustomerService2Fill /> },
  { to: "/contact", label: "Contact", icon: <RiContactsLine /> },
];

const Navbar = () => {
  return (
    <div className="flexCenter">
      <div className="hidden w-full sm:block">
        <div className="flexCenter font-bold text-base h-[37px] bg-lightGray mx-auto max-w-[1120px] mb-[26px] rounded-[5px]">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="h-full px-6 text-center duration-100 ease-in text-darkerGreen hover:border-b-2 border-darkerGreen flexCenter"
            >
              <div className="hidden sm:block">{link.label}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 z-20 w-full sm:hidden">
        <div className="flexBetween font-bold text-4xl h-[50px] bg-lightGray mx-auto max-w-[1120px]">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="h-full px-5 text-center duration-100 ease-in text-darkerGreen hover:border-b-[3px] border-darkerGreen flexCenter"
            >
              {link.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
