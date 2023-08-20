import React from "react";
import EmployeeExplore from "../../components/EmployeePerformance/EmployeeExplore";
import EmployeeResource from "../../components/EmployeePerformance/EmployeeResource";

const EmployeePerformance = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-center items-center">
          <div className="my-10 space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#b28442]">
              Employee Experience & Performance
            </h1>
            <h3 className="text-[20px] text-[#ecd46c] text-center">
              Authentic feedback fuels growth.
            </h3>
          </div>
        </div>
        <div className="md:flex justify-between items-center gap-10 px-4">
          <div className="w-full md:w-[350px] space-y-6">
            <h2 className="text-xl font-bold">
              Understand what matters most to your people.
            </h2>
            <p className="text-[18px] text-fray-600 leading-6 text-justify">
              Feedback and sentiment tools in Job Swift help you develop an
              environment of honest, two-way communication and timely action,
              setting the stage for growth and a great employee experience.
            </p>
            <div className="flex space-x-2">
              <button
                className="bg-[#e6ad5e] px-6 py-2 text-lg font-bold text-white rounded-full hover:bg-[#b28442] transition"
                title=" Get My Free Demo"
              >
                Get My Free Demo
              </button>
              <button
                className=" border-[2px] border-[#b28442] px-4 py-1 rounded-full text-[#b28442] font-bold hover:bg-[#f0d1a7] transition"
                title="Try It Free"
              >
                Try It Free
              </button>
            </div>
          </div>

          <div className="w-full md:w-[700px]  my-6 md:my-0 ">
            <img
              src="https://www.bamboohr.com/hr-software/media_18e55b7d3342f3bb30f19046d19490d70bc280426.png?width=750&format=webply&optimize=medium"
              alt=""
            />
          </div>
        </div>
      </div>
      <EmployeeExplore></EmployeeExplore>
      <EmployeeResource></EmployeeResource>
    </div>
  );
};

export default EmployeePerformance;
