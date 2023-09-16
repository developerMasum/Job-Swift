import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ScanNewCandidate = () => {
  return (
    <div className="my-2">
      <div className="  border rounded-lg p-6">
        <h4 className="font-semibold mb-2 text-swift">
          Scan millions of profiles with People Search
        </h4>
        <p className="text-gray-600 mb-4 text-sm">
          Search 400-million profiles by name, keyword and location, and
          discover the perfect candidates for your job.
        </p>
        <Link to='/dashboard/peopleSearch' className="w-full  border-cyan-800 border text-swift py-2 rounded flex items-center justify-center">
          Start your search <RiShareBoxFill className="ml-2" color="green" />
        </Link>
      </div>
      <div className=" border rounded-lg p-6 mt-5">
        <h4 className=" font-semibold mb-2 text-swift"> New candidates page</h4>
        <p className="text-gray-600 mb-4 text-sm ">
          You're now using the improved candidates page. <br /> To learn more,
          take a quick tour or read the <br /> support article
        </p>
        <Link to='/dashboard/jobs' className="w-full  border-cyan-800 border text-swift py-2 rounded flex items-center justify-center">
          {" "}
          Take a quick tour <RiShareBoxFill
            className="ml-2"
            color="green"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ScanNewCandidate;
