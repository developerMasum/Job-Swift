import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import hiringImage from "../../../assets/Image/hiring.png";

const Hiring = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0 md:mr-96 items-center justify-items-start">
      <div className="">
        <h3 className="text-swift md:text-2xl font-bold text-xl text-center md:text-start mb-2">
          Hiring & Onboarding
        </h3>
        <p className="text-second font-semibold leading-8 md:mt-2">
          Job Swift helps you quickly find, hire, and onboard the best talent.
          With our powerful applicant tracking system and proactive onboarding
          tasks, you can create a compelling candidate experience and better
          first days for new hires.
        </p>
        <Link to="./hiring">
          <h4 className="text-gray-700 hover:underline font-bold text-base text-start md:text-start mt-2 md:mt-10 ">
            Learn More About Hiring & Onboarding{" "}
            <span>
              {" "}
              <FaChevronRight className="inline-block" />
            </span>
          </h4>
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img src={hiringImage} className="w-96 h-auto rounded-2xl" alt="" />
      </div>
    </div>
  );
};

export default Hiring;
