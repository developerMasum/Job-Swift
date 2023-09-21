import React from "react";

import { RiUserSearchLine } from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

const ExploreHiring = () => {
  return (
    <div className="text-swift px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="text-center">
        <h2 className="text-blue-900 italic text-center md:text-4xl lg:text-5xl font-bold my-2">
          Explore Hiring & Onboarding with JobSwift
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 my-4 md:my-8">
        {/* Applicant Tracking */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <RiUserSearchLine size={60} className="hover:text-blue-500" />
            <h2 className="card-title mt-2">Applicant Tracking</h2>
            <p className="my-2">
              Modern recruiting tools help you find and hire the right talent
              fast.
            </p>

            <h3 className=" font-bold text-base text-center md:text-left text-blue-500">
              Explore Applicant Tracking
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* New Hire Onboarding */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <BsPersonAdd size={60} className="hover:text-blue-500" />
            <h2 className="card-title mt-2">New Hire Onboarding</h2>
            <p className="my-2">
              Set your people up for success from the start.
            </p>

            <h3 className=" font-bold text-base text-center md:text-left text-blue-500">
              Explore Onboarding
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* OffBoarding */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <AiOutlineClear size={60} />
            <h2 className="card-title mt-2">OffBoarding</h2>
            <p className="my-2">Saying goodbye just got a little easier.</p>

            <h3 className=" font-bold text-base text-center md:text-left text-blue-500 mt-2">
              Explore OffBoarding
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center items-center my-6 mb-0">
        <div className="flex flex-col">
          <p className="text-lg md:text-xl lg:text-2xl text-blue-500 font-semibold my-4 md:my-0 md:px-8">
            "Without JobSwift, we wouldn't be in a position to handle spikes of
            recruiting or thinking too far ahead. Having a central record to
            ensure data integrity, as well as to automate and help us manage
            onboarding, has allowed us to provide a seamless experience in one
            of our biggest hiring years.”
          </p>
          <p className="mb-4 text-sm md:text-base leading-6 font-bold text-stone-500 ml-6 mt-5">
            JANE JAXON, VP, PEOPLE, WISTIA
          </p>
        </div>

        <img
          src="https://i.ibb.co/fttD6sw/recruiting.png"
          alt=""
          className="w-full h-auto md:w-1/2 md:ml-8"
        />
      </div>
    </div>
  );
};

export default ExploreHiring;
