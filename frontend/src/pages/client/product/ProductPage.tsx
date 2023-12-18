import { useParams } from "react-router-dom";
import ClientLayout from "../ClientLayout";
import ProductDesc from "./ProductDesc";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";
import { useMemo } from "react";
import { products } from "../../../constants/ProductList";

function ProductPageLayout() {
  const { productId } = useParams<{
    productId: string;
  }>();

  const product = useMemo(
    () => products.find((product) => product.id === Number(productId)),
    [productId]
  );

  if (!productId) {
    return <div>Invalid product ID</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    price,
    priceOne,
    priceTwo,
    sizeOne,
    sizeTwo,
    secondPrice,
    save,
    stock,
    type,
    date,
    life,
    brand,
    category,
    tags,
  } = product;

  return (
    <ClientLayout>
      <div className="max-w-[70rem] mx-auto">
        <div>
          <ProductHeader name={product.name} />
          <hr className="border-1 border-gray my-6 md:my-[35px]" />
          <ProductDetails
            price={price}
            priceOne={priceOne}
            priceTwo={priceTwo}
            sizeOne={sizeOne}
            sizeTwo={sizeTwo}
            secondPrice={secondPrice}
            save={save}
            stock={stock}
            type={type}
            date={date}
            life={life}
            brand={brand}
            category={category}
            tags={tags}
          />
          <ProductDesc desc={product.desc} />
        </div>
      </div>
    </ClientLayout>
  );
}

export default ProductPageLayout;
