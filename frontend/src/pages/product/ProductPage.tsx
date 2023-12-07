import ProductDesc from "./ProductDesc";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";

function ProductPage() {
  return (
    <div className="flexCenter max-w-[70rem] mx-auto">
      <div>
        <ProductHeader />
        <hr className="border-1 border-gray my-[35px]" />
        <ProductDetails />
        <ProductDesc />
      </div>
    </div>
  );
}

export default ProductPage;
