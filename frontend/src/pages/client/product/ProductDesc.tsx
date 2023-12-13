import { useState } from "react";
import Description from "./Description";
import Review from "./Review";
import QA from "./QA";
import Info from "./Info";
import { ProductNavList } from "../../../constants/ProductNav";

const ProductDesc = () => {
  const [selectedNav, setSelectedNav] = useState(ProductNavList[0].id);

  const handleClick = (nav) => {
    setSelectedNav(nav.id);
  };

  const renderContent = () => {
    switch (selectedNav) {
      case 1:
        return <Description />;
      case 2:
        return <Review />;
      case 3:
        return <QA />;
      case 4:
        return <Info />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-[76px]">
      <div className="w-[1120px] h-[58px] flex items-center gap-[50px] bg-lightGray mb-[27px]">
        {ProductNavList.map((nav) => (
          <div
            key={nav.id}
            className="text-lg font-bold text-gray leading-19.2px capitalize hover:cursor-pointer hover:underline hover:underline-offset-8"
            onClick={() => handleClick(nav)}
          >
            <span
              className={`${
                selectedNav === nav.id
                  ? "text-customGreen underline underline-offset-8 decoration-customGreen"
                  : ""
              }`}
            >
              {nav.name}
            </span>
          </div>
        ))}
      </div>
      <div>{selectedNav && renderContent()}</div>
    </div>
  );
};

export default ProductDesc;
