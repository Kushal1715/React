import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceTypes = ({ data, title }) => {
  return (
    <div className="px-4 xl:px-[180px] pb-14">
      <h1 className="text-4xl font-bold">Types of {title}</h1>
      {data.map((service, index) => (
        <div
          key={index}
          className={`md:flex md:items-center md:justify-between pt-14 pb-4 gap-6 lg:gap-0 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className="h-72 md:w-[450px] xl:w-[500px]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full"
            />
          </div>
          <div className="md:w-1/2 pb-10">
            <div className="pb-6">
              <h1 className="font-bold text-3xl text-blue-500">
                {service.title}
              </h1>
            </div>
            <div className="pb-6">
              <p className="text-xl">{service.description}</p>
            </div>
            <Link to={service.link}>
              <button className="flex items-center bg-blue-500 text-white px-6 py-2 gap-3 text-lg rounded-full">
                <FaArrowRight />
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTypes;
