import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";

const Onboarding = () => {
  return (
    <div className="my-48">
      <div>
        <div className="flex">
          <h3 className="text-4xl font-semibold mr-4">Onboarding</h3>
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
        <p className="font-semibold text-gray-400">Track the progress of all workflows in the company</p>
      </div>
      {/* Body */}
      <div className="flex justify-center items-center mt-24">
        <div className="text-center">
          <img className="mx-auto" src={files} alt="OrgChart" />
          <h6 className="text-2xl my-4">Assign onboarding to new employees</h6>
          <p className="mb-4">
            New hires who have not yet been assigned
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
