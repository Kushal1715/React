import React from "react";
import ClientSwiper from "./ClientSwiper";

const OurClients = () => {
  return (
    <div className="px-4 xl:px-[180px] bg-gray-200 pt-14 pb-24">
      <div className="text-center pb-2">
        <h3 className="text-blue-500 pb-6 text-xl">Our Clients</h3>
        <h1 className="pb-6 font-bold text-3xl">
          Client That We Have Worked With.
        </h1>
        <p className="text-xl">
          We have worked with these beautiful client to create awesome product.
        </p>
      </div>
      <ClientSwiper />
    </div>
  );
};

export default OurClients;
