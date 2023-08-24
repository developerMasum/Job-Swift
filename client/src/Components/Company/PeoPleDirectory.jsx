import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import images from "../../assets/Image/peopleDirectory.png";
import chiringe from "../../assets/Image/chiringe.png";

const PeoPleDirectory = () => {
  return (
    <div className="my-8 sm:mt-48">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-4xl font-semibold mr-4">
            People directory
          </h3>
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
        <button className="btn">
          <span>Add Employee</span>
          <AiOutlineDown />
        </button>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          <img className="mx-auto w-48" src={images} alt="PeopleDirectory" />
          <h6 className="text-lg sm:text-2xl my-4">
            Create a company directory to manage employees
          </h6>
          <p className="mb-4">
            Click 'Add Employee' to start your company directory.
          </p>
          <div className="bg-gray-200 w-full py-4 mb-4 sm:w-[700px]">
            <div className="flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-center">
              <img src={chiringe} alt="chiringe" className="w-32 sm:w-auto" />
              <div className="text-center sm:text-left sm:ml-4">
                <h6 className="text-lg sm:text-2xl my-4">
                  Upload a CSV list of your employees
                </h6>
                <p className="mb-2">
                  Add multiple employees to your directory.
                </p>
                <button className="btn btn-outline">Upload a CSV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoPleDirectory;
