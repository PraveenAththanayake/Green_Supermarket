import Topbar from "./topbar";
import hambugerIcon from "./../../../public/images/Nav/Ham Nav menu.jpg";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <nav className="font-lato flex max-w-7xl mx-auto py-[14px] mt-[74px] mb-[32px]">
        <img src={hambugerIcon} alt="hamburger-icon" />
        <p className="ml-8 font-nunito text-xl">All Categories</p>
      </nav>
    </>
  );
};

export default Navbar;
