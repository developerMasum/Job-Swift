import React, { useContext } from "react";
import { BsDownload } from "react-icons/bs";
import { authContext } from "../../Auth/AuthProvider";

const DownloadDashboard = () => {
  const { user } = useContext(authContext);

  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:mb-10 lg:ml-16">
      <div className="mb-4 lg:mb-0">
        <p className="text-sm font-bold space-x-2">
          {" "}
          Hey,{" "}
          <span className="text-cyan-700">{user?.displayName || user?.email}</span>
        </p>
        <p className="text-sm font-semibold space-x-2">
          Welcome to your dashboard
        </p>
      </div>
      <div className="text-center lg:text-right">
        <button className="uppercase flex items-center justify-center gap-3 text-sm font-semibold border-2 border-cyan-500 text-gray-600 hover:bg-cyan-300 hover:text-white px-4 py-2 rounded-lg transition duration-300">
          {" "}
          <BsDownload /> Download report{" "}
        </button>
      </div>
    </div>
  );
};

export default DownloadDashboard;

