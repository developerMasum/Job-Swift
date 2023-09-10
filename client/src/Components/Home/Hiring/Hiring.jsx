
import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Hiring = () => {
  return (
    <div className="py-10 md:py-16 bg-gray-100">
      <div className="container mx-auto md:flex justify-between items-center border-[1px] p-6">
        <div className="md:w-1/2 text-gray-500">
          <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
            Elevate Your ATS Experience
          </h3>
          <p className="text-lg text-gray-600 leading-7 md:leading-8">
            Job Swift empowers you to quickly discover, recruit, and seamlessly onboard top talent with our Advanced Applicant Tracking System (ATS). Our robust applicant tracking system and proactive onboarding tools enable you to craft an exceptional candidate experience and ensure smooth transitions for new hires.
          </p>
          <Link to="./hiring" className="mt-6 inline-block">
            <h4 className="text-swift font-bold text-base text-start md:text-start flex items-center text-primary">
              Learn More About ATS & Onboarding
              <FaChevronRight className="ml-2" />
            </h4>
          </Link>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <img
            src="https://i.ibb.co/jy0Nknc/ats.pnghttps://i.ibb.co/9qnqhHs/hiring.png"
            className="w-full max-w-sm md:w-auto rounded-lg mx-auto"
            alt="ATS Image"
          />
        </div>
      </div>
      <div className="bg-white py-10 md:py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-500 mb-4">
            Discover Key ATS Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ATS Feature 1 */}
            <div className="bg-white rounded-lg border-b-[5px] border-b-[#00756a] p-6 shadow-md hover:shadow-lg cursor-pointer">
              <h4 className="text-xl font-semibold mb-2">
                Advanced Candidate Search
              </h4>
              <p className="text-gray-600 mb-4">
                Easily find and filter candidates based on various criteria.
              </p>
            </div>

            {/* ATS Feature 2 */}
            <div className="bg-white rounded-lg  border-b-[5px] border-b-[#00756a] p-6 shadow-md hover:shadow-lg cursor-pointer">
              <h4 className="text-xl font-semibold mb-2">
                Customizable Workflows
              </h4>
              <p className="text-gray-600 mb-4">
                Tailor your hiring process to match your organization's needs.
              </p>
            </div>

            {/* ATS Feature 3 */}
            <div className="bg-white rounded-lg  border-b-[5px] border-b-[#00756a] p-6 shadow-md hover:shadow-lg cursor-pointer">
              <h4 className="text-xl font-semibold mb-2">
                Collaborative Hiring
              </h4>
              <p className="text-gray-600 mb-4">
                Streamline communication and feedback among your team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
