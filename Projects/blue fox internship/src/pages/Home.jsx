import React from "react";
import { CarouselComponent } from "../components/CarouselComponent";

const Home = () => {
  return (
    <div className="h-screen md:px-[80px] bg-gray-400 pt-10">
      <CarouselComponent />
      <div className="max-w-screen-md mx-auto p-4 mt-8 text-teal-900 text-center">
        <h1 className="font-bold text-4xl mb-4 w-full">
          From Basics to Bold – Shop It All Here
        </h1>
        <p className="font-semibold text-2xl">
          Shop the latest arrivals and elevate your style with our exclusive
          selection of beauties, electronics and more
        </p>
      </div>
    </div>
  );
};

export default Home;
