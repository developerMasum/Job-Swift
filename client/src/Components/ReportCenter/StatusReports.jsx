import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";

const StatusReports = () => {
  const reportData = [
    { icon: AiOutlineAlignCenter, title: "Current Pipeline", description: "See a snapshot of the current status for every job on the dashboard" },
    { icon: FaRegAddressBook, title: "Candidate Breakdown", description: "Filter and view the details of every candidate in your account" },
    { icon: BsActivity, title: "Activity", description: "Get a detailed breakdown of activity by team member and candidate." },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center">
        <h5 className="text-lg font-semibold">STATUS REPORTS</h5>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reportData.map((report, index) => (
          <div key={index} className="flex bg-base-100 shadow-xl p-4 border rounded-lg hover:border-green-600  hover:border-2">
            <div className="flex-1 flex flex-col items-center justify-center">
              {React.createElement(report.icon, { size: 40, className: "text-gray-400" })}
              <h2 className="mt-4 text-lg font-semibold text-center text-gray-700">{report.title}</h2>
              <p className="text-center text-gray-500">{report.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusReports;
