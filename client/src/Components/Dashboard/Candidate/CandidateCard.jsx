import React from "react";

const CandidateCard = ({
  name,
  education,
  location,
  jobTitle,
  jobStatus,
  jobDetails,
  img,
}) => {
  return (
    <div className="flex justify-around p-6 bg-white shadow-md rounded-lg my-4 candidate-card hover:bg-yellow-200">
      <div className="flex items-center">
        <div className="flex items-center space-x-4 mr-3">
          <input type="checkbox" className="form-checkbox" />
          <img src={img} alt="Profile img" className="w-12 h-12 rounded-full" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="mb-2">{education}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="border-l border-gray-300 h-32 mx-4"></div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{jobTitle}</h3>
        <p className="mb-1">{location}</p>
        <p
          className={`mb-1 ${
            jobStatus === "At Assessment stage" ? "text-yellow-600" : ""
          }`}
        >
          {jobStatus}
        </p>
        <p className="text-gray-400">{jobDetails}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
