import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex max-w-[1120px] mx-auto py-[32px] border-b-[1px] border-[#84848230]">
      <p className="font-nunito font-semibold text-[32px] whitespace-nowrap">
        Subscribe To Our Newsletter
      </p>
      <div className="flex w-[100%] justify-end relative">
        <input
          className="absolute right-[180px] font-lato max-w-[440px] h-[40px] placeholder:text-slate-400 block bg-white w-full border border-[#F5F5F5] rounded-[10px] py-2 pl-4 pr-9 shadow-sm focus:outline-none focus:border-[#d1d1d1] sm:text-sm"
          placeholder="Enter your email address here"
          type="text"
          name="search"
        />
        <button className="font-lato bg-[#53B075] text-white text-[20px] h-[40px] px-[72px] rounded-r-[8px] absolute">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
