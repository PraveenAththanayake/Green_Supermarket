import { useEffect, useState } from "react";
import { TopsaleList } from "../../../constants/TopSalesList";
import ProductItem from "../../../components/product/productItem";
import AutoPlayMethods from "./AutoSlider";

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
    if (time.seconds == 0) {
      setTime({ ...time, minutes: time.minutes - 1, seconds: 59 });
      if (time.minutes == 0) {
        setTime({ ...time, hours: time.hours - 1, minutes: 59, seconds: 59 });
        if (time.hours == 0) {
          setTime({ days: time.days - 1, hours: 59, minutes: 59, seconds: 59 });
        }
      }
    }
    time.seconds > 0 &&
      setTimeout(() => setTime({ ...time, seconds: time.seconds - 1 }), 1000);
  }, [time.seconds]);
  if (time.days >= 0) {
    return (
      <section className="mt-10 lg:mt-[90px] mb-[70px] max-w-[1120px] mx-auto ">
        <div className="flex-col mb-6 flexCenter gap-y-4">
          <h1 className="text-[24px] font-semibold">Top saver today</h1>
          <div className="flex flex-row">
            {" "}
            <p className="ml-[24px] py-[2px] px-[10px] bg-[#D30000] text-white rounded-[5px] mx-2">
              {time.days} Days
            </p>
            <span>:</span>
            <p className="py-[2px] px-[10px] bg-[#D30000] text-white rounded-[5px] mx-2">
              {time.hours}
            </p>
            <span>:</span>
            <p className="py-[2px] px-[10px] bg-[#D30000] text-white rounded-[5px] mx-2">
              {time.minutes}
            </p>
            <span>:</span>
            <p className="py-[2px] px-[10px] bg-[#D30000] text-white rounded-[5px] mx-2">
              {time.seconds}
            </p>
          </div>
        </div>
        <div className="flexCenter max-w-[946px] mb-[100px] mx-auto flex-wrap">
          {TopsaleList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Discount;
