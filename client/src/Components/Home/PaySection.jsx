import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaySection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0   md:ml-96   items-center justify-items-end">
      <div className=" ">
        <h2 className="text-primary md:text-2xl font-bold text-xl text-center md:text-start mb-2">
          Payroll, Time & Benefits
        </h2>
        <p className="font-semibold text-secondary leading-8">
          Job Swift allows you to track hours worked, manage benefits
          enrollment, and run payroll all from a single platform. No more data
          double entry and manual approval processes—just easy, accurate payroll
          for you and your employees.
        </p>

        <Link to="/single-pay" className="">
          <h3 className="text-primary font-bold text-base text-start md:text-start mt-2 md:mt-8 ">
            Learn More About Payroll, Time & Benefits
            <span className="ml-2">
              <FaChevronRight className="inline-block text-primary" />
            </span>
          </h3>
        </Link>
      </div>
      <div className="mt-6 md:mt-0   ">
        <img
          src="https://www.bamboohr.com/media_1a3f05063d0c65ac5f1e19b54dca44ef785738332.png?width=2000&format=webply&optimize=medium"
          className="w-96 h-auto rounded-2xl "
          alt=""
        />
      </div>
    </div>
  );
};

export default PaySection;
