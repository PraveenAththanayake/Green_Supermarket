import { useParams } from "react-router-dom";
import ClientLayout from "../ClientLayout";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../../services/api/fetchProduct";
import { ProductData } from "../../../types";

function ProductPageLayout() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const { productId } = useParams<{
    productId: string;
  }>();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetchProduct();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const product = products.find((product) => product.id === Number(productId));

  if (!productId || products.length === 0) {
    return <div>Invalid product ID or no products available</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    price,
    discountPrice,
    stock,
    type,
    brand,
    category,
    tags,
    mainImage,
  } = product;

  return (
    <ClientLayout>
      <div className="max-w-[70rem] mx-auto my-14">
        <div>
          <ProductHeader name={product.productName} />
          <hr className="border-1 border-gray my-6 md:my-[35px]" />
          <ProductDetails
            price={price}
            discountedPrice={discountPrice}
            stock={stock}
            type={type}
            brand={brand}
            category={category}
            tags={tags}
            mainImage={mainImage}
            id={Number(productId)}
          />
        </div>
      </div>
    </ClientLayout>
  );
}

export default ProductPageLayout;
