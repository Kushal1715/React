import React from "react";

const Numbers = () => {
  return (
    <div className="px-4 xl:px-[180px] bg-gray-200 pt-14 pb-14">
      <div className="flex justify-center items-center gap-20 xl:gap-32 2xl:gap-36 flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            800<span className="text-blue-500">+</span>
          </span>
          <span className="text-sm">Happy Clients</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            10<span className="text-blue-500">K+</span>
          </span>
          <span>Projects Completed</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            100<span className="text-blue-500">+</span>
          </span>
          <span>Clients Globally</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            15<span className="text-blue-500">+</span>
          </span>
          <span>Industry-acclaimed</span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
