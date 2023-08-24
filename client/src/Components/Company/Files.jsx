import React from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";



const Files = () => {
    return (
      <div className="my-48">
        <div>
          <div className="flex">
            <h3 className="text-4xl font-semibold mr-4">Files</h3>
            <button className="btn btn-success">
              <FaPlaneDeparture size={16} />
              <span>BETA</span>
            </button>
          </div>
          <p className="font-semibold text-gray-400">Manage company files</p>
        </div>
        {/* Body */}
        <div className="flex justify-center items-center mt-24">
          <div className="text-center">
            <img className="mx-auto" src={files} alt="OrgChart" />
            <h6 className="text-2xl my-4">You've not uploaded any files yet</h6>
            <p className="mb-4">You can upload files in any folder</p>
          </div>
        </div>
      </div>
    );
};

export default Files;