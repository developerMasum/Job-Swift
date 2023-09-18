import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="my-6 md:my-16">
      <div className="text-center">
        <h2 className="text-blue-900 italic md:text-4xl lg:text-5xl font-bold my-2">
          Want to learn more about effective Hiring, Onboarding, and
          Offboarding?
        </h2>
        <p className="text-swift font-semibold my-2 mt-5">
          Check out these additional resources
        </p>
      </div>

      <div className="my-4 md:my-8 grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        {/* Onboarding Task */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src="https://i.ibb.co/tYzc1bJ/onboarding-Task.png" alt="OnboardingImage" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2 mb-5">
              20+ Onboarding Tasks That Help New Hires Feel Welcome [Free
              Onboarding Checklist]
            </h2>
            <p className="font-semibold mt-2">
              This expert-approved new hire checklist will save time and give
              you plenty of room to personalize.
            </p>

            <h3 className=" mt-5  font-bold text-base text-center md:text-left text-blue-500">
              Free Download
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* ATS Case Study */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src="https://i.ibb.co/HXtYnFz/ats.png" alt="ats" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2 ">
              Applicant Tracking System (ATS) Case Study
            </h2>
            <p className="font-semibold text-swift mt-2">
              See how the Job Swift ATS helped The Centre for Family Medicine
              rapidly staff emergency COVID-19 vaccination clinics to meet the
              needs of their community.
            </p>

            <h3 className=" mt-5 font-bold text-base text-center md:text-left text-blue-500">
              View Case Study
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* Definitive Guide */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src="https://i.ibb.co/3kDQVKQ/employee.png" alt="employee" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2">
              The Definitive Guide to Onboarding
            </h2>
            <p className="font-semibold mt-2 text-swift">
              Everything you need to know to onboard like a pro.
            </p>

            <h3 className=" mt-5 font-bold text-base text-center md:text-left text-blue-500">
              Free Download
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 px-4 py-4">
        <h2 className=" md:text-4xl lg:text-5xl font-bold my-2 italic text-blue-900  ">
          Want to experience what Job Swift can do for you?
        </h2>
        <p className="text-swift font-semibold my-2 ">
          There's no substitute for hands-on experience. Try it yourself.
        </p>
        <Link to="/login">
          <h3 className=" mt-5 font-bold text-base text-center md:text-center text-blue-500">
            Try It Free
            <span className="ml-2">
              <FaChevronRight className="inline-block" />
            </span>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
