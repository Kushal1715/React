import React from "react";
import TitleDisplayCard from "../components/TitleDisplayCard";
import GoogleMapCom from "../components/GoogleMapCom";
const ContactUs = () => {
  return (
    <>
      <TitleDisplayCard title="Contact Us" />
      <div className="px-4 xl:px-[180px] pt-20 flex md:flex-row flex-col md:items-center justify-between pb-14">
        <div className="pb-6">
          <div className="pb-10">
            <h4 className="text-blue-500 text-xl pb-6">Contact</h4>
            <h1 className="font-bold text-4xl pb-6">Get In Touch ✋</h1>
            <p className="text-xl">Let’s discuss your project.</p>
          </div>
          <div className="pl-2 lg:pl-6 flex flex-col gap-11">
            <div>
              <h2 className="font-bold text-xl">Email</h2>
              <p className="text-xl text-gray-600">
                info@shardaproduction.com.np
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Contact</h2>
              <p className="text-xl text-gray-600">
                Mobile No: 9808042707, 9801467057
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Address</h2>
              <p className="text-xl text-gray-600">
                Lazimpat, Shivagalli, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200  p-4 lg:p-8 lg:min-w-[550px]">
          <form className="max-w-full rounded-lg">
            <div className="flex md:flex-row flex-col gap-4 pb-4">
              <div className="flex flex-col md:w-1/2 gap-2">
                <label className="font-semibold text-xl">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col md:w-1/2 gap-2">
                <label className="font-semibold text-xl">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <label className="font-semibold text-xl">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <label className="font-semibold text-xl">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <label className="font-semibold text-xl">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Message"
                name="message"
                rows={6}
                className="rounded-lg"
              />
            </div>
            <button className="bg-blue-500 py-1 px-6 rounded-md text-white text-xl">
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <GoogleMapCom />
    </>
  );
};

export default ContactUs;
