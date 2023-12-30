import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { decrement, increment } from "../../../store/counter/CounterSlice";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useShoppingCart } from "../../../store/CartSlice";

interface ProductDetailsProps {
  discountedPrice: number;
  price: number;
  stock: number;
  type: string;
  brand: string;
  category: string;
  tags: string;
  mainImage: string;
  id: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  discountedPrice,
  price,
  stock,
  type,
  brand,
  category,
  tags,
  mainImage,
  id,
}) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="md:flex-row flexCenter gap-11 lg:gap-[96px] flex-col">
      <div className="w-[310px] h-[300px] md:w-[400px] md:h-[500px] lg:w-[30rem] lg:h-[27.5rem] flex-row flex rounded-lg border border-solid border-lightGray bg-white shadow-md">
        <div className="w-full h-full flexCenter">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[311px] lg:h-[283px] flexCenter">
            <img src={mainImage} alt="x" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="w-[300px] lg:w-[480px] px-3 md:px-0">
        <h3 className="text-5xl font-semibold leading-[28.8px] mb-5">
          {discountedPrice ? (
            <span className="font-semibold text-5xl leading-[28.8px] text-red">
              {formatCurrency(discountedPrice)}
            </span>
          ) : (
            <span className="font-semibold text-5xl leading-[28.8px] mb-3">
              {formatCurrency(price)}
            </span>
          )}
        </h3>

        {discountedPrice ? (
          <div className="flex flex-row items-center gap-[14px] my-[15px]">
            <span className="font-semibold text-5xl leading-[28.8px] text-customGreen">
              {formatCurrency(discountedPrice)}
            </span>
            <span className="text-sm font-semibold leading-[16.8px] text-gray line-through">
              {formatCurrency(price)}
            </span>
            <p className="text-sm font-semibold text-red leading-[16.8px]">
              {formatCurrency(price - discountedPrice)} save
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="w-[251px] h-[32px] flexCenter bg-customGreen/20 border border-solid border-customGreen font-semibold text-xl rounded-default mb-5">
          Availability:{" "}
          <span className="text-customGreen">&nbsp; {stock} on stock</span>
        </div>

        <hr />
        <div className="mt-[16px] mb-[36px]">
          <h3 className="text-4xl font-light leading-[24px] mb-2">Quantity:</h3>
          <div className="flex items-center gap-4 flex-col lg:flex-row lg:gap-[36px]">
            <div className="w-[96px] h-[32px] flex flex-row">
              <button
                className="w-[32px] h-[32px] bg-gray2 rounded-l-default"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
              <span className="w-[32px] h-[32px]text-lg leading-[19.2px] font-normal flexCenter">
                {count}
              </span>
              <button
                className="w-[32px] h-[32px] bg-gray2 rounded-r-default"
                onClick={() => dispatch(increment())}
              >
                +
              </button>
            </div>
            {quantity === 0 ? (
              <button
                className="primaryButton h-[32px] w-[194px] rounded-default font-normal text-lg leading-[19.2px]"
                onClick={() => increaseCartQuantity(id)}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="primaryButton p-3 h-[32px] w-[194px] rounded-default font-normal text-lg leading-[19.2px]"
                onClick={() => removeFromCart(id)}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
        <hr className="mb-[19px]" />
        <div className="font-light text-lg leading-[19.2px] flex justify-center flex-col gap-[5px]">
          <p>
            Type: <span className="text-customGreen">{type ? type : "-"}</span>
          </p>
          <p>
            Brand: <span className="text-customGreen">{brand}</span>
          </p>
          <Link to={`/category/${category}`}>
            Categories: <span className="text-customGreen">{category}</span>
          </Link>
          <p>
            Tags: <span className="text-customGreen">{tags ? tags : "-"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
