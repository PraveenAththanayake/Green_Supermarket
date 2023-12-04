import { Link } from "react-router-dom";
import { CategoriesList } from "../../constants/CategoriesList";

const Category = () => {
  return (
    <section>
      {CategoriesList.map((category) => (
        <div key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </section>
  );
};

export default Category;
