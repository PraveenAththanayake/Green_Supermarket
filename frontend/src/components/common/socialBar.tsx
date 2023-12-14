import React from "react";
import socialMedia from "../../../public/images/footerImages/Group 30.png";

const SocialBar = () => {
  return (
    <div className="max-w-[1120px] mx-auto mt-[32px] mb-[58px]">
      <h4 className="font-nunito font-semibold text-[14px] text-center">
        Social Media
      </h4>
      <img className="mx-auto mt-[16px]" src={socialMedia} alt="socialMedia" />
      <p className="font-nunito font-semibold text-[12px] text-center mt-[8px]">
        Stay in the loop and be part of the GREEN Supermarket community!
      </p>
    </div>
  );
};

export default SocialBar;
