import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";

const Onboarding = () => {
  return (
    <div className="my-8 sm:my-48">
      <div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h3 className="text-xl sm:text-4xl font-semibold mb-2 sm:mb-0">
            Onboarding
          </h3>
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
        <p className="font-semibold text-gray-400">
          Track the progress of all workflows in the company
        </p>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          <img className="mx-auto w-32 sm:w-48" src={files} alt="Files" />
          <h6 className="text-lg sm:text-2xl my-2">
            Assign onboarding to new employees
          </h6>
          <p className="mb-2">
            New hires who have not yet been assigned{" "}
            <a href="#" className="text-blue-400 btn-link mx-1">
              Onboarding Workflows
            </a>
            will appear in 'Pending'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
