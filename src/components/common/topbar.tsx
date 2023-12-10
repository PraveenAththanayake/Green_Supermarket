import { TiLocation } from "react-icons/ti";

const Topbar = () => {
  return (
    <div className="font-lato h-14 w-full bg-[#09965D] rounded-b-[20px] px-[20px]">
      <div className="flex max-w-7xl mx-auto align-middle pt-[14px] justify-between">
        <div>
          <p className="flex items-center">
            Delivery from
            <span className="mx-1 opacity-50">
              <TiLocation />
            </span>
            <span className="text-white">64 Front Street, 11, Colombo...</span>
          </p>
        </div>
        <p className="text-white">Hi! Chamindu</p>
        <div>
          <p>
            Call Us for any query or help:{" "}
            <span className="text-white">( 011) 2696523</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
