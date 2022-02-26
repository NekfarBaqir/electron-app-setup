import React from "react";
import { FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-10 bg-[#022048] w-full absolute bottom-0 left-0 flex justify-between items-center px-4">
      <span />
      <div className="flex text-3xl gap-x-3">
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaDiscord />
        </a>
        <a href="#">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-lg">v0.1.0</p>
    </div>
  );
};

export default Footer;
