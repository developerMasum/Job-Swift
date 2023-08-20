import React from "react";
import BestTalent from "./BestTalent";
import ExploreHiring from "./ExploreHiring";
import CheckOut from "./CheckOut";

const HiringOnboarding = () => {
  return (
    <div className="mx-auto px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-blue-900 italic text-4xl md:text-5xl font-bold my-4">
          Hiring & Onboarding
        </h2>
        <p className="text-secondary font-semibold my-4">
          Improve the experience for candidates, new hires, and HR with
          collaborative hiring and onboarding tools.
        </p>
      </div>
      <BestTalent />
      <ExploreHiring />
      <CheckOut />
    </div>
  );
};

export default HiringOnboarding;
