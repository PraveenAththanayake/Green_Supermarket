import { Link } from "react-router-dom";
import { CategoriesList } from "../../constants/CategoriesList";

const Category = () => {
  return (
    <section className="max-w-[1100px] max-h-screen my-[50px] mx-auto mt-[100px] mb-[200px]">
      <div className="mx-5 flexBetween">
        <h2 className="h2-bold">Category</h2>
        <span className="text-[15px] font-semibold text-gray tracking-[0.5px] leading-[18px]">
          View all products
        </span>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-1 gap-y-3 md:gap-x-5 md:gap-y-10 mt-11">
        {CategoriesList.map((category) => (
          <div key={category.id} className="flexCenter">
            <Link to={`/category/${category.id}`}>
              <div className="flexCenter flex-col bg-lightGray rounded-lg h-[190px] w-[150px] sm:h-[216px] sm:w-[160px] shadow-[0_4px_4px_0px_#0000000d]">
                <img
                  src={category.url}
                  alt={category.name}
                  className="h-[71px] w-[60px] object-contain object-center transition-all duration-300 ease-in-out hover:scale-110 "
                />
                <span className="h3-bold tracking-[0.3px] mt-[13px] text-center">
                  {category.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
