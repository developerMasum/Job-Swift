import React from "react";
import orgChart from "../../assets/Image/OrgChart.png";
import { FaPlaneDeparture } from "react-icons/fa";

const OrgChart = () => {
  return (
    <div className="my-48">
      <div>
        <div className="flex">
          <h3 className="text-2xl sm:text-4xl font-semibold mr-4">
            Organization chart
          </h3>
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          <img
            className="mx-auto w-32 sm:w-auto"
            src={orgChart}
            alt="OrgChart"
          />
          <h6 className="text-lg sm:text-2xl my-2">
            View your company's employees in an organization chart
          </h6>
          <p className="mb-2">
            Go to the{" "}
            <a href="#" className="text-blue-400 btn-link mx-1">
              Company Directory
            </a>{" "}
            to add employees and build your org chart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
