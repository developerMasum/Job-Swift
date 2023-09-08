import React from "react";
import { FaPaperPlane, FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";

const FilesTab = () => {
  return (
    <div className="pt-8">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="md:text-3xl text-xl ">Files</h3>
          <button className="flex bg-[#c7f0f1] px-2 py-1 rounded-full gap-2 items-center">
            <FaPaperPlane color="107191" size={12} />
            <span className="text-swift text-xs font-bold">BETA</span>
          </button>
        </div>
        <p className="text-start text-swift">Manage company files</p>
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

export default FilesTab;
