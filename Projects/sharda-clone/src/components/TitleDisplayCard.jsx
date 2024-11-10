import React from "react";

const TitleDisplayCard = ({ title }) => {
  return (
    <div className="relative">
      <img src="/works/workbg2.png" className="min-w-full h-72 object-fit" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

export default TitleDisplayCard;
