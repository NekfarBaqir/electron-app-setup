import React from "react";
import { Link } from "react-router-dom";

const SideBarMenu = ({ item }) => {
  return (
    // <Link to={item?.link}>
    <div className="w-10/12 mx-auto p-2 md:p-3 lg:p-4 cursor-pointer rounded-xl flex justify-start items-center gap-2 md:gap-3 lg:gap-5 bg-[#3063FF] transition-all hover:bg-[#2435D6]">
      <img src={item?.img} alt="menuIcon" width="20" />
      <p className="text-xs md:text-sm lg:text-base font-bold text-white">
        {item?.name}
      </p>
    </div>
    // </Link>
  );
};

export default SideBarMenu;
