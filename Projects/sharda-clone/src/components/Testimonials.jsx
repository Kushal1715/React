import React from "react";
import TestimonialSwiper from "./TestimonialSwiper";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="px-4 xl:px-[180px] py-14 bg-gray-100 flex flex-col md:flex-row md:items-center gap-5">
      <div className="md:w-1/3">
        <h2 className=" text-xl font-bold pb-5">Testimonials</h2>
        <h1 className="text-4xl font-bold text-blue-500 mb-4 pb-4">
          Good Things You Have Heard About Us
        </h1>
        <p className=" mb-8 text-xl pb-4">
          Here’s what our Amazing Clients have to say till now.
        </p>
        <div className="flex mb-10">
          <a
            href="#"
            className="bg-blue-500 text-white px-7 py-3 rounded-full text-xl"
          >
            Read All ➔
          </a>
        </div>
      </div>
      <div className="md:w-2/3 flex flex-col items-center">
        <div className="pb-6">
          <RiDoubleQuotesL size={70} className="text-blue-300" />
        </div>
        <TestimonialSwiper />
      </div>
    </div>
  );
};

export default Testimonials;
