import hambugerIcon from "./../../../public/images/Nav/Ham Nav menu.jpg";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { FaRegBell } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import SearchBar from "./searchBar";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="mx-auto mt-10 lg:mt-[74px] mb-[32px] max-w-[1120px]">
      <div className="px-6 flexBetween">
        <div
          className="gap-5 cursor-pointer flexCenter"
          onClick={() => (nav == false ? setNav(true) : setNav(false))}
        >
          <div>
            <img
              src={hambugerIcon}
              alt="hamburger-icon"
              className="w-[29px] h-[16px]"
            />
          </div>
          <div>
            <p className="hidden text-xl font-normal text-center lg:block">
              All Categories
            </p>
          </div>
        </div>

        {nav && <CategoryMenu />}

        <div className="hidden sm:block">
          <SearchBar />
        </div>

        <div className="gap-5 xs:gap-[25px] flexCenter text-gray">
          <button
            className="block sm:hidden hover:text-customGreen"
            onClick={() =>
              search === false ? setSearch(true) : setSearch(false)
            }
          >
            <IoSearchOutline size={24} />
          </button>
          <a href="" className="hover:text-customGreen">
            <FaRegBell size={24} />
          </a>
          <a href="">
            <LuShoppingCart size={24} className="hover:text-customGreen" />
          </a>
          <a href="">
            <CgProfile size={24} className="hover:text-customGreen" />
          </a>
        </div>
      </div>

      {search && (
        <div className="absolute block w-full sm:hidden top-[135px]">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Header;
