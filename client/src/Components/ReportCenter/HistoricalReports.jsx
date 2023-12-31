import React from "react";
import { PiFlowArrowFill } from "react-icons/pi";
import { TbArrowsRight } from "react-icons/tb";
import { LuCheckCircle, LuArrowUp10, LuMonitor } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { WiTornado } from "react-icons/wi";
import { ImCircleDown } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { GiThreeKeys } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const HistoricalReports = () => {
  const reportData = [
    { icon: PiFlowArrowFill, title: "Candidate Flow", linkData: "candidiate-flow", description: "The number of new candidates and the number moved forward over time." },
    { icon: LuCheckCircle, title: "Candidate Sources", linkData: "candidiate-source", description: "See the source of all candidates, including the most successful ones." },
    { icon: TbArrowsRight, title: "Hiring Velocity", linkData: "hiring-velocity", description: "Track the average time it takes candidates to get to each stage." },
    { icon: WiTornado, title: "Historic Pipeline", linkData: "historic-pipeline", description: "Track the percentage of candidates making it through each stage." },
   
  ];
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center">
        <h5 className="text-lg font-semibold">HISTORICAL REPORTS</h5>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reportData.map((report, index) => (
          <div key={index} className="flex bg-base-100 shadow-xl p-4 border rounded-lg hover:border-green-600  hover:border-2">

            <Link to={report.linkData}>
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                {React.createElement(report.icon, { size: 40 })}
                <h2 className="mt-4 text-lg font-semibold text-center text-gray-700">{report.title}</h2>
                <p className="text-center text-gray-500">{report.description}</p>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalReports;
