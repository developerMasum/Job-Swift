import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeResource = () => {
  const resources = [
    {
      id: 1,
      name: "Speedway Motors: Measuring Culture with Job Swift ",
      image:
        "https://www.bamboohr.com/hr-software/media_1ec84c0925a1a7ccec48f6340930988163f39fc9b.png?width=2000&format=webply&optimize=medium",
      description:
        "Hear from Speedway Motors’ director of people operations Betsy Grindlay, a real-life customer, on how Job Swift has helped her organization improve employee performance and company culture.",

      linkTag: "Watch or Read the Interview",
    },
    {
      id: 2,
      name: "The Employee Experience Journey",
      image:
        "https://www.bamboohr.com/hr-software/media_1bb955a97747904098994f5542f6f7f93124841b6.png?width=2000&format=webply&optimize=medium",
      description:
        "Tired of researching and comparing? In this short webinar packed with information and first-hand customer stories, we’ll show you how Job Swift makes the dream of all-in-one payroll, time tracking, and benefits data a reality.",

      linkTag: "Download the Ebook",
    },
    {
      id: 3,
      name: "Employee Experience Webinars",
      image:
        "https://www.bamboohr.com/hr-software/media_1c1b1837548029698d8b4af9ca5f64d2de47363eb.png?width=2000&format=webply&optimize=medium",
      description:
        "Looking for tips, tricks, insights, latest trends, and expertise on building a great employee experience? Look no further than our plentiful collection of webinars.",

      linkTag: "Browse Employee Experience Webinars",
    },
  ];
  return (
    <div className="w-full bg-[#ffffe5]">
      <div className="max-w-[1100px] mx-auto p-16">
        <div className="flex justify-center items-center my-10 text-center ">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-[#5a3a27]">
              Resources for Improving the Employee Experience
            </h1>
            <h3 className="text-[18px] text-gray-600">
              These valuable resources help you on your journey to creating a
              great place to work.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white p-6 rounded-lg border border-[#e5e5e5] hover:shadow-md transition duration-300 transform hover:scale-105"
            >
              <img
                src={resource.image}
                alt={resource.name}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold text-[#5a3a27] mt-4 mb-2">
                {resource.name}
              </h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link
                to="/demo-page" // Update with your actual resource link
                className="flex items-center text-[#b28442] hover:text-[#5a3a27] hover:underline"
              >
                {resource.linkTag} <FaChevronRight className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeResource;
