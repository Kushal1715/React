import React from "react";

const TeamCard = ({ image, name, position }) => {
  return (
    <div className="md:max-w-[250px] border-2">
      <img src={image} className="w-full" />
      <div className="p-8 text-center">
        <h1 className="font-bold  text-xl max-w-36 mx-auto">{name}</h1>
        <span className="text-lg">{position}</span>
      </div>
    </div>
  );
};

export default TeamCard;
