import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
const Topbar = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="h-8 text-xs xs:h-14 w-full bg-[#09965D] rounded-b-[20px] px-[20px] flexBetween mx-auto xs:text-base lg:px-[100px] xl:px-[160px]"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
      >
        <div className="hidden xs:block">
          <div className="flex items-center">
            <p className="hidden md:block">Delivery from: </p>
            <span className="mx-1 opacity-50">
              <TiLocation />
            </span>
            <span className="text-white">64 Front Street, 11, Colombo...</span>
          </div>
        </div>
        <p className="cursor-pointer xs:hidden text-white/90 hover:scale-110">
          <TiLocation />
        </p>
      </motion.div>
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="text-white xs:hidden md:block"
      >
        Hi! Chamindu
      </motion.p>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
      >
        <div className="flex-row flexCenter">
          <p className="hidden md:block">
            Call Us for any query or help:&nbsp;
          </p>
          <span className="hidden text-white xs:block">(011) 2696523</span>
        </div>
        <p className="cursor-pointer hover:scale-110 xs:hidden text-white/90">
          <IoCall />
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Topbar;
