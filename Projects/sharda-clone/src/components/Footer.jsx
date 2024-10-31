import React from "react";
import logo from "/logo/logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="xl:px-[180px] px-4 py-4 md:py-10 bg-black text-white">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-11">
          <div className="basis-2/4">
            <div className="">
              <div className="w-40 h-40 overflow-hidden">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg">
                We assist companies in developing innovative digital goods and
                experiences.
              </p>
              <div className="mt-4 flex flex-col gap-2 ">
                <div className="flex items-center gap-4 hover:text-blue-500">
                  <IoIosMail />
                  <a href="#" className="text-md ">
                    info@shardaclonewebsite.com.np
                  </a>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:text-blue-500"
                >
                  <FaPhone />
                  <p className="text-md">(+977) 9123456789</p>
                </a>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <ul className="flex flex-col gap-4">
              <li className="text-blue-500 font-bold text-2xl">Quick Links</li>
              <li className="text-lg">
                <Link className="hover:text-blue-500">About Us</Link>
              </li>
              <li className="text-lg">
                <Link className="hover:text-blue-500">Our Team</Link>
              </li>
              <li className="text-lg">
                <Link className="hover:text-blue-500">Our Partners</Link>
              </li>
              <li className="text-lg">
                <Link className="hover:text-blue-500">Company Profile</Link>
              </li>
              <li className="text-lg">
                <Link className="hover:text-blue-500">
                  Career, Jobs and Internship
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <ul className="flex flex-col gap-4">
              <li className="text-blue-500 font-bold text-2xl">
                Popular Services
              </li>
              <li className="text-lg">
                <Link to="" className="hover:text-blue-500">
                  Content Marketing
                </Link>
              </li>
              <li className="text-lg">
                <Link to="" className="hover:text-blue-500">
                  Digital Promotions
                </Link>
              </li>
              <li className="text-lg">
                <Link to="" className="hover:text-blue-500">
                  Graphic Designs
                </Link>
              </li>
              <li className="text-lg">
                <Link to="" className="hover:text-blue-500">
                  Motion graphics
                </Link>
              </li>
              <li className="text-lg">
                <Link to="" className="hover:text-blue-500">
                  Videography
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4 flex flex-col gap-4 text-blue-500 font-bold text-2xl">
            <h1>Socials</h1>
            <div className="flex lg:flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <FaInstagram className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
                <FaTwitter className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
                <FaLinkedinIn className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
              </div>
              <div className="flex flex-wrap gap-4">
                <FaFacebook className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
                <FaYoutube className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
                <FaTiktok className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:px-[180px] px-4 py-4 md:py-6 bg-blue-500 text-white flex flex-col lg:flex-row justify-between items-center text-lg flex-wrap gap-4 lg:gap-0">
        <div>Copyright @ All Rights Reserved - Sharda Production</div>
        <div className="flex gap-6">
          <Link>Terms of use</Link>
          <Link>Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
