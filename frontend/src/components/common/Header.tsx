import hambugerIcon from "./../../../public/images/Nav/Ham Nav menu.jpg";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { FaRegBell } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import SearchBar from "./searchBar";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="flex font-lato max-w-[1120px] mx-auto py-[14px] mt-[74px] mb-[32px] items-center">
      <button onClick={() => (nav == false ? setNav(true) : setNav(false))}>
        <img
          src={hambugerIcon}
          alt="hamburger-icon"
          className="w-[29px] h-[16px]"
        />
      </button>
      <button onClick={() => (nav == false ? setNav(true) : setNav(false))}>
        <p className="ml-8 font-nunito text-[20px] font-semibold text-xl">
          All Categories
        </p>
      </button>
      {nav && <CategoryMenu />}
      <SearchBar />
      <div className="flex ml-auto">
        <a href="">
          <FaRegBell size={24} color="#848482" className="mx-3" />
        </a>
        <a href="">
          <LuShoppingCart size={24} color="#848482" className="mx-3" />
        </a>
        <a href="">
          <CgProfile size={24} color="#848482" className="mx-3" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
