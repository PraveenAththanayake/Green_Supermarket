import ProductCard from "../../components/topsales/ProductCard";

const TopSales = () => {
  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="flex items-center flex-col md:flex-row mb-9 md:mb-[74px] gap-6 md:gap-[42px] p-2">
        <h1 className="text-5xl md:text-6xl font-semibold leading-[38.4px]">
          Top Saver Today
        </h1>
        <div>
          <h2 className="font-light text-lg leading-[19.2px]">Ends In :</h2>
        </div>
      </div>

      <div className="flexCenter">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px] mx-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default TopSales;
