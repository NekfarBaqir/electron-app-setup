import React from "react";
import twitter from "../assets/images/icons/twitter.svg";
import discord from "../assets/images/icons/discord.svg";
import email from "../assets/images/icons/email.svg";

const Footer = () => {
  return (
    <div className="h-10 bg-[#022048] w-full absolute bottom-0 left-0 flex justify-between items-center px-4">
      <span />
      <div className="flex text-3xl gap-x-3">
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={discord} alt="discord" />
        </a>
        <a href="#">
          <img src={email} alt="email" />
        </a>
      </div>
      <p className="text-lg">v0.1.0</p>
    </div>
  );
};

export default Footer;
