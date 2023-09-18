import React from "react";
import {
  RiBarChart2Fill,
  RiUserSettingsFill,
  RiFileSearchLine,
  RiTimeLine,
  RiBookOpenFill,
  RiShieldStarFill,
} from "react-icons/ri";

const integrationData = [
  { id: 1, name: "Payroll", icon: RiBarChart2Fill },
  { id: 2, name: "Performance", icon: RiUserSettingsFill },
  { id: 3, name: "Applicant Tracking System", icon: RiFileSearchLine },
  { id: 4, name: "Time Tracking and Scheduling", icon: RiTimeLine },
  { id: 5, name: "Learning and Training", icon: RiBookOpenFill },
  { id: 6, name: "Benefits Administration", icon: RiShieldStarFill },
];

const Solutions = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="mb-6 text-gray-700 font-semibold text-2xl md:text-3xl">
        Explore Top Solutions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {integrationData.map((integration) => (
          <div
            key={integration.id}
            className="flex items-center bg-white border-[1px] border-green-200 rounded-t-lg p-4 shadow-sm hover:shadow-md cursor-pointer"
          >
            <integration.icon className="h-8 w-8 text-[#219438] mr-3" />
            <span className="text-gray-800 text-sm md:text-base">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Solutions;
