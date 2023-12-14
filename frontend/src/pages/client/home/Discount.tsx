import { useEffect, useState } from "react";
import ProductItem, { Product } from "../../../components/product/ProductItem";

const product: Product[] = [
  {
    id: 1,
    name: "Anchor Full Cream Fresh Milk 1L",
    rating: 4,
    price: 600,
    discount: 55,
    imgLink: "../../public/topsaverimages/anchor.png",
  },
  {
    id: 2,
    name: "Viva Malted Food Drink Pouch 400g",
    rating: 4,
    price: 850,
    discount: 30,
    imgLink: "../../public/topsaverimages/viva.png",
  },
  {
    id: 3,
    name: "Maggi Coconut Milk Powder 800g",
    rating: 4,
    price: 729,
    discount: 25,
    imgLink: "../../public/topsaverimages/maggi.png",
  },
  {
    id: 4,
    name: "Wijaya Chilli Powder - 500g",
    rating: 4,
    price: 350,
    discount: 15,
    imgLink: "../../public/topsaverimages/chillipowder.png",
  },
  {
    id: 5,
    name: "Astra Margarine 500g",
    rating: 4,
    price: 420,
    discount: 10,
    imgLink: "../../public/topsaverimages/astra.png",
  },
  {
    id: 6,
    name: "Strawberry Jam 55% Fruits Glass Jar 410g",
    rating: 4,
    price: 430,
    discount: 40,
    imgLink: "../../public/topsaverimages/jam.png",
  },
];

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
      <>
        <div className="flex mt-[90px] mb-[70px] max-w-[1120px] mx-auto items-center">
          <h1 className="text-[24px] font-semibold">Top saver today</h1>
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
        <div className="flex max-w-[946px] mb-[100px] mx-auto justify-between flex-wrap">
          {product.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Discount;
