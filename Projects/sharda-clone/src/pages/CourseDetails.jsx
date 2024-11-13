import React, { useState } from "react";

const CourseDetails = () => {
  const [selectBox, setSelectBox] = useState(false);
  return (
    <div className="px-4 xl:px-[180px] pt-20 ">
      <div className=" w-100% pb-10">
        <img src="/blogs/b8.jpg" className="w-full h-auto" />
      </div>
      <div className="pb-11">
        <h1 className="text-5xl font-bold  pb-8">Digital Marketing</h1>
        <p>By Sharda Production - April 7, 2023</p>
      </div>
      <div className="bg-gray-200 flex md:flex-row flex-col md:items-center justify-between p-4 mb-4 gap-10 md:gap-0">
        <div className="flex flex-col items-center justify-center md:w-1/3 border-b-2 pb-6 md:border-b-0 md:border-r-2 border-gray-700 gap-4">
          <p>Current Status</p>
          <p className="bg-yellow-300 px-3 py-1 rounded-full text-sm">
            NOT ENROLLED
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/3 border-b-2  pb-6 md:border-r-2 md:border-b-0 border-gray-700 gap-4">
          <p>Price</p>
          <h1 className="text-xl font-bold">Closed</h1>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/3  md:border-r-2  border-gray-700 gap-4">
          <p>Get Started</p>
          <button className="py-2 px-6 bg-blue-500 text-white">
            Take this course
          </button>
        </div>
      </div>
      <div className="pb-10">
        <p className="text-xl">
          The HyperText Markup Language, or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets and scripting
          languages such as JavaScript.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-2xl pb-8">Course Content</h1>
        <h4 className="font-semibold text-lg pb-4">First Section</h4>
        <div className="p-6 border-2 flex items-center gap-4 mb-4">
          <div
            className={`border-4 rounded-full h-6 w-6 ${
              selectBox ? "bg-gray-400" : "bg-white"
            }`}
            onClick={() => setSelectBox(!selectBox)}
          ></div>
          <h1>01 – HTML Introduction</h1>
        </div>
        <div className="p-6 border-2 flex items-center gap-4 mb-4">
          <div
            className={`border-4 rounded-full h-6 w-6 ${
              selectBox ? "bg-gray-400" : "bg-white"
            }`}
            onClick={() => setSelectBox(!selectBox)}
          ></div>
          <h1>01 – HTML Introduction</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
