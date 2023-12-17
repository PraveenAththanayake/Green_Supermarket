import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Topbar = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    controls.start({
      opacity: 1,
      y: scrollPosition <= 100 ? 0 : -50,
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      className="h-8 text-xs xs:h-14 w-full bg-[#09965D] rounded-b-[20px] px-[20px] flexBetween mx-auto xs:text-base lg:px-[100px] xl:px-[160px]"
    >
      <div>
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
      </div>
      <p className="text-white xs:hidden md:block">Hi! Chamindu</p>
      <div className="">
        <div className="flex-row flexCenter">
          <p className="hidden md:block">
            Call Us for any query or help:&nbsp;
          </p>
          <span className="hidden text-white xs:block">(011) 2696523</span>
        </div>
        <p className="cursor-pointer hover:scale-110 xs:hidden text-white/90">
          <IoCall />
        </p>
      </div>
    </motion.div>
  );
};

export default Topbar;
