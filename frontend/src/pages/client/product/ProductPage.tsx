import ClientLayout from "../ClientLayout";
import ProductDesc from "./ProductDesc";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";

function ProductPageLayout() {
  return (
    <ClientLayout>
      <div className="max-w-[70rem] mx-auto">
        <div>
          <ProductHeader />
          <hr className="border-1 border-gray my-6 md:my-[35px]" />
          <ProductDetails />
          <ProductDesc />
        </div>
      </div>
    </ClientLayout>
  );
}

export default ProductPageLayout;
