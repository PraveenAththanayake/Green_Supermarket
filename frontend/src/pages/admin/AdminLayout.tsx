import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../styles/Admin.css";

const AdminLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminLayout;
