import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import CallToAction from "../../components/CallToAction";

const Partners = () => {
  return (
    <>
      <TitleDisplayCard title="Our Partners" />
      <div className="px-4 xl:px-[180px]">
        <div className="grid lg:grid-cols-4 grid-cols-2">
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
          <img src="/clients/newmew_logo.jpg" className="mx-auto" />
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Partners;
