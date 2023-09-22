import React from "react";
import { FaBackward, FaForward } from "react-icons/fa";

import DemoForm from "../../Components/DemoPage/DemoForm";
import HrBusiness from "../../Components/DemoPage/HrBusiness";
import GreatWork from "../../Components/DemoPage/GreatWork";
import Heart from "../../Components/DemoPage/Heart";
import HeightLogo from "../../Components/DemoPage/HeightLogo";
import { Slide } from "react-awesome-reveal";

const DemoPage = () => {
  return (
    <div>
      <div className="bg-image -rounded-b-xl p-2 md:p-20 md:flex justify-between items-center">
       <Slide direction="left">  <div className="space-y-5">
          <h1 className="font-extrabold text-4xl text-[#00673b]">
            Get a demo of Job Swift .
          </h1>
          <p>
            Job Swift is an easy-to-use platform of people-centered solutions to{" "}
            <br />
            help you hire, onboard, run payroll, and develop your culture.
          </p>
          <h2 className="font-semibold text-xl text-[#348562]">
            Schedule a free demo now to:
          </h2>
          <ul className="text-gray-600">
            <li>
              {" "}
              <span>
                <FaForward className="inline-block mr-2"></FaForward>
              </span>
              Learn about the Job Swift platform from a product expert.
            </li>
            <li>
              <span>
                <FaForward className="inline-block mr-2"></FaForward>
              </span>
              Discuss your specific HR goals and pain points.
            </li>
            <li>
              <span>
                <FaForward className="inline-block mr-2"></FaForward>
              </span>
              Explore how our tools can help you succeed.
            </li>
            <li>
              <span>
                <FaForward className="inline-block mr-2"></FaForward>
              </span>
              See pricing options.
            </li>
          </ul>
        </div></Slide>
       <Slide direction="right"> <div>
          <DemoForm></DemoForm>
        </div></Slide>
      </div>
      <HrBusiness></HrBusiness>
      <GreatWork></GreatWork>
      <Heart></Heart>
      <HeightLogo></HeightLogo>
    </div>
  );
};

export default DemoPage;
