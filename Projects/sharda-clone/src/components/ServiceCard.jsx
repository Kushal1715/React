import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, para }) => {
  return (
    <div className="px-4 xl:px-[180px] md:flex md:items-center md:justify-between pt-14 pb-14 gap-6 lg:gap-0">
      <div className="md:w-1/2 pb-10">
        <div className="pb-6">
          <p className="text-xl">Best Digital Marketing Agency in Nepal</p>
          <h1 className="font-bold text-3xl text-blue-500">{title}</h1>
        </div>
        <div className="pb-6">
          <p className="text-xl">{para}</p>
        </div>
        <Link to="/courses">
          <button className="flex items-center bg-blue-500 text-white px-6 py-2 gap-3 text-lg rounded-full">
            <FaArrowRight />
            Contact Now
          </button>
        </Link>
      </div>
      <div className="h-64 md:w-[450px] xl:w-[500px] ">
        <img
          src="/social media/social1.svg"
          className="w-full h-full border-2 border-blue-500 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
