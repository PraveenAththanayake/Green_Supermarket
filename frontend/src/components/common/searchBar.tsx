import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="mx-auto lg:max-w-[672px] px-3">
      <label htmlFor="searchInput" className="relative">
        <span className="absolute inset-y-0 right-0 z-10 px-3 text-4xl border rounded-r-[30px] md:rounded-r-lg cursor-pointer text-gray bg-white flexCenter border-gray/20">
          <IoSearchOutline />
        </span>
        <input
          id="searchInput"
          className="block w-full px-4 py-2 text-base bg-white border rounded-[30px] md:rounded-lg shadow-sm h-9 border-lightGray focus:outline-none focus:border-gray/20"
          placeholder="Search for product, brand, or category"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBar;
