import { FaRegBell } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const SocialBar = () => {
  return (
    <div className="flex ml-auto">
      <a href="">
        <FaRegBell size={24} color="#848482" className="mx-3" />
      </a>
      <a href="">
        <LuShoppingCart size={24} color="#848482" className="mx-3" />
      </a>
      <a href="">
        <CgProfile size={24} color="#848482" className="mx-3" />
      </a>
    </div>
  );
};

export default SocialBar;
