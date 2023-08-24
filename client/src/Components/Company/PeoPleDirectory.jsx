import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import images from "../../assets/Image/peopleDirectory.png";
import chiringe from "../../assets/Image/chiringe.png";

const PeoPleDirectory = () => {
  return (
    <div className="mt-48">
      <div className="flex justify-between">
        <div className="flex">
          <h3 className="text-4xl font-semibold mr-4">People directory</h3>
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
        <div>
          <button className="btn">
            <span>Add Employee</span>
            <AiOutlineDown />
          </button>
        </div>
      </div>
      {/* Body */}
      <div className="flex justify-center items-center mt-24">
        <div className="text-center">
          <img className="mx-auto" src={images} alt="PeopleDirectory" />
          <h6 className="text-2xl my-4">
            Create a company directory to manage employees
          </h6>
          <p className="mb-4">Click 'Add Employee' to start your company directory.</p>
          <div className="bg-gray-200 w-[700px] py-4 mb-4">
            <div className="flex justify-evenly items-center">
              <img src={chiringe} alt="chiringe" />
              <div>
                <h6 className="text-2xl my-4">
                  Upload a CSV list of your employees
                </h6>
                <p>Add multiple employees to your directory.</p>
                          </div>
                          <button className="btn btn-outline">Upload a CSV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoPleDirectory;
