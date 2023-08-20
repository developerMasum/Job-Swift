import React from "react";
import image01 from "../../../src/assets/Image/change-org.svg";
import image02 from "../../../src/assets/Image/jacksonville-jaguars.svg";
import image03 from "../../../src/assets/Image/jelly-belly.svg";
import image04 from "../../../src/assets/Image/postmates.svg";
import image05 from "../../../src/assets/Image/usertesting.svg";
// import image06 from '../../../src/assets/Image/ziprecruiter.svg'

const HrBusiness = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="text-black font-semibold text-xl text-center mb-10">
        Join 30,000+ businesses that trust Job Swift{" "}
      </h1>
      <div className="flex flex-wrap md:justify-between items-center gap-4 ">
        <img src={image01} alt="" />
        <img src={image02} alt="" />
        <img src={image03} alt="" />
        <img src={image04} alt="" />
        <img src={image05} alt="" />
      </div>
    </div>
  );
};

export default HrBusiness;
