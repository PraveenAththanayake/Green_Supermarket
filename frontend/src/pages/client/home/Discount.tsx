import { useEffect, useState, useMemo } from "react";
import ProductItem from "../../../components/product/productItem";
import { fetchProduct } from "../../../services/api/fetchProduct";
import { ProductData } from "../../../types";

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
  const [products, setProducts] = useState<ProductData[]>([]);

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

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetchProduct();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="mt-10 lg:mt-[90px] mb-[70px] max-w-[1120px] mx-auto ">
      <div className="flex mb-[71px] flex-col md:flex-row items-center">
        <h1 className="font-semibold mr-[25px] text-[24px] pl-[12px] xl:pl-0">
          Top saver today
        </h1>
        <div className="flex items-center text-[16px] mt-1">
          {formattedTime.split(":").map((value, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-1">:</span>}
              <p className="py-[2px] px-2 bg-[#D30000] text-white rounded-[5px] mx-1">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flexCenter max-w-[946px] mx-auto flex-wrap">
        {products.map(
          (product) =>
            product.discountPrice > 0 && (
              <ProductItem key={product.id} product={product} />
            )
        )}
      </div>
    </section>
  );
};

export default Discount;
