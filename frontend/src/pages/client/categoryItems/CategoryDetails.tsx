import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoriesList } from "../../../constants/CategoriesList";
import ClientLayout from "../ClientLayout";
import CategoryProduct from "../../../components/product/CategoryProduct";
import { products } from "../../../constants/ProductList";

const CategoryDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = useMemo(
    () => CategoriesList.find((category) => category.id === categoryId),
    [categoryId]
  );

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
            .filter((product) => product.category.toLowerCase() == categoryId)
            .map((product) => (
              <Link
                to={`/category/${categoryId}/${product.id}`}
                key={product.id}
              >
                <CategoryProduct name={product.name} price={product.price} />
              </Link>
            ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default CategoryDetails;
