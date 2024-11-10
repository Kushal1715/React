import React from "react";
import { services } from "../data";
import { CardComponent } from "./CardComponent";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=" px-4 xl:px-[180px] pt-14 bg-gray-200 pb-14">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-2xl lg:line-clamp-2 max-w-[600px]">
          We offer a wide range of digital marketing services to help your
          business achieve its goals in the online world.
        </p>
      </div>
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Link to={`/services/${service.path}`} key={i}>
            <CardComponent
              key={service.img}
              image={service.img}
              title={service.title}
              description={service.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
