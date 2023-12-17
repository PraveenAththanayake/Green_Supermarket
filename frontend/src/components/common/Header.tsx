import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { FaRegBell } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import SearchBar from "./searchBar";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto lg:mt-[74px] my-8 max-w-[1120px]"
    >
      <div className="px-2 md:px-6 flexBetween">
        <div
          className="flex-none gap-5 cursor-pointer flexCenter"
          onClick={() => (nav == false ? setNav(true) : setNav(false))}
        >
          <div>
            <img
              src="/images/Nav/Ham Nav menu.jpg"
              alt="hamburger-icon"
              className="w-[20px] h-[16px]"
            />
          </div>
          <div>
            <p className="hidden text-xl font-normal text-center lg:block">
              All Categories
            </p>
          </div>
        </div>

        {nav && <CategoryMenu />}

        <div className="grow">
          <SearchBar />
        </div>

        <div className="gap-5 xs:gap-[25px] flexCenter text-gray text-4xl md:text-5xl flex-none">
          <Link to="" className="hover:text-customGreen">
            <FaRegBell />
          </Link>
          <Link to="">
            <LuShoppingCart className="hover:text-customGreen" />
          </Link>
          <Link to="" className="hidden sm:block">
            <CgProfile className="hover:text-customGreen" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
