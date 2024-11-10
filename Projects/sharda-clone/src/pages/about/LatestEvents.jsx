import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import { blogs } from "../../data";
import { BlogCard } from "../../components/BlogCard";

const LatestEvents = () => {
  return (
    <>
      <TitleDisplayCard title="Latest Events" />
      <div className="px-4 xl:px-[180px] pt-14 pb-14">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog, i) => (
            <BlogCard
              image={blog.image}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestEvents;
