import { IoIosStar } from "react-icons/io";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useShoppingCart } from "../../store/CartSlice";
import { ProductData } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";

interface CategoryProductProps {
  name: string;
  price: number;
  discountedPrice: number;
  mainImage: string;
  product: ProductData;
  categoryId: string;
}

const CategoryProduct = ({
  name,
  price,
  discountedPrice,
  mainImage,
  product,
  categoryId,
}: CategoryProductProps) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(product.id);
  return (
    <div className="w-[280px] xs:w-[250px] bg-white shadow-md border border-lightGray rounded-lg h-[180px] xs:h-[200px] md:w-[320px] flexBetween gap-5 px-5">
      <img
        src={mainImage}
        width={100}
        height={100}
        className="object-contain object-center"
      />
      <div className="w-full">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="flex text-yellow">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <h2 className="mt-4 text-sm font-semibold text-red">
          {discountedPrice ? (
            <span className="font-semibold text-xl leading-[28.8px] text-red">
              {formatCurrency(discountedPrice)}
              <p className="text-xs line-through text-darkerGreen">
                {formatCurrency(price)}
              </p>
            </span>
          ) : (
            <span className="font-semibold text-xl leading-[28.8px] mb-3">
              {formatCurrency(price)}
            </span>
          )}
        </h2>
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
            to={`/category/${categoryId}/${product.id}`}
            className="p-1 ml-5 rounded-full flexCenter hover:text-white hover:bg-darkerGreen"
          >
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
