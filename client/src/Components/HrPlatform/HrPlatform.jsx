import React from "react";
import image from "../../../public/imageHR.webp";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HrPlatform = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto justify-between items-center">
      <div className=" w-full md:w-1/2">
        <img src={image} alt="HrIamge" width={1000} />
      </div>
      <div className="w-full space-y-6 mt-6 md:mt-0 md:w-1/2">
        <h2 className="text-[#00673b] font-bold text-xl text-center md:text-start">
          The Complete HR Platform
        </h2>
        <p className="px-10 md:p-2 text-[18px]">
          Job Swift simplifies and supports every step in <br /> the employee
          experience through its intuitive <br />
          features and flexible integrations, all <br />
          connected to a single, secure source of data.
        </p>
        <div>
          <Link
            to="/free-demo"
            className="text-[#00673b] font-bold text-lg  text-center md:text-start"
            title="Get My Free Demo"
          >
            <h3>
              Get My Free Demo{" "}
              <FaChevronRight className="inline-block"></FaChevronRight>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HrPlatform;
