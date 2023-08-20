import React from "react";
import payroll1 from "../../assets/Image/paryroll1.png";
import "./Payroll.css";
import Title from "../../Components/Title/Title";
import Payroll from "../../assets/Image/payroll.svg";
import Administration from "../../assets/Image/Administration.svg";
import Time from "../../assets/Image/Time.svg";
import strimeLine from "../../assets/Image/StrimeLine.svg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import payroll2 from "../../assets/Image/paryroll2.jpg";
import payroll3 from "../../assets/Image/paryroll3.png";
import payroll4 from "../../assets/Image/paryroll4.png";

const PayrollTimeBenefits = () => {
  return (
    <div className="px-12">
      <div className="text-center pt-16">
        <Title
          mainTitle="payroll-time-benefits"
          subTitle="Bring your payroll and employee enrollment together in Job Swift ."
        />
      </div>
      <div className="md:flex md:flex-row-reverse  mx-auto justify-between items-center mt-8 gap-5 md:mt-16  md:0">
        <div className="w-full md:w-1/2">
          <img src={payroll1} alt="" />
        </div>
        <div className="w-full  mt-6  md:pl-10 md:mt-0 md:w-1/2">
          <h2 className="text-secondary md:text-2xl font-bold text-xl text-center md:text-start mb-5">
            No double entry. No headaches.
          </h2>
          <p className="text-secondary text-justify text-lg leading-8">
            Job Swift allows you to track hours worked, record time-off, manage
            benefits, and run payroll all from a single platform. No more data
            double-entry and manual approval processes—just easy, accurate
            paydays for you and your employees.
          </p>
          <div className="flex pt-10 gap-10">
            <button className="bg-[#4C3293] border-4 border-[#4C3293] text-white font-bold px-6 py-2 rounded-full hover:bg-[#3c1d94] transition ease-out duration-300">
              Get My Free Demo
            </button>
            <button className="border-4 border-[#4C3293] px-7 py-3 rounded-full hover:bg-[#b4abca] transition ease-out duration-300 ">
              Try It Free
            </button>
          </div>
        </div>
      </div>
      {/* 2nd part */}
      <div>
        <div className="text-center pt-16">
          <Title mainTitle="Explore Payroll, Time, & Benefits with Job Swift " />
        </div>
      </div>
      <div className="px-10 text-secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-8">
        <div className="space-y-4 ">
          <img src={Payroll} alt="" />
          <h4 className="text-xl font-bold hover:text-[#3c1d94]">Payroll</h4>
          <p className="hover:text-secondary font-semibold text-lg">
            Run payroll faster and more easily than ever before (and with a lot
            less stress).
          </p>
          <p className="flex gap-4 text-lg items-center hover:text-[#3c1d94] font-bold">
            <Link>Explore Payroll</Link>
            <FaChevronRight />
          </p>
        </div>
        <div className="space-y-4 ">
          <img src={Administration} alt="" />
          <h4 className="text-xl font-bold hover:text-[#3c1d94]">
            Benefits Administration
          </h4>
          <p className="hover:text-secondary font-semibold text-lg">
            Make it simple for employees to enroll in benefits and review their
            elections in one place.
          </p>
          <p className="flex gap-4 text-lg items-center hover:text-[#3c1d94] font-bold">
            <Link>Explore Administration</Link>
            <FaChevronRight />
          </p>
        </div>
        <div className="space-y-4 ">
          <img src={Time} alt="" />
          <h4 className="text-xl font-bold hover:text-[#3c1d94]">
            Time Tracking
          </h4>
          <p className="hover:text-secondary font-semibold text-lg">
            Track time and run payroll without wasting time jumping between
            systems.
          </p>
          <p className="flex gap-4 text-lg items-center hover:text-[#3c1d94] font-bold">
            <Link>Explore Time Tracking</Link>
            <FaChevronRight />
          </p>
        </div>
        <div className="space-y-4 ">
          <img src={strimeLine} alt="" />
          <h4 className="text-xl font-bold hover:text-[#3c1d94]">Time Off</h4>
          <p className="hover:text-secondary font-semibold text-lg">
            Streamline time-off requests and approvals via desktop and mobile.
          </p>
          <p className="flex gap-4 text-lg items-center hover:text-[#3c1d94] font-bold">
            <Link>Explore Time Off</Link>
            <FaChevronRight />
          </p>
        </div>
      </div>

      {/* 3nd part */}
      <div className="pt-24  text-center">
        <Title
          mainTitle={"Streamline Your Compensation Processes"}
          subTitle={
            "Bring all the pieces together in a single HRIS for flawlessly accurate paydays."
          }
        />
        <button className="bg-[#4C3293] border-4 border-[#4C3293] text-white font-bold px-6 py-2 rounded-full hover:bg-[#3c1d94] mt-12 transition ease-out duration-300">
          Get My Free Demo
        </button>
      </div>
      <div className="md:flex items-center  gap-10">
        <div className="md:w-1/2">
          <img src={payroll2} alt="" />
        </div>
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-2xl font-semibold text-[#4C3293]">
            “Every Tuesday I was tracking down information, having to beg
            managers to approve time, manually entering [data], adding up
            numbers...it was a complete and utter headache. Job Swift easily
            saves three to four hours per week.”
          </h2>
          <h2 className="text-xl font-bold text-secondary">
            AMY BOSTON, EMPLOYEE SUCCESS MANAGER | LIONHEART CRITICAL POWER
            SPECIALISTS
          </h2>
          <button className="bg-[#4C3293] border-4 border-[#4C3293] text-white font-bold px-6 transition ease-out duration-300 py-2 rounded-full hover:bg-[#3c1d94]">
            Read Amy’s Story
          </button>
        </div>
      </div>

      {/* 4th Part */}
      <div className="px-10">
        <div>
          <Title
            mainTitle={
              "Want learn more about effective Payroll, Benefits and Time Tracking?"
            }
            subTitle={"Check out these additional resources"}
          />
        </div>
        <div className="md:flex gap-36 pt-16">
          <div className="space-y-5">
            <img src={payroll3} alt="" />
            <h2 className="font-semibold text-2xl">
              Simplified Payroll and Time Tracking with Job Swift
            </h2>
            <p className="font-normal text-xl">
              Tired of researching and comparing? In this short webinar packed
              with information and first-hand customer stories, we’ll show you
              how Job Swift makes the dream of all-in-one payroll, time
              tracking, and benefits data a reality
            </p>
            <p className="flex gap-3 text-[17px] items-center font-semibold text-[#4C3293]">
              <Link>Watch the Webinar</Link> <FaChevronRight />{" "}
            </p>
          </div>
          <div className="space-y-5">
            <img src={payroll4} alt="" />
            <h2 className="font-semibold text-2xl">
              Simplified Payroll and Time Tracking with Job Swift
            </h2>
            <p className="font-normal text-xl">
              Tired of researching and comparing? In this short webinar packed
              with information and first-hand customer stories, we’ll show you
              how Job Swift makes the dream of all-in-one payroll, time
              tracking, and benefits data a reality
            </p>
            <p className="flex gap-3 text-[17px] items-center font-semibold text-[#4C3293]">
              <Link>Watch the Webinar</Link> <FaChevronRight />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollTimeBenefits;
