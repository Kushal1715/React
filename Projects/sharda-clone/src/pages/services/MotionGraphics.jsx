import React from "react";
import ServiceTypes from "../../components/ServiceTypes";
import ServiceCard from "../../components/ServiceCard";

const serviceData = [
  {
    title: "Digital Design",
    description:
      "Digital design involves creating visual content for digital platforms using various tools and software. It includes creating digital graphics, animations, videos, web designs, and other multimedia content.",
    image: "/social media/social 2.svg",
    link: "/degital-design",
  },
  {
    title: "Copywriting",
    description:
      "Copywriting refers to the art of creating written content that is intended to persuade or influence the reader in some way. It involves writing text for advertising, marketing, or other promotional purposes, with the aim of getting people to take a specific action, such as making a purchase or signing up for a service.",
    image: "/social media/social 2.svg",
    link: "/copy-writing",
  },
  {
    title: "Content Writing",
    description:
      "Content writing refers to the process of creating written material for websites, blogs, articles, social media, and other digital platforms. The primary objective of content writing is to engage, inform, and persuade the audience to take a specific action.",
    image: "/social media/social 2.svg",
    link: "/content-writing",
  },
  {
    title: "Monthly Insights Reports and Analysis",
    description:
      "Monthly Insights Reports and Analysis refer to the process of monitoring and analyzing data to track the performance of a company’s online presence. This includes metrics such as website traffic, engagement rates, and conversion rates.",
    image: "/social media/social 2.svg",
    link: "/monthly-insights",
  },
  {
    title: "Competitor Analysis",
    description:
      "Competitor Analysis refers to the process of identifying and evaluating the strengths and weaknesses of your competitors in the market. It involves gathering and analyzing information about your competitors’ products or services, marketing strategies, pricing, and distribution channels.",
    image: "/social media/social 2.svg",
    link: "/competitor-analysis",
  },
];

const MotionGraphics = () => {
  return (
    <>
      <ServiceCard
        title="Motion Graphics"
        para="Increase your website’s visibility, drive traffic, and improve your search engine rankings by taking a holistic approach to SEO that delivers real results. Let’s work together to unlock your website’s full potential with our unmatched expertise, dedication, and creativity."
      />
      <ServiceTypes data={serviceData} title="Motion Graphics" />
    </>
  );
};

export default MotionGraphics;
