import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaChartBar,
  FaClock,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaIdCard,
  FaClipboardCheck,
  FaStar,
  FaSearch,
  FaPaperPlane,
  FaTrophy,
} from "react-icons/fa";

const iconColors = [
  "#FFD700", // Gold
  "#FF69B4", // Hot Pink
  "#00CED1", // Dark Turquoise
  "#FFA500", // Orange
  "#9370DB", // Medium Purple
  "#FF6347", // Tomato
  "#40E0D0", // Turquoise
  "#20B2AA", // Light Sea Green
  "#32CD32", // Lime Green
  "#8A2BE2", // Blue Violet
  "#4682B4", // Steel Blue
  "#FF4500", // Orange Red
];

const HeadlineBar = () => {
  const items = [
    {
      text: "Find the Right Job",
      icon: <FaBriefcase color={iconColors[0]} />,
    },
    {
      text: "Connect with Employers",
      icon: <FaUsers color={iconColors[1]} />,
    },
    {
      text: "Career Growth Opportunities",
      icon: <FaChartBar color={iconColors[2]} />,
    },
    {
      text: "Save Time in Your Job Search",
      icon: <FaClock color={iconColors[3]} />,
    },
    {
      text: "Maximize Earnings",
      icon: <FaMoneyBillWave color={iconColors[4]} />,
    },
    {
      text: "Discover New Job Openings",
      icon: <FaCalendarCheck color={iconColors[5]} />,
    },
    {
      text: "Streamline Recruitment",
      icon: <FaIdCard color={iconColors[6]} />,
    },
    {
      text: "Efficient Hiring Process",
      icon: <FaClipboardCheck color={iconColors[7]} />,
    },
    {
      text: "Advanced Applicant Tracking",
      icon: <FaStar color={iconColors[8]} />,
    },
    {
      text: "Schedule Interviews Easily",
      icon: <FaSearch color={iconColors[9]} />,
    },
    {
      text: "Data-Driven Hiring Decisions",
      icon: <FaPaperPlane color={iconColors[10]} />,
    },
    {
      text: "Enhance Your Job Search",
      icon: <FaTrophy color={iconColors[11]} />,
    },
  ];

  return (
    <div className="bg-[#00756a] border-b-[1px] mt-5 text-center font-bold text-white p-3">
      <div className="flex justify-center items-center gap-3">
        <Marquee gradient={false} speed={50}>
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.icon}
              <p className="text-lg ml-2">{item.text}</p>
              {index !== items.length - 1 && (
                <div className="mx-2 border-l border-cyan-500 h-6" />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeadlineBar;
