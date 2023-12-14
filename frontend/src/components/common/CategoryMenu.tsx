import { CategoriesList } from "../../constants/CategoriesList";

const CategoryMenu = () => {
  return (
    <div className="absolute font-nunito bg-white top-[140px] lg:top-[180px] z-20 w-[280px] text-2xl shadow-xl rounded-[8px] overflow-hidden border border-gray/20 flex justify-center flex-col">
      {CategoriesList.map((category, index) => (
        <a
          key={index}
          className="px-10 py-[6px] hover:bg-customGreen hover:text-white transition-all"
          href="#"
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryMenu;
