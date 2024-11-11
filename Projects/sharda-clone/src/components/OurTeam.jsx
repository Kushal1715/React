import React from "react";
import { teams } from "../data";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="px-4 xl:px-[180px]  pt-14 pb-14">
      <div className="text-center pb-14">
        <h1 className="font-bold text-blue-500 text-3xl pb-4">Our Team</h1>
        <p className="text-2xl max-w-[500px] mx-auto">
          Our team members are passionate about their work and are committed to
          making a difference in their respective fields.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
        {teams.map((team, i) => (
          <TeamCard
            key={i}
            image={team.image}
            name={team.name}
            position={team.position}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
