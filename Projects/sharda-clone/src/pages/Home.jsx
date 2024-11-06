import React from "react";
import background from "/home/background.jpg";
import logo from "/logo/logo.png";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import VideoEmbed from "../components/VideoEmbed";
import OurWorkPortfolio from "../components/OurWorkPortfolio";
import Numbers from "../components/Numbers";
import OurClients from "../components/OurClients";
import OurRecentBlog from "../components/OurRecentBlog";

const Home = () => {
  return (
    <>
      <div className="p-[4px]">
        <div class="relative w-full h-[559px]">
          <img
            src={background}
            alt="Outer Image"
            class="w-full h-full object-cover"
          />
          <img
            src={logo}
            alt="Inner Image"
            class="absolute my-auto mx-14 md:mx-24 lg:mx-36 xl:mx-56 2xl:mx-60 inset-0 w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
          />
        </div>
      </div>
      <About />
      <Services />
      <Works />
      <Testimonials />
      <OurWorkPortfolio />
      <Numbers />
      <OurClients />
      <OurRecentBlog />
    </>
  );
};

export default Home;
