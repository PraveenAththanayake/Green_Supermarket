const ProductHeader = ({ name }: { name: string }) => {
  return (
    <div className="px-3 md:px-0">
      <h1 className="text-3xl md:text-6xl font-semibold font-nunito leading-[38.4px] mb-3">
        {name}
      </h1>
      <div className="flex items-center gap-4 md:flex-row">
        <p className="w-[120px] h-[20px]">⭐⭐⭐⭐⭐</p>
        <span className="text-sm font-normal leading-[16.8px] text-customGreen">
          4 Customer Review
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
