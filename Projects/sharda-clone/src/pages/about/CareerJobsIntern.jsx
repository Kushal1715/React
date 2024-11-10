import React from "react";
import TitleDisplayCard from "../../components/TitleDisplayCard";
import CareerJobsAndIntern from "../../components/CareerJobsAndIntern";

const CareerJobsIntern = () => {
  return (
    <>
      <TitleDisplayCard title="Career, Jobs and Internship" />
      <CareerJobsAndIntern
        category="Vacancy"
        title="Career, Jobs and Internship"
        desc="Our team members are passionate about their work and are committed to making a difference in their respective fields. With a focus on professional development and growth, we provide opportunities for career advancement and strive to create a supportive and inclusive work culture. Join us in pursuing our mission and making a positive impact on the world."
      />
    </>
  );
};

export default CareerJobsIntern;
