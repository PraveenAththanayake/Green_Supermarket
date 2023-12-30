import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CategoriesList } from "../../constants/CategoriesList";

const Category = () => {
  const CategoryItems = useMemo(
    () =>
      CategoriesList.map((category) => (
        <div className="flexCenter" key={category.id}>
          <Link to={`/category/${category.id}`}>
            <div className="flexCenter flex-col bg-lightGray rounded-lg h-36 w-32 xs:h-[180px] xs:w-[140px] sm:h-[216px] sm:w-[160px] shadow-[0_4px_4px_0px_#0000000d]">
              <img
                src={category.url}
                alt={category.name}
                className="w-14 h-14 xs:h-[71px] xs:w-[60px] object-contain object-center transition-all duration-300 ease-in-out hover:scale-110 "
                loading="lazy"
              />
              <span className="text-xl xs:h3-bold tracking-[0.3px] mt-[13px] text-center">
                {category.name}
              </span>
            </div>
          </Link>
        </div>
      )),
    []
  );

  return (
    <section className="max-w-[1100px] my-[80px] mx-auto px-3">
      <div className="mx-5 flexBetween">
        <h2 className="h2-bold">Category</h2>
        <span className="text-xs xs:text-[15px] font-semibold text-gray tracking-[0.5px] leading-[18px]">
          View all products
        </span>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-1 gap-y-5 md:gap-x-5 md:gap-y-10 mt-11">
        {CategoryItems}
      </div>
    </section>
  );
};

export default Category;
