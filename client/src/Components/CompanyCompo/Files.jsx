import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";

const Files = () => {
  return (
    <div className="my-8 sm:my-48">
      {" "}
      {/* Adjust margin for small devices */}
      <div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h3 className="text-xl sm:text-4xl font-semibold mb-2 sm:mb-0">
            Files
          </h3>{" "}
          {/* Adjust font size */}
          <button className="btn btn-success">
            <FaPlaneDeparture size={16} />
            <span>BETA</span>
          </button>
        </div>
        <p className="font-semibold text-gray-400">Manage company files</p>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          <img className="mx-auto w-32 sm:w-48" src={files} alt="Files" />{" "}
          {/* Adjust image width */}
          <h6 className="text-lg sm:text-2xl my-2">
            You've not uploaded any files yet
          </h6>
          <p className="mb-2">You can upload files in any folder</p>
        </div>
      </div>
    </div>
  );
};

export default Files;
