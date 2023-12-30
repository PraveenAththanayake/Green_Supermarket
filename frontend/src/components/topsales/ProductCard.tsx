import { formatCurrency } from "../../utils/formatCurrency";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../../store/CartSlice";
import { Link } from "react-router-dom";

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

function ProductCard({ product }: Props) {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="h-[345px] w-[270px] sm:w-[240px] lg:w-[270px] rounded-lg shadow-lg shadow-gray/20 p-4 border border-gray/50 mb-10">
      <div className="bg-customGreen w-[43px] h-[24px] text-white rounded-[7px] text-xs flexCenter leading-[15.6px] font-semibold">
        {Math.floor(100 - (product.discountPrice / product.price) * 100)} %
      </div>
      <div className="flexCenter mt-[11px]">
        <img
          src={product.mainImage}
          alt="image"
          className="w-[143px] h-[121px] object-contain"
        />
      </div>
      <div className="w-[180px] h-[40px] text-xl leading-[20.4px] font-semibold mt-[50px]">
        {product.productName}
      </div>

      <div className="flex items-center flex-row mt-[8px] gap-[14px]">
        <div className="font-semibold text-sm leading-[16.8px]">
          <p className="text-gray">{formatCurrency(product.price)}</p>
        </div>
        <div className="flex flex-row justify-center text-red font-semibold text-[12px] leading-[14.4px]">
          {formatCurrency(product.price - product.discountPrice)} save
        </div>
      </div>

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
              <RemoveShoppingCart />
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
  );
}

export default ProductCard;
