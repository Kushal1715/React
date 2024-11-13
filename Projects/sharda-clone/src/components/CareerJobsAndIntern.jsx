import React from "react";
import { careerJobsAndIntern } from "../data";
import { BlogCard } from "./BlogCard";

const CareerJobsAndIntern = ({ category, title, desc }) => {
  return (
    <div className="px-4 xl:px-[180px] pt-14 pb-14">
      <div>
        <div className="text-center pb-8">
          <h4 className="pb-5 text-blue-500 text-xl">{category}</h4>
          <h1 className="font-bold text-4xl pb-5">{title}</h1>
          <p className="text-xl max-w-[900px] mx-auto">{desc}</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {careerJobsAndIntern.map((c, i) => (
            <BlogCard
              image={c.image}
              title={c.title}
              desc={c.desc}
              date={c.date}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerJobsAndIntern;