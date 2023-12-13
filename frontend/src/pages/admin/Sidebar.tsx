import { lazy, useState } from "react";
import { AdminSideList } from "../../constants/AdminSideList";
import Dashboard from "./Dashboard";

const AddProduct = lazy(() => import("./AddProduct"));

const Sidebar = () => {
  const [selectedNav, setSelectedNav] = useState(AdminSideList[0].id);

  const handleClick = (nav) => {
    setSelectedNav(nav.id);
  };

  const renderContent = () => {
    switch (selectedNav) {
      case 1:
        return <Dashboard />;
      case 2:
        return <AddProduct />;
      case 3:
        return <div>Manage Products</div>;
      case 4:
        return <div>Categories</div>;
      case 5:
        return <div>Offer Image</div>;
      case 6:
        return <div>Orders</div>;
      case 7:
        return <div>FAQ</div>;
      case 8:
        return <div>Logout</div>;
    }
  };

  return (
    <div className="flex flex-row gap-[82px]">
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
                    ? "bg-customGreen w-[241px] h-[47px] flexCenter rounded-md text-white ease-in-out duration-300"
                    : ""
                }`}
              >
                {nav.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">{selectedNav && renderContent()}</div>
    </div>
  );
};

export default Sidebar;
