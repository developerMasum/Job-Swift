import React from "react";

import { FaPaperPlane } from "react-icons/fa";

const OrgChartTab = () => {
  return (
    <div className="mb-48 pt-8">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="md:text-3xl text-xl ">Organization chart</h3>
          <button className="flex bg-[#c7f0f1] px-2 py-1 rounded-full gap-2 items-center">
            <FaPaperPlane color="107191" size={12} />
            <span className="text-swift text-xs font-bold">BETA</span>
          </button>
        </div>
      </div>
      {/* Body */}

      <div className="pt-20">
        <img className="mx-auto sm:w-auto" src="https://i.ibb.co/2MM237X/orgChart.png" alt="OrgChart" />
        <h6 className="font-medium my-2">
          View your company's employees in an organization chart
        </h6>
        <p className="mb-2 text-swift text-sm">
          Go to the{" "}
          <span className="font-semibold hover:underline">
            Company Directory
          </span>
          to add employees and build your org chart.
        </p>
      </div>
    </div>
  );
};

export default OrgChartTab;
