import React from "react";

const CandidateCard = ({
  name,
  education,
  location,
  jobTitle,
  jobStatus,
  jobDetails,
  img,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div className="md:flex justify-around items-center p-6 bg-white shadow-md rounded-lg my-4 candidate-card hover:bg-yellow-100 transition duration-300">
      <div className="flex items-center">
        <div className="flex items-center space-x-4 mr-3">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={isChecked}
            onChange={onCheckboxChange}
          />
          <img
            src={img}
            alt="Profile img"
            className="w-16 h-16 rounded-full shadow-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mb-1 text-gray-600">{education}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="border-b md:border-l border-gray-300 mx-4 md:h-32"></div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{jobTitle}</h3>
        <p className="mb-1">{location}</p>
        <p className="mb-1">{jobStatus}</p>
        <p className="text-gray-400">{jobDetails}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
