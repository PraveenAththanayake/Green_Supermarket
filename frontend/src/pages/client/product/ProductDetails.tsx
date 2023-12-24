import PrimaryButton from "../../../components/buttons/primaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { decrement, increment } from "../../../store/counter/CounterSlice";
import { Link } from "react-router-dom";

interface ProductDetailsProps {
  discountedPrice: number;
  price: number;
  stock: string;
  type: string;
  date: Date;
  life: number;
  brand: string;
  category: string;
  tags: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  discountedPrice,
  price,
  stock,
  type,
  date,
  life,
  brand,
  category,
  tags,
}) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="md:flex-row flexCenter gap-11 lg:gap-[96px] flex-col">
      <div className="w-[310px] h-[300px] md:w-[400px] md:h-[500px] lg:w-[34rem] lg:h-[33.5rem] flex-row flex rounded-lg border border-solid border-lightGray bg-white shadow-md">
        <div className="flex flex-col justify-between m-[37px]">
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[101px] lg:h-[101px] overflow-hidden border-gray border">
            <img
              src="../../../public/images 1.png"
              alt="Anchor Milk"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[101px] lg:h-[101px] overflow-hidden border border-solid border-gray">
            <img
              src="../../../public/images 1.png"
              alt="Anchor Milk"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[101px] lg:h-[101px] overflow-hidden border border-solid border-gray">
            <img
              src="../../../public/images 1.png"
              alt="Anchor Milk"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[101px] lg:h-[101px] overflow-hidden border border-solid border-gray">
            <img
              src="../../../public/images 1.png"
              alt="Anchor Milk"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="w-full h-full flexCenter">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[311px] lg:h-[283px] flexCenter">
            <img
              src="../../../public/images 1.png"
              alt="x"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-[300px] lg:w-[480px] px-3 md:px-0">
        <h3 className="text-5xl font-semibold leading-[28.8px] mb-2">
          {discountedPrice ? (
            <h3 className="font-semibold text-5xl leading-[28.8px] text-red">
              LKR {discountedPrice}
            </h3>
          ) : (
            <h3 className="font-semibold text-5xl leading-[28.8px] mb-3">
              LKR {price}
            </h3>
          )}
        </h3>
        {/* <span className="text-lg font-light leading-[19.2px]">
          liter: {sizeOne}
        </span> */}
        {/* <div className="flex items-center gap-3 my-[5px]">
          {products.map((product) => (
            <div className="w-[79px] h-[32px] rounded-default border border-solid border-customGreen text-lg font-normal leading-[19.2px] text-gray flexCenter">
              {product.sizes}
            </div>
          ))}
        </div> */}
        {/* <span className="text-sm font-normal leading-[16.8px] text-darkerGreen underline">
          Clear
        </span> */}

        {discountedPrice && (
          <div className="flex flex-row items-center gap-[14px] my-[15px]">
            <h3 className="font-semibold text-5xl leading-[28.8px] text-customGreen">
              {discountedPrice}
            </h3>
            <span className="text-sm font-semibold leading-[16.8px] text-gray line-through">
              {price}
            </span>
            <p className="text-sm font-semibold text-red leading-[16.8px]">
              LKR {price - discountedPrice} save
            </p>
          </div>
        )}

        <div className="w-[251px] h-[32px] flexCenter bg-customGreen/20 border border-solid border-customGreen font-semibold text-xl rounded-default">
          Availability:{" "}
          <span className="text-customGreen">&nbsp; {stock} on stock</span>
        </div>
        <ul className="mt-[23px] mb-[30px] text-sm font-normal text-gray flex flex-col gap-[6px]">
          <li className=" leading-[16.8px]">Type: {type ? type : "-"}</li>
          <li className=" leading-[16.8px]">
            MFG: {date ? date.toString() : "-"}
          </li>
          <li className=" leading-[16.8px]">LIFE: {life ? life : "-"}</li>
        </ul>
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
            <PrimaryButton
              text="Add to Cart"
              url="/cart"
              style="primaryButton h-[32px] w-[194px] rounded-default font-normal text-lg leading-[19.2px]"
            />
          </div>
        </div>
        <hr className="mb-[19px]" />
        <div className="font-light text-lg leading-[19.2px] flex justify-center flex-col gap-[5px]">
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
