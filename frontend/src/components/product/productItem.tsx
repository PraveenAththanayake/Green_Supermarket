import { MdStar } from "react-icons/md";
import Favorite from "../../../public/images/Product-images/Favorite.png";
import Cart from "../../../public/images/Product-images/Sell Stock.png";

export interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  discount: number;
  imgLink: string;
}

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="w-[270px] h-[216px] p-[16px] rounded-[10px] m-4 shadow-2xl relative">
        <span className="text-white text-[13px] px-[8px] py-[4px] rounded-[7px] bg-[#53B176]">
          {product.discount}%
        </span>
        <h3 className="w-[160px] text-[17px] font-semibold mt-[16px]">
          {product.name}
        </h3>
        <div className="flex w-[90px] justify-between mb-[18px]">
          {stars.map((stars) =>
            product.rating >= stars ? (
              <MdStar color="#FDCC0D" />
            ) : (
              <MdStar color="#D9D9D9" />
            )
          )}
        </div>
        <p className="mb-[16px]">
          LKR :{" "}
          <span className="text-[#D30000] font-semibold">
            {product.price}.00
          </span>
        </p>
        <div className="flex">
          <img src={Favorite} alt="Favorite" />
          <img className="ml-[8px]" src={Cart} alt="Cart" />
        </div>
        <img
          className="absolute w-[100px] top-[80px] right-[8px]"
          src={product.imgLink}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductItem;
