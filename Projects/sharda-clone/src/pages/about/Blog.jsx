import React from "react";
import BlogPagination from "../../components/BlogPagination";

const Blog = () => {
  return (
    <div className="px-4 xl:px-[180px] pt-14">
      <h1 className="text-center text-4xl text-blue-500 font-bold pb-10">
        Blogs
      </h1>
      <BlogPagination itemsPerPage={9} />
    </div>
  );
};

export default Blog;
