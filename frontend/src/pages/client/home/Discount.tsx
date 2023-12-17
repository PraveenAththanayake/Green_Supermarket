import { useEffect, useState, useMemo } from "react";
import { TopsaleList } from "../../../constants/TopSalesList";
import ProductItem from "../../../components/product/productItem";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Discount = () => {
  const [time, setTime] = useState<Time>({
    days: 0,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds - 1;
        if (seconds < 0) {
          const minutes = prevTime.minutes - 1 >= 0 ? prevTime.minutes - 1 : 59;
          const hours = minutes === 59 ? prevTime.hours - 1 : prevTime.hours;
          const days =
            hours === 0 && minutes === 59 ? prevTime.days - 1 : prevTime.days;
          return { days, hours, minutes, seconds: 59 };
        }
        return { ...prevTime, seconds };
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = useMemo(() => {
    return `${time.days} Days : ${time.hours} : ${time.minutes} : ${time.seconds}`;
  }, [time]);

  const discountedProducts = useMemo(() => {
    return TopsaleList.filter((product) => product.discount > 0);
  }, []);

  return (
    <section className="mt-10 lg:mt-[90px] mb-[70px] max-w-[1120px] mx-auto ">
      <div className="flex-col mb-6 flexCenter gap-y-4">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-[24px] font-semibold"
        >
          Top saver today
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center"
        >
          {formattedTime.split(":").map((value, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-1">:</span>}
              <p className="py-1 px-2 bg-[#D30000] text-white rounded-[5px] mx-1">
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flexCenter max-w-[946px] mb-[100px] mx-auto flex-wrap">
        {discountedProducts.map((product) => (
          <motion.div
            variants={fadeIn("up", product.id * 0.1)}
            initial="hidden"
            whileHover={{ y: -5 }}
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <ProductItem key={product.id} product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Discount;
