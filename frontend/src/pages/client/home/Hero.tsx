import heroImage from "../../../../public/images/Hero/supermarket-banner-concept-with-ingredients.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1120px] mx-auto relative">
      <div className="absolute left-5 top-4 md:left-[64px] md:top-[40px] w-7xl">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-xs font-bold md:text-base"
        >
          WELCOME GREEN SUPER MARKET ONLINE!
        </motion.p>
        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="font-nunito font-bold mt-[32px] mb-5 md:mb-24 text-6xl md:text-8xl"
        >
          Fresh and Healthy <br />
          Veggies{" "}
          <span className="font-light">
            Green <br />
            Market
          </span>
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="absolute flex gap-6 text-sm md:text-4xl"
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
        src={heroImage}
        alt="heroImage"
        className="h-[300px] w-[480px] xs:w-[768px] md:w-[1120px] md:h-[487px] lg:w-[1120px]  object-cover"
      />
    </div>
  );
};

export default Hero;
