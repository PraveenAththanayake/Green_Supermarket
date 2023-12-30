import { TiLocation } from "react-icons/ti";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import {
  getLoggedInUser,
  isUserLoggedIn,
} from "../../services/auth/AuthService";

const Topbar = () => {
  const isAuth = isUserLoggedIn();
  const LoggedInUser = getLoggedInUser();
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="h-10 lg:h-14 w-full bg-[#09965D] rounded-b-[20px] px-[20px] flex items-center xs:justify-between justify-center mx-auto lg:px-[100px] xl:px-[160px] flex-col xs:flex-row gap-y-[3px]"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center text-[10px] xs:text-[10px] lg:text-base">
          Delivery to:&nbsp;
          <span className="mx-1 opacity-50">
            <TiLocation />
          </span>
          <span className="text-white">64 Front Street, 11, Colombo...</span>
        </div>
      </motion.div>
      {/* {isAuth && LoggedInUser?.role === "admin" && (} */}
      {isAuth ? (
        <motion.p
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="hidden text-[10px] text-white sm:block lg:text-base"
        >
          Hi! {LoggedInUser}
        </motion.p>
      ) : (
        <motion.p
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="hidden text-[10px] text-white sm:block lg:text-base"
        >
          Hi! Guest
        </motion.p>
      )}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="flex-row flexCenter text-[8px] xs:text-[10px] lg:text-base"
      >
        <p>Call Us for any query or help:&nbsp;</p>
        <span className="text-white">(011) 2696523</span>
      </motion.div>
    </motion.div>
  );
};

export default Topbar;
