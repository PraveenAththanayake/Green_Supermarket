import { useState } from "react";
import { AdminSideList } from "../../constants/AdminSideList";

const Sidebar = () => {
  const [selectedNav, setSelectedNav] = useState(AdminSideList[0].id);

  const handleClick = (nav) => {
    setSelectedNav(nav.id);
  };

  return (
    <div className="w-[278px] h-[968px] bg-lightGray rounded-r-[20px]">
      <div className="flex-col flexCenter gap-[37px] py-[30px]">
        {AdminSideList.map((nav) => (
          <div
            key={nav.id}
            className="text-4xl font-semibold leading-5 text-gray hover:cursor-pointer"
            onClick={() => handleClick(nav)}
          >
            <div
              className={`${
                selectedNav === nav.id
                  ? "bg-customGreen w-[241px] h-[47px] flexCenter rounded-md text-white"
                  : ""
              }`}
            >
              {nav.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
