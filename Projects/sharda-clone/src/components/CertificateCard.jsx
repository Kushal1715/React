import React from "react";

const CertificateCard = ({ image }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden border-2 cursor-pointer relative group">
      <div className="h-72 xl:h-60 w-full relative">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="certificate"
        />
        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default CertificateCard;
