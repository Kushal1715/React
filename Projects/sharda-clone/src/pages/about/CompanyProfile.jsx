import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import WhyChooseUs from "../../components/WhyChooseUs";
import OurTeam from "../../components/OurTeam";
import OurClients from "../../components/OurClients";
import OurRecentBlog from "../../components/OurRecentBlog";
import CallToAction from "../../components/CallToAction";

const CompanyProfile = () => {
  return (
    <>
      <TitleDisplayCard title="Company Profile" />
      <WhyChooseUs />
      <OurTeam />
      <OurClients />
      <OurRecentBlog
        category="Blog"
        title="Our Recent Blog"
        desc="Join our community of readers and stay informed with our thought-provoking and educational blog content."
      />
      <CallToAction />
    </>
  );
};

export default CompanyProfile;
