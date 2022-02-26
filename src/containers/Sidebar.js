import React from "react";
import LogoThick from "../assets/images/logo/logo-thick.svg";
import LogoText from "../assets/images/logo/logo-text.svg";

const Sidebar = () => {
  return (
    <div className="min-h-full bg-[#022048] w-[200px] flex flex-0 flex-col justify-start items-center">
      <div className="pt-3 flex flex-col justify-center items-center">
        <img src={LogoThick} alt="logo" />
        <img src={LogoText} alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
