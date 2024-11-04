import React from "react";
import VideoEmbed from "./VideoEmbed";

const OurWorkPortfolio = () => {
  return (
    <div className="px-4 xl:px-[180px] flex flex-col items-center bg-gray-100 p-14">
      <h1 className="text-4xl font-bold pb-14">Our Work Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-4 w-full ">
        <VideoEmbed videoId="adtFOwGEBHg" />
        <VideoEmbed videoId="adtFOwGEBHg" />
        <VideoEmbed videoId="adtFOwGEBHg" />
      </div>
    </div>
  );
};

export default OurWorkPortfolio;
