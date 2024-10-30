import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="px-4 xl:px-[180px] lg:pt-2">
      <div className=" hidden lg:flex justify-between items-center ">
        <div className="flex items-center  gap-3">
          <IoIosMail className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl" />
          <a href="#" className="hover:text-blue-500">
            info@shardaclone.com.np
          </a>
          <FaPhone className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl" />
          <p>(+977) 9824567890/9812345678</p>
        </div>

        <div className="flex gap-7 items-center">
          <div className="flex gap-3">
            <FaFacebook
              size={18}
              className="cursor-pointer hover:text-blue-500"
            />
            <FaInstagram
              size={18}
              className="cursor-pointer hover:text-blue-500"
            />
            <FaTwitter
              size={18}
              className="cursor-pointer hover:text-blue-500"
            />
            <FaLinkedinIn
              size={18}
              className="cursor-pointer hover:text-blue-500"
            />
            <FaYoutube
              size={18}
              className="cursor-pointer hover:text-blue-500"
            />
          </div>
          <IoSearchOutline
            size={22}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
