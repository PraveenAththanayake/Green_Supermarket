import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategoryPlus, TbDiscount2 } from "react-icons/tb";
import { RiCustomerService2Fill, RiContactsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const links = [
  { to: "/", label: "Home", icon: <IoHomeOutline /> },
  { to: "/category", label: "Category", icon: <TbCategoryPlus /> },
  { to: "/topsaver", label: "Top Saver", icon: <TbDiscount2 /> },
  { to: "/service", label: "Service", icon: <RiCustomerService2Fill /> },
  { to: "/contact", label: "Contact", icon: <RiContactsLine /> },
];

const Navbar = () => {
  return (
    <div>
      <div className="hidden w-full sm:block">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flexCenter font-bold text-base h-[37px] bg-lightGray mx-auto max-w-[1120px] mb-[26px] rounded-[5px]"
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="h-full px-6 text-center duration-100 ease-in text-darkerGreen hover:border-b-2 border-darkerGreen flexCenter"
            >
              <motion.div
                variants={fadeIn("donw", index * 0.2)}
                initial="hidden"
                animate="show"
                viewport={{ once: false, amount: 0.2 }}
                className="hidden sm:block"
              >
                {link.label}
              </motion.div>
            </NavLink>
          ))}
        </motion.div>
      </div>
      <div className="fixed bottom-0 z-20 w-full sm:hidden">
        <div className="flexBetween font-bold text-5xl h-[50px] bg-customGreen mx-auto max-w-[1120px]">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="h-full px-5 text-center duration-100 ease-in text-black/80 hover:border-b-[3px] border-white flexCenter"
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
