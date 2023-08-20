import React from "react";
import { AiFillSmile, AiFillCheckCircle, AiOutlineHeart } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

const areasOfFocusData = [
  {
    id: 1,
    name: "Employee Satisfaction with eNPS®",
    description:
      "Measure and improve employee satisfaction using the eNPS® methodology.",
    justification:
      "High employee satisfaction contributes to higher productivity, employee retention, and overall company success.",
    icon: <AiFillSmile />,
    linkTag: "Explore eNPS",
  },
  {
    id: 2,
    name: "Performance Management",
    description:
      "Implement effective performance management processes to set expectations, provide feedback, and evaluate employee contributions.",
    justification:
      "Performance management helps align individual and team goals with the organization's objectives, leading to improved outcomes.",
    icon: <AiFillCheckCircle />,
    linkTag: "Explore Performance Management",
  },
  {
    id: 3,
    name: "Employee Wellbeing",
    description:
      "Prioritize employee health and wellbeing by offering wellness programs, work-life balance initiatives, and mental health support.",
    justification:
      "Investing in employee wellbeing leads to higher morale, reduced burnout, and increased employee engagement.",
    icon: <AiOutlineHeart />,
    linkTag: "Explore Employee Wellbeing",
  },
];

const EmployeeExplore = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-2xl md:text-3xl text-center my-12 font-bold text-[#5a3a27]">
        Explore Employee Experience and Performance with Job Swift
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {areasOfFocusData.map((area) => (
          <div
            key={area.id}
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center justify-center mb-4 group">
              <div className="w-12 h-12 flex items-center justify-center bg-[#b28442] text-white rounded-full">
                {area.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#b28442]">
              {area.name}
            </h3>
            <p className="text-gray-600 mb-4">{area.description}</p>
            <p>{area.justification}</p>
            <a
              href="#"
              className="flex items-center text-[#b28442] mt-2 group-hover:text-[#5a3a27] hover:underline"
            >
              {area.linkTag} <FaChevronRight className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeExplore;
