import Topbar from "./topbar";
import hambugerIcon from "./../../../public/images/Nav/Ham Nav menu.jpg";
import BottomBar from "./bottomBar";
import SearchBar from "./searchBar";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import SocialBar from "./socialBar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <Topbar />
      <nav className="flex font-lato max-w-7xl mx-auto py-[14px] mt-[74px] mb-[32px] items-center">
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
        <SocialBar />
      </nav>
      <BottomBar />
    </>
  );
};

export default Navbar;
