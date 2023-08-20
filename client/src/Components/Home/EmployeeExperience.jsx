import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const EmployeeExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0 md:ml-96 items-center justify-items-end">
      <div className="">
        <h2 className="text-primary md:text-2xl font-bold text-xl text-center md:text-start mb-2">
          Employee Experience & Performance
        </h2>
        <p className="font-semibold text-secondary leading-8">
          A strong company culture depends on listening to employees and
          investing in their development. Job Swift offers tools to help you
          gather feedback, strengthen employee satisfaction, and grow your
          people.
        </p>
        <Link to="/employee-experience" className="">
          <h3 className="text-primary font-bold text-base text-start md:text-start mt-2 md:mt-8 ">
            Learn Employee Experience & Performance
            <span className="ml-1">
              <FaChevronRight className="inline-block text-primary" />
            </span>
          </h3>
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="https://www.bamboohr.com/media_186ea72b5a1db5581f4c537b963e452b673473ff0.png?width=2000&format=webply&optimize=medium"
          className="w-96 h-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default EmployeeExperience;
