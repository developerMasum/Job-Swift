import React from "react";

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
    </div>
  );
};

export default Candidate;
