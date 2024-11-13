import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data";

const BlogPagination = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.desc}</p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Date:</strong> {blog.date}
              </p>
              <Link to="/blogDetails" className="text-blue-500 hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === i + 1
                ? "bg-green-500 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPagination;
