import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import About from "../../components/About";
import about2 from "/about/about2.png";
import Testimonials from "../../components/Testimonials";
import Numbers from "../../components/Numbers";
import OurTeam from "../../components/OurTeam";
import OurClients from "../../components/OurClients";
import CallToAction from "../../components/CallToAction";
import WhyChooseUs from "../../components/WhyChooseUs";

const AboutUs = () => {
  return (
    <div>
      <TitleDisplayCard title="About Us" />
      <About image={about2} />
      <WhyChooseUs />
      <Testimonials />
      <Numbers />
      <OurTeam />
      <OurClients />
      <CallToAction />
    </div>
  );
};

export default AboutUs;
