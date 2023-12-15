import { lazy } from "react";

import { IconType } from "react-icons/io5";
const IoSearchOutline = lazy(() =>
  import("react-icons/io5").then(
    (module) => ({ default: module.IoSearchOutline } as { default: IconType })
  )
);

const SearchBar = () => {
  return (
    <div className="w-full sm:w-[400px] md:w-[480px] lg:w-[672px]">
      <label htmlFor="searchInput" className="relative mx-auto">
        <span className="absolute inset-y-0 right-0 z-10 px-3 text-4xl border rounded-r-lg cursor-pointer text-gray bg-lightGray flexCenter border-gray/20">
          <IoSearchOutline />
        </span>
        <input
          id="searchInput"
          className="block w-full px-4 py-2 text-base bg-white border rounded-lg shadow-sm h-9 border-lightGray focus:outline-none focus:border-gray/20"
          placeholder="Search for product, brand, or category"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBar;
