import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ScanNewCandidate = () => {
  return (
    <div className="my-2">
      <div className="bg-white shadow-md rounded p-6">
        <h4 className="font-semibold mb-2 text-swift">
          View all Jobs
        </h4>
        <p className="text-gray-600 mb-4 text-sm">
          Search 400-million jobs.
        </p>
        <Link to={'../jobs'}><button className="w-full  border-cyan-800 border text-swift py-2 rounded flex items-center justify-center">
          Start your Jobs <RiShareBoxFill className="ml-2" color="green" />
        </button></Link>
      </div>
      <div className="bg-white shadow-md rounded p-6 mt-5">
        <h4 className=" font-semibold mb-2 text-swift"> Our Report Center</h4>
        <p className="text-gray-600 mb-4 text-sm ">
        Whether it's  please provide more context so I can best assist you! designing, troubleshooting, developing,<br /> or understanding, support article
        </p>
        <Link to={'../report-center'}><button className="w-full  border-cyan-800 border text-swift py-2 rounded flex items-center justify-center">
          {" "}
          Take a quick tour <RiShareBoxFill
            className="ml-2"
            color="green"
          />{" "}
        </button></Link>
      </div>
    </div>
  );
};

export default ScanNewCandidate;
