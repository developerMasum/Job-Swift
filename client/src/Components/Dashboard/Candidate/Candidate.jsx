import React from "react";
import CandidateTable from "./CandidateTable";

const Candidate = () => {
  return (
    <div className="pt-20">
      <div className="p-6 bg-white shadow-md rounded-lg flex justify-between">
        <h5 className="text-lg font-semibold mb-2">Candidates</h5>
        <div>
          <label className="font-semibold text-gray-600">Creation Date:</label>
          <select className="mt-1 border rounded-lg">
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
          </select>
        </div>
      </div>
      <div className="p-6 flex justify-around items-center">
        <span className="flex gap-2">
          <input type="checkbox" />
          <p className="font-semibold">Candidate Information</p>
        </span>
        <p className="font-semibold">Job status</p>
      </div>
      <hr className="border-t-2 my-4" />
      <CandidateTable />
    </div>
  );
};

export default Candidate;
