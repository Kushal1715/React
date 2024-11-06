import React from "react";
import { blogs } from "../data";
import { BlogCard } from "./BlogCard";

const OurRecentBlog = () => {
  return (
    <div className="px-4 xl:px-[180px] pt-14 pb-14">
      <div>
        <div className="text-center pb-8">
          <h4 className="pb-5 text-blue-500 text-xl">Blog</h4>
          <h1 className="font-bold text-4xl pb-5">Our Recent Blog</h1>
          <p className="text-xl">
            Join our community of readers and stay informed with our
            thought-provoking and educational blog content.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <BlogCard
              image={blog.image}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRecentBlog;
