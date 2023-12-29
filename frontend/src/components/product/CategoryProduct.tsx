import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCart } from "react-icons/io5";

const CategoryProduct = ({ name, price }) => {
  return (
    <div className="w-[280px] xs:w-[250px] bg-white shadow-md border border-lightGray rounded-lg h-[180px] xs:h-[200px] md:w-[320px] flexBetween px-2">
      <img
        src="/images/topsaverimages/anchor.png"
        width={120}
        height={120}
        className="object-contain object-center"
      />
      <div className="w-full">
        <h1 className="text-base font-semibold">{name}</h1>
        <p className="flex text-yellow">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <h2 className="mt-4 text-sm font-semibold text-red">
          <span className="text-gray">LKR:</span> {price}
        </h2>
        <div className="flex gap-2 mt-3 text-4xl">
          <IoMdHeartEmpty />
          <IoCart />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
