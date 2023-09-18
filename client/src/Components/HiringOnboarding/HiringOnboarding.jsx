import React from "react";
import BestTalent from "./BestTalent";
import ExploreHiring from "./ExploreHiring";
import CheckOut from "./CheckOut";

const HiringOnboarding = () => {
  return (
    <div className="mx-auto px-4 md:px-8 relative">
      <div className="text-center bg-[#7FE2D2] py-20">
    
        <h2 className="text-blue-900 italic text-4xl md:text-5xl font-bold my-4">
          Hiring & Onboarding
        </h2>
        <p className="text-swift font-semibold my-4">
          Improve the experience for candidates, new hires, and HR with
          collaborative hiring and onboarding tools.
        </p>
      </div>
     <div className="h-5">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.5" d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,101.3C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
     </div>
      <BestTalent />
      <ExploreHiring />
      <CheckOut />
    </div>
  );
};

export default HiringOnboarding;
