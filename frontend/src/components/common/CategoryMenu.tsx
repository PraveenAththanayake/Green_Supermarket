import { Link } from "react-router-dom";
import { CategoriesList } from "../../constants/CategoriesList";

const CategoryMenu = () => {
  return (
    <div className="absolute font-nunito bg-white top-[90px] xs:top-[120px] md:top-[130px] lg:top-[180px] z-30 w-[280px] text-sm sm:text-2xl shadow-xl rounded-[8px] overflow-hidden border border-gray/20 flex justify-center flex-col">
      {CategoriesList.map((category, index) => (
        <Link
          key={index}
          className="px-5 py-[6px] hover:bg-customGreen hover:text-white transition-all"
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
