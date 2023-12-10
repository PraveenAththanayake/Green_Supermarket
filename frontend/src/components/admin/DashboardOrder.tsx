import { DashboardProps } from "../../types/dashboard";

const DashboardOrder: React.FC<DashboardProps> = ({ url, name, number }) => {
  return (
    <div className="w-[331px] h-[152px] bg-lightGray flexCenter rounded-lg">
      <div className="gap-10 flexBetween">
        <img src={url} alt="Transaction" className="w-[60px] h-[60px]" />
        <div className="flex flex-col gap-y-3">
          <h3 className="text-4xl font-semibold leading-6 text-gray">{name}</h3>
          <p className="text-[36px] font-semibold leading-[43.2px]">{number}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrder;
