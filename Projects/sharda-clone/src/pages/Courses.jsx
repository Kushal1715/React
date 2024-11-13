import React from "react";
import { courses } from "../data";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 xl:px-[180px] pt-10 ">
      {courses.map((course, i) => (
        <div key={i} className="pt-14 pb-14">
          <p className="pb-4">{course.date}</p>
          <h1 className="pb-6 text-4xl font-bold">{course.title}</h1>
          <p className="pb-6 text-xl border-b-2">{course.desc}</p>
          <button
            className="flex items-center pt-4 gap-2 text-blue-500"
            onClick={() => navigate("/courseDetails")}
          >
            Read More <FaArrowRight></FaArrowRight>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
