import DashboardOrder from "../../components/admin/DashboardOrder";
import { DashboardList } from "../../constants/Dashboard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="admin-Headers">Dashboard</h1>
      <h2 className="text-4xl font-semibold leading-6 mt-[76px] mb-[39px]">
        Order Out Line
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-[18px] gap-y-[15px]">
        {DashboardList.map((item) => (
          <DashboardOrder
            key={item.id}
            id={item.id}
            url={item.url}
            name={item.name}
            number={item.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
