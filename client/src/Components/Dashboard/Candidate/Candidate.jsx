import React, { useState } from "react";
import CandidateTable from "./CandidateTable";

const Candidate = ({ candidates }) => {
  const [mainCheckboxChecked, setMainCheckboxChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState([]);

  const handleMainCheckboxChange = () => {
    setMainCheckboxChecked(!mainCheckboxChecked);

    // Toggle all individual checkboxes based on the main checkbox state
    if (!mainCheckboxChecked) {
      setIndividualCheckboxes(Array(candidates.length).fill(true));
    } else {
      setIndividualCheckboxes(Array(candidates.length).fill(false));
    }
  };

  const handleIndividualCheckboxChange = (index) => {
    const updatedCheckboxes = [...individualCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setIndividualCheckboxes(updatedCheckboxes);

    // Check if all individual checkboxes are checked and update main checkbox state
    setMainCheckboxChecked(updatedCheckboxes.every((isChecked) => isChecked));
  };

  return (
    <div className="pt-20">
      <div>
        <div className="p-6 bg-white shadow-md rounded-lg flex justify-between">
          <h5 className="text-lg font-semibold mb-2">Candidates</h5>
          <div>
            <label className="font-semibold text-gray-600">
              Creation Date:
            </label>
            <select className="mt-1 border rounded-lg">
              <option value="new">Newest first</option>
              <option value="old">Oldest first</option>
            </select>
          </div>
        </div>
        <div className="p-6 flex justify-around items-center">
          <span className="flex gap-2">
            <input
              type="checkbox"
              checked={mainCheckboxChecked}
              onChange={handleMainCheckboxChange}
            />
            <p className="font-semibold">Candidate Information</p>
          </span>
          <p className="font-semibold">Job status</p>
        </div>
        <hr className="border-t-2 my-4" />
        <CandidateTable
          candidates={candidates}
          individualCheckboxes={individualCheckboxes}
          onIndividualCheckboxChange={handleIndividualCheckboxChange}
        />
      </div>
    </div>
  );
};

export default Candidate;
