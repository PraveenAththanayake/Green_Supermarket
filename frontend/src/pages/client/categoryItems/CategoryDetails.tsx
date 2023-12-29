import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoriesList } from "../../../constants/CategoriesList";
import ClientLayout from "../ClientLayout";
import CategoryProduct from "../../../components/product/CategoryProduct";
import { fetchProduct } from "../../../services/api/fetchProduct";
import { ProductData } from "../../../types";

const CategoryDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<ProductData[]>([]);

  const category = useMemo(
    () => CategoriesList.find((category) => category.id === categoryId),
    [categoryId]
  );

  useEffect(() => {
    if (categoryId && category) {
      getProducts();
    }
  }, [categoryId, category]);

  async function getProducts() {
    try {
      const response = await fetchProduct();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!categoryId) {
    return <div>Invalid category ID</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <ClientLayout>
      <div className="flex-col px-3 my-8 flexCenter">
        <h1 className="text-5xl font-semibold mb-7 font-nunito">
          <Link to="/category" className="underline">
            Category{" "}
          </Link>
          / {category.name}
        </h1>
        <div className="flex-wrap gap-5 flexCenter">
          {products
            .filter((product) => product.category.toLowerCase() === categoryId)
            .map((product) => (
              <div key={product.id}>
                <CategoryProduct
                  product={product} // Pass the entire product object
                  name={product.productName}
                  price={product.price}
                  discountedPrice={product.discountPrice}
                  mainImage={product.mainImage}
                  categoryId={categoryId}
                />
              </div>
            ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default CategoryDetails;
