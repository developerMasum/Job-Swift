import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#00756a] text-white">
      <div className="container mx-auto md:flex justify-between p-20 md:items-center">
        <div className="md:w-1/2 md:text-left md:pr-12">
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-4">
            Welcome to JobSwift ATS
          </h1>
          <Typed
            className="text-xl sm:text-2xl md:text-4xl font-bold"
            strings={[
              "Advanced ATS Solutions",
              "Streamlined Recruitment Tools",
              "Efficient Hiring Solutions",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="text-lg text-gray-300 mt-6 mb-8">
            Discover the power of our Applicant Tracking System (ATS). Effortlessly
            manage job listings, track applicants, schedule interviews, and make
            data-driven hiring decisions with JobSwift ATS.
          </p>
          <div className="flex space-x-4 mt-16">
            <button className="border-[2px] border-white text-white font-semibold hover:bg-white hover:text-[#00756a] py-2 px-4 rounded-lg text-lg flex items-center justify-center transition-transform transform hover:scale-105">
              Get Free Demo <FaArrowRight className="ml-2" />
            </button>
            <button className="border-b-[2px] border-white text-white font-semibold hover:bg-white hover:text-[#00756a] py-2 px-4 rounded-lg text-lg flex items-center justify-center transition-transform transform hover:scale-105">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:text-right">
          <img
            className="w-full max-w-sm mx-auto md:w-auto"
            src="https://i.ibb.co/pxXPCBf/finalbanner03.png"
            alt="ATS App Screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
