import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 xl:px-[180px] pt-14 pb-14">
      <div className="flex flex-col gap-3 xl:gap-4">
        <h1 className="pl-6 font-semibold text-xl">About Us</h1>
        <div className="flex md:flex-row flex-col justify-center items-center xl:items-start flex-wrap ">
          <div className="md:w-1/2 px-6 flex flex-col gap-6 md:pr-20">
            <h1 className="font-bold text-3xl lg:text-3xl 2xl:text-4xl text-blue-500 ">
              We are more than just a digital Marketing agency.
            </h1>
            <p className="text-xl lg:text-xl 2xl:text-2xl">
              Sharda Production is a leading digital marketing company with over
              a decade of experience. We help you visualize your brand and
              achieve your business goals. Contact us now to see how we can help
              your business thrive in today’s digital world
            </p>
            <div className="flex gap-2  items-center justify-center sm:justify-start">
              <div className="flex flex-col border-2 p-4 px-10 items-center rounded-lg">
                <span className="font-bold text-3xl">
                  800<span className="text-blue-500">+</span>
                </span>{" "}
                Total Clients
              </div>
              <div className="flex flex-col border-2 p-4 items-center rounded-lg">
                <span className="font-bold text-3xl">
                  10<span className="text-blue-500">K+</span>
                </span>{" "}
                Projects Completed
              </div>
            </div>
            <div>
              <button
                className="py-3 px-8 border-2 rounded-full bg-blue-500 text-white flex text-lg"
                onClick={() => navigate("/about-us")}
              >
                Learn More
                <MdKeyboardArrowRight className="mt-[6px] ml-1" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 pt-10 md:pt-0">
            <div>
              <img src={image} alt="about 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
