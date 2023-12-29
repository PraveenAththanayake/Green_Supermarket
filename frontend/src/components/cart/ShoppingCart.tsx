import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import Delete from "@mui/icons-material/Delete";

interface ShoppingCartProps {
  productName: string;
  price: number;
  discountPrice?: number;
  mainImage: string;
  totalPrice: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}

function ShoppingCart({
  productName,
  price,
  mainImage,
  totalPrice,
  onQuantityChange,
  onRemove,
  discountPrice,
}: ShoppingCartProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex flex-col items-center justify-between py-8 px-5 border border-gray/50 w-[90vw] md:w-[40vw] lg:w-[25vw] rounded-md">
      <div className="flex-col flexCenter">
        <img
          className="object-contain w-[15vw] h-[15vw]"
          src={mainImage}
          alt="product image"
        />
        <div className="flex-1 mt-2">
          <p className="text-base font-semibold">{productName}</p>
        </div>
      </div>

      <div className="flex-col flexCenter">
        <div className="text-base font-semibold ">
          {discountPrice ? (
            <span className="text-xs text-gray-400">
              {formatCurrency(discountPrice)}
            </span>
          ) : (
            <span className="text-xs text-gray-400">
              {formatCurrency(price)}
            </span>
          )}
        </div>
        <div className="flex items-center my-3">
          <button
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-l-default bg-customGreen"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <span className="flex items-center justify-center w-8 h-8 bg-gray/20">
            {quantity}
          </span>
          <button
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-r-default bg-customGreen"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="gap-20 mt-3 flexBetween">
          <div className="ml-4 mr-8 text-base font-semibold">
            Total:{" "}
            <span className="text-red">{formatCurrency(totalPrice)}</span>
          </div>

          <button
            className="text-base font-semibold cursor-pointer text-red hover:scale-105"
            onClick={onRemove}
          >
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
