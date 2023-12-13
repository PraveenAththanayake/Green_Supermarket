import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="ml-[66px] w-[672px]">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 flex items-center pl-2 right-6">
          <IoSearchOutline size={22} />
        </span>
        <input
          className="font-lato h-[36px] placeholder:text-slate-400 block bg-white w-full border border-[#F5F5F5] rounded-[10px] py-2 pl-4 pr-9 shadow-sm focus:outline-none focus:border-[#d1d1d1] sm:text-sm"
          placeholder="Search for product, brand or category"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBar;
