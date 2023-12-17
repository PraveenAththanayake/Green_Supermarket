import { SocialLinkList } from "../../constants/SocialLink";
import { Link } from "react-router-dom";

const SocialBar = () => {
  return (
    <div className="max-w-[1120px] mx-auto my-8 lg:mb-[58px]">
      <h4 className="font-nunito font-semibold text-[14px] text-center">
        Social Media
      </h4>
      <div className="flexCenter flex-row mt-[15px] text-5xl gap-[15px]">
        {SocialLinkList.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="transition duration-100 ease-in-out cursor-pointer hover:scale-125"
          >
            {<item.icon />}
          </Link>
        ))}
      </div>
      <p className="font-nunito font-semibold text-[12px] text-center mt-[8px]">
        Stay in the loop and be part of the GREEN Supermarket community!
      </p>
    </div>
  );
};

export default SocialBar;
