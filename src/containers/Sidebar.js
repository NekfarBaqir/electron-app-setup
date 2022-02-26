import React from "react";
import LogoThick from "../assets/images/logo/logo-thick.svg";
import LogoText from "../assets/images/logo/logo-text.svg";
import SideBarMenu from "../components/elements/sideBarMenu";
import { SIDEBAR_MENU } from "../constants/SideBarMenu";
import RefreshIcon from "../assets/images/icons/loader.svg";
import gasIcon from "../assets/images/icons/gas.svg";
const Sidebar = () => {
  return (
    <div className="min-h-full bg-[#022048] w-1/5 flex flex-col justify-between items-center z-50">
      <div className="flex  flex-col justify-start items-center gap-3 md:gap-4 lg:gap-7 w-full">
        <div className="pt-3 flex flex-col justify-center items-center ">
          <img src={LogoThick} alt="logo" />
          <img src={LogoText} alt="logo" />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
          {SIDEBAR_MENU.map((menu, index) => (
            <SideBarMenu key={index} item={menu} />
          ))}
        </div>
      </div>
      <div className=" w-10/12 mx-auto flex my-4 md:my-5 flex-col gap-1 md:gap-2 justify-start items-center">
        <div className="flex justify-between items-center w-full">
          <p className=" text-white text-[9px] md:text-xs">
            Last Block:2 seconds ago
          </p>
          <img
            alt="refreshIcon"
            className="cursor-pointer"
            src={RefreshIcon}
            width="15"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-[#374EFF] flex flex-col gap-2 md:gap-3 w-full">
          <div className="flex justify-between items-center w-full p-2 bg-[#2435D6]">
            <p className="text-white font-bold text-xs md:text-sm">
              Gas Monitor
            </p>
            <div className="p-2 rounded-lg bg-[#374EFF] flex justify-center items-center cursor-pointer">
              <img
                alt="refreshIcon"
                className="cursor-pointer"
                src={gasIcon}
                width="15"
              />
            </div>
          </div>
          <div className="p-2 md:p-3 flex flex-col gap-2 w-full bg-[#3063FF]">
            <div className="flex justify-start items-center gap-1">
              <p className="text-gray-300 font-bold text-xs md:text-sm">
                Base Free:
              </p>
              <p className="text-white uppercase font-bold text-xs md:text-sm">
                53 gwei
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <p className="text-gray-300 font-bold text-xs md:text-sm">
                Rapid Free:
              </p>
              <p className="text-white uppercase font-bold text-xs md:text-sm">
                120 gwei
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
