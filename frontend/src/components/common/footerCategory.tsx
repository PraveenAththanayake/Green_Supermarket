import { useState } from "react";
import { FooterCategoryList } from "../../types/footerCategoryList";
import { FaPlus, FaMinus } from "react-icons/fa";

const FooterCategory: React.FC<FooterCategoryList> = ({ title, items }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      <div className="flexBetween">
        <h4 className="font-semibold font-nunito">{title}</h4>
        <button className="block text-xs md:hidden" onClick={toggleDropdown}>
          {dropdown ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div className={`block my-4 ${dropdown ? "md:hidden" : "hidden"}`}>
        {items.map((item: string) => (
          <p key={item} className="text-gray text-sm mb-[6px]">
            {item}
          </p>
        ))}
      </div>
      <div className="hidden md:block">
        {items.map((item: string) => (
          <p key={item} className="text-gray text-sm mb-[6px]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterCategory;
