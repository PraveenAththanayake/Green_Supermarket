import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex-col gap-10 flexBetween">
      <div className="relative flex items-center p-2">
        <div className="absolute left-6 top-4 sm:left-10 md:left-16 sm:top-[40px] w-7xl">
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="text-[13px] font-semibold xs:text-base"
          >
            WELCOME GREEN SUPER MARKET ONLINE!
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="font-nunito font-bold mt-[16px] text-5xl md:text-6xl lg:text-8xl"
          >
            Fresh and Healthy <br />
            Veggies{" "}
            <span className="font-light">
              Green <br />
              Market
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="text-[9px] font-normal text-gray mt-[3px] block xs:hidden"
          >
            Enjoy a seamless online shopping <br />
            experience with just a <br />
            few clicks.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="absolute hidden gap-6 mt-3 text-sm xs:mt-5 sm:mt-8 md:mt-8 lg:mt-20 xl:mt-24 md:text-4xl xs:flex"
          >
            <Link
              className="flexCenter w-32 h-9 md:w-[192px] md:h-[48px] bg-customGreen border-2 border-solid border-customGreen text-white rounded-[10px] hover:bg-darkerGreen"
              to=""
            >
              Shop Now
            </Link>
            <Link
              className="flexCenter w-32 h-9 md:w-[192px] md:h-[48px] border-2 border-solid border-[#53B176] rounded-[10px] hover:bg-customGreen hover:text-white"
              to=""
            >
              See All Products
            </Link>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="/images/Hero/supermarket-banner-concept-with-ingredients.webp"
          alt="heroImage"
          className="object-cover w-full min-h-[14em] max-h-[30.4375em]"
        />
      </div>
      <div className="w-full flexCenter xs:hidden mb-11">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="absolute flex flex-col gap-2 text-sm font-normal"
        >
          <Link
            className="flexCenter w-[192px] h-8 md:w-[192px] md:h-[48px] bg-customGreen border-2 border-solid border-customGreen text-white rounded-[30px] hover:bg-darkerGreen"
            to=""
          >
            Shop Now
          </Link>
          <Link
            className="flexCenter w-[192px] h-8 md:w-[192px] md:h-[48px] border-2 border-solid border-[#53B176] rounded-[30px] hover:bg-customGreen hover:text-white"
            to=""
          >
            See All Products
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
