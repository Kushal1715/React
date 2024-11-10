import React from "react";

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
        <div className="md:max-w-[250px] border-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="w-full"
          />
          <div className="p-8 text-center">
            <h1 className="font-bold  text-xl max-w-36 mx-auto">
              Deepesh Nakarmi
            </h1>
            <span className="text-lg">Founder & CMO</span>
          </div>
        </div>
        <div className="md:max-w-[250px] border-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="w-full"
          />
          <div className="p-8 text-center">
            <h1 className="font-bold  text-xl max-w-36 mx-auto">
              Deepesh Nakarmi
            </h1>
            <span className="text-lg">Founder & CMO</span>
          </div>
        </div>
        <div className="md:max-w-[250px] border-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="w-full"
          />
          <div className="p-8 text-center">
            <h1 className="font-bold  text-xl max-w-36 mx-auto">
              Deepesh Nakarmi
            </h1>
            <span className="text-lg">Founder & CMO</span>
          </div>
        </div>
        <div className="md:max-w-[250px] border-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="w-full"
          />
          <div className="p-8 text-center">
            <h1 className="font-bold  text-xl max-w-36 mx-auto">
              Deepesh Nakarmi
            </h1>
            <span className="text-lg">Founder & CMO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
