import React, { useState } from "react";

const RequestQuote = () => {
  const [formData, setFromData] = useState({});

  const handleChange = (e) => {
    setFromData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-500 pt-11 pb-11">
      <div className="mx-4 xl:mx-[250px] border-2 bg-white rounded-3xl py-11">
        <h1 className="text-blue-500 text-6xl text-center font-bold pb-4">
          Request a Quote !
        </h1>
        <form className="flex flex-col items-left px-4 md:px-14 gap-4">
          <div className="flex md:flex-row flex-col md:items-center justify-center gap-4">
            <div className="flex flex-col md:w-1/3">
              <label id="name" className="text-xl pb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="rounded-lg"
                name="fullname"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:w-1/3">
              <label id="email" className="text-xl pb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="rounded-lg"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:w-1/3">
              <label id="phone" className="text-xl pb-2">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="rounded-lg"
                name="phone"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="pb-2 text-xl">
              Your Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className="rounded-lg"
              placeholder="Your Message"
              rows={7}
              name="message"
              required
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full border-2 bg-blue-500 text-white py-2 rounded-2xl text-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
