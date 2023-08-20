import React from "react";
import hiringImage from "../../assets/Image/hiring.png";

const BestTalent = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-4 md:px-10 items-center my-6 md:my-16">
      <div className="text-center md:text-left">
        <h3 className="text-secondary md:text-2xl font-bold text-xl mb-2">
          Find, hire & onboard the best talent.
        </h3>
        <p className="text-secondary font-semibold leading-8 md:mt-2">
          JobSwift is designed to help organizations find, evaluate, hire and
          onboard the right talent as seamlessly and quickly as possible, all
          while enabling a personal touch and creating great first impressions
          along the way.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-8 my-4">
          <button className="btn btn-info   md:w-44">
            Get My Free Demo
          </button>
          <button className="btn btn-outline btn-success  md:w-44 mt-4 md:mt-0">
            Try It Free
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img src={hiringImage} className="w-full md:w-2/3 h-auto rounded-2xl" alt="" />
      </div>
    </div>
  );
};

export default BestTalent;
