import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { BsTrophy, BsGraphUp, BsShieldLock } from "react-icons/bs";

const Tips = () => {
  const tips = [
    "Craft a compelling job title to attract top talent.",
    "Use bullet points in job descriptions for easy readability.",
    "Highlight unique company culture and perks.",
    "Add specific requirements and qualifications.",
    "Provide clear contact information for candidates.",
    "Include salary range for better candidate engagement.",
  ];

  const benefits = [
    {
      text: "Streamline the hiring process with our intuitive platform.",
      icon: <BsTrophy />,
      bgColor: "bg-blue-100",
    },
    {
      text: "Reach a diverse pool of candidates through our network.",
      icon: <BsGraphUp />,
      bgColor: "bg-green-100",
    },
    {
      text: "Access powerful analytics to track job performance.",
      icon: <BsShieldLock />,
      bgColor: "bg-purple-100",
    },
    {
      text: "Enhance your employer brand with customized listings.",
      icon: <BsTrophy />,
      bgColor: "bg-pink-100",
    },
    {
      text: "Effortlessly manage candidates and applications.",
      icon: <BsGraphUp />,
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-500">
          Tips for Successful Job Posting
        </h2>
        <div className="text-gray-600 space-y-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start border-l-4 border-gray-300 pl-4 py-2"
            >
              <div className="mr-2 mt-1">
                <AiOutlineWarning className="text-red-500" />
              </div>
              <p className="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-500">
          Benefits of Using JobSwift
        </h2>
        <div className="text-gray-500 space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-md border-[1px]   p-4 flex items-start space-x-4 ${benefit.bgColor}`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                {benefit.icon}
              </div>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
