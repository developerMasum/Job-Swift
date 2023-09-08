import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MarketPlaceIntegrate = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto justify-between items-center mt-8 md:mt-16 px-12 md:0">
      <div className="w-full md:w-1/2">
        <img
          src="https://www.bamboohr.com/media_13163d8538f44e479364c47dd3057531b1af2e429.png?width=2000&format=webply&optimize=medium"
          alt=""
        />
      </div>
      <div className="w-full  mt-6  md:pl-10 md:mt-0 md:w-1/2">
        <h2 className="text-swift md:text-2xl font-bold text-xl text-center md:text-start mb-2">
          Integration Marketplace
        </h2>
        <p className="text-second font-semibold leading-8">
          Simplify even more business workflows by connecting vetted, pre-built
          software integrations to Job Swift . Your employee data stays accurate
          and secure, and you have hundreds of solutions at your fingertips to
          help your people and your business thrive.
        </p>
        <div>
          <Link
            to="/details-marketplace"
            className="text-[#00673b] font-bold text-lg text-start md:text-start"
            title="Learn More About Integration Marketplace"
          >
            <h3 className="text-gray-700 font-bold text-base text-start md:mt-8 mt-2 md:text-start">
              Learn More About Integration Marketplace{" "}
              <span className="ml-2">
                {" "}
                <FaChevronRight className="inline-block " />
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceIntegrate;
