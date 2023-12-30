// Import necessary dependencies
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useShoppingCart } from "../../store/CartSlice";
import { formatCurrency } from "../../utils/formatCurrency";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMemo } from "react";
import { Link } from "react-router-dom";

// Define Product and Props interfaces
export interface Product {
  id: number;
  productName: string;
  price: number;
  discountPrice: number;
  mainImage: string;
  category: string;
}

interface Props {
  product: Product;
}

// ProductItem component
const ProductItem = ({ product }: Props) => {
  // Destructure methods from useShoppingCart
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  // Use useMemo for expensive calculations
  const discountPercentage = useMemo(() => {
    return 100 - Math.floor((product.discountPrice / product.price) * 100);
  }, [product.price, product.discountPrice]);

  // const stars = useMemo(() => {
  //   const starsArr = [1, 2, 3, 4, 5];
  //   return starsArr.map((star) =>
  //     product.rating >= star ? (
  //       <MdStar key={star} color="#FDCC0D" />
  //     ) : (
  //       <MdStar key={star} color="#D9D9D9" />
  //     )
  //   );
  // }, [product.rating]);

  // Get quantity from the cart
  const quantity = getItemQuantity(product.id);

  return (
    <div className="w-[270px] h-[216px] p-[16px] rounded-[10px] m-4 shadow-2xl flexBetween">
      <div className="">
        <span className="text-white text-[13px] px-[8px] py-[4px] rounded-[7px] bg-[#53B176]">
          {discountPercentage}%
        </span>
        <h3 className="text-[17px] font-semibold mt-[16px]">
          {product.productName}
        </h3>
        <p className="mb-[16px] text-red">{formatCurrency(product.price)}</p>
        <div className="flex items-center gap-2 mt-4 text-4xl text-gray/30">
          <div className="hover:text-red flexCenter">
            <FavoriteBorderIcon />
          </div>
          <div>
            {quantity === 0 ? (
              <button
                className="hover:text-customGreen flexCenter"
                onClick={() => increaseCartQuantity(product.id)}
              >
                <ShoppingCartIcon />
              </button>
            ) : (
              <button
                className="hover:text-customGreen flexCenter"
                onClick={() => removeFromCart(product.id)}
              >
                <RemoveShoppingCartIcon />
              </button>
            )}
          </div>

          <Link
            to={`/category/${product.category}/${product.id}`}
            className="p-1 ml-5 rounded-full flexCenter hover:text-white hover:bg-darkerGreen"
          >
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
      <img className="w-[80px] object-cover" src={product.mainImage} alt="" />
    </div>
  );
};

export default ProductItem;
