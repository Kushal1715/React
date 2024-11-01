import React, { useState } from "react";
import logo from "/logo/logo.png";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [serviceDropDown, setServiceDropDown] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const openAboutDropdown = () => {
    setAboutDropDown(true);
  };
  const closeAboutDropdown = () => {
    setAboutDropDown(false);
  };
  const openServiceDropdown = () => {
    setServiceDropDown(true);
  };
  const closeServiceDropdown = () => {
    setServiceDropDown(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropDown(!aboutDropDown);
  };
  const toggleServiceDropdown = () => {
    setServiceDropDown(!serviceDropDown);
  };
  return (
    <div className=" px-4 xl:px-[180px] pt-1 sticky top-0 h-20 z-50 bg-white w-full">
      <div className="lg:border-t-2 flex justify-between items-center">
        <div className="w-20 h-20 overflow-hidden">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="hidden lg:inline">
          <ul className="flex gap-6 text-xl">
            <li>
              <Link to="/" className="hover:text-blue-600  font-semibold">
                HOME
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={openAboutDropdown}
              onMouseLeave={closeAboutDropdown}
            >
              <Link className="flex items-center hover:text-blue-600  font-semibold">
                ABOUT <IoMdArrowDropdown />
              </Link>

              {aboutDropDown && (
                <ul className="absolute top-full  bg-white  rounded-lg z-10 shadow-lg w-80 text-gray-700 text-[18px]">
                  <Link to="/about-us">
                    <li className="px-4 py-2 hover:bg-blue-500 mt-4 border-t-2 rounded-t-xl">
                      About Us
                    </li>
                  </Link>
                  <Link to="/about/career-jobs-and-internship">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Career, Jobs and Internship
                    </li>
                  </Link>
                  <Link to="/about/blog">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Blog
                    </li>
                  </Link>
                  <Link to="/about/latest-events">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Latest Events
                    </li>
                  </Link>
                  <Link to="/about/company-profile">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Company Profile
                    </li>
                  </Link>
                  <Link to="/about/our-awards-and-certification">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Our awards and certification
                    </li>
                  </Link>
                  <Link to="/about/our-partners">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Our Partners
                    </li>
                  </Link>
                  <Link to="/about/team">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200 rounded-b-xl">
                      Our Team
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={openServiceDropdown}
              onMouseLeave={closeServiceDropdown}
              className="relative"
            >
              <Link className="flex items-center hover:text-blue-600  font-semibold">
                SERVICES <IoMdArrowDropdown />
              </Link>
              {serviceDropDown && (
                <ul className="absolute top-full  bg-white  rounded-lg shadow-lg w-80 text-gray-700 text-[18px]  font-sans z-40">
                  <Link to="/services/social-media-management">
                    <li className="px-4 py-2 hover:bg-blue-500 mt-4 border-t-2 rounded-t-xl">
                      Social Media Management
                    </li>
                  </Link>
                  <Link to="/services/digital-promotions">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Digital Promotions
                    </li>
                  </Link>
                  <Link to="/services/content-marketing">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Content Marketing
                    </li>
                  </Link>
                  <Link to="/services/motion-graphics">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Motion graphics
                    </li>
                  </Link>
                  <Link to="/services/graphic-designs">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Graphic Designs
                    </li>
                  </Link>
                  <Link to="/services/videography">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Videography
                    </li>
                  </Link>
                  <Link to="/services/photoshoot">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Photoshoot
                    </li>
                  </Link>
                  <Link to="/services/seo">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200 ">
                      SEO
                    </li>
                  </Link>
                  <Link to="/services/bulk-sms">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200">
                      Bulk SMS
                    </li>
                  </Link>
                  <Link to="/services/website-development">
                    <li className="px-4 py-2 hover:bg-blue-500 border-gray-200 rounded-b-xl">
                      Website Development
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/our-works"
                className="hover:text-blue-600  font-semibold"
              >
                OUR WORKS
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-blue-600  font-semibold"
              >
                COURSES
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="px-4 py-2 bg-blue-500 text-white rounded-md  font-semibold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="border-blue-500 cursor-pointer text-white bg-blue-500 p-1 rounded-md"
            size={40}
            onClick={toggleNavbar}
          />
          {openNavbar && (
            <div className="absolute border-2 top-0 right-0 opacity-100 flex justify-between w-[400px] sm:w-[500px] md:w-[600px] p-10 bg-gray-100 min-h-screen z-10">
              <ul className="flex flex-col gap-5 text-md sm:text-xl md:text-xl">
                <li className="mt-10">
                  <Link
                    to="/"
                    onClick={toggleNavbar}
                    className="hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={toggleAboutDropdown}>
                  <Link className="flex items-center hover:text-blue-500">
                    About <IoMdArrowDropdown className="ml-1 " />
                  </Link>
                  {aboutDropDown && (
                    <ul className="  bg-gray-100  rounded-lg shadow-lg w-80 text-gray-700 text-[18px]">
                      <li className="px-4 py-2 hover:text-blue-500 mt-4 border-t-2 rounded-t-xl">
                        <Link to="/about-us" onClick={toggleNavbar}>
                          - About Us
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/about/career-jobs-and-internship"
                          onClick={toggleNavbar}
                        >
                          - Career, Jobs and Internship
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/about/blog" onClick={toggleNavbar}>
                          - Blog
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/about/latest-events" onClick={toggleNavbar}>
                          - Latest Events
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/about/company-profile"
                          onClick={toggleNavbar}
                        >
                          - Company Profile
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/about/our-awards-and-certification"
                          onClick={toggleNavbar}
                        >
                          - Our awards and certification
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/about/our-partners" onClick={toggleNavbar}>
                          - Our Partners
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200 rounded-b-xl">
                        <Link to="/about/team" onClick={toggleNavbar}>
                          - Our Team
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={toggleServiceDropdown}>
                  <Link className="flex items-center hover:text-blue-500">
                    Services <IoMdArrowDropdown className="ml-1 " />
                  </Link>
                  {serviceDropDown && (
                    <ul className="  bg-gray-100  rounded-lg shadow-lg w-80 text-gray-700 text-[18px]  font-sans">
                      <li className="px-4 py-2 hover:text-blue-500 mt-4 border-t-2 rounded-t-xl">
                        <Link
                          onClick={toggleNavbar}
                          to="/services/social-media-management"
                        >
                          - Social Media Management
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/services/digital-promotions"
                          onClick={toggleNavbar}
                        >
                          - Digital Promotions
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/services/content-marketing"
                          onClick={toggleNavbar}
                        >
                          - Content Marketing
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/services/motion-graphics"
                          onClick={toggleNavbar}
                        >
                          - Motion graphics
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link
                          to="/services/graphic-designs"
                          onClick={toggleNavbar}
                        >
                          - Graphic Designs
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/services/videography" onClick={toggleNavbar}>
                          - Videography
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/services/photoshoot" onClick={toggleNavbar}>
                          - Photoshoot
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200 ">
                        <Link to="/services/seo" onClick={toggleNavbar}>
                          - SEO
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200">
                        <Link to="/services/bulk-sms" onClick={toggleNavbar}>
                          - Bulk SMS
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:text-blue-500 border-gray-200 rounded-b-xl">
                        <Link
                          onClick={toggleNavbar}
                          to="/services/website-development"
                        >
                          - Website Development
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/our-works"
                    onClick={toggleNavbar}
                    className="hover:text-blue-500"
                  >
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNavbar}
                    className="hover:text-blue-500"
                    to="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <IoIosMail className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl" />
                    <a href="#" className="hover:text-blue-500">
                      info@shardaclonewebsite.com.np
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <FaPhone className="text-blue-500 border border-blue-500 rounded-full p-2 text-4xl" />
                    <p>(+977) 9824567890/9812345678</p>
                  </div>
                </li>
                <li className="mt-3">
                  <Link
                    to="/contact-us"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md  font-semibold "
                    onClick={toggleNavbar}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div>
                <RiCloseLargeFill
                  size={35}
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleNavbar}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
