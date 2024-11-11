import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import OurAccomplishments from "../../components/OurAccomplishments";
import { certificates } from "../../data";
import CertificateCard from "../../components/CertificateCard";

const AwardsAndCertification = () => {
  return (
    <>
      <TitleDisplayCard title="Our Awards and Certification" />
      <OurAccomplishments
        category="awards"
        title="Our Accomplishments"
        desc="Our employee-owners are among the best in the industry, many of whom have been honored as 40 Under 40 honorees in their communities. These accomplishments reflect the skill and grit of our employee-owners and the commitment we have to fulfilling our mission."
      />
      <div className="px-4 xl:px-[180px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((c, i) => (
            <CertificateCard key={i} image={c.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardsAndCertification;
