import React, { useState, useEffect } from "react";


import {
  AiOutlineFilePdf,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import LoaderInternal from "../../LoaderInternal/LoaderInternal";
import NoContent from "./NoContent";


const Table = ({ appliedCandi: candidates, isLoading }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    // Initialize selectedCandidate with the first candidate
    if (candidates.length > 0) {
      setSelectedCandidate(candidates[0]);
    }
  }, [candidates]);

  const handleCheckbox = (e, candidateId) => {
    if (e.target.checked) {
      // Find the selected candidate by ID
      const selected = candidates.find(
        (candidate) => candidate._id === candidateId
      );
      setSelectedCandidate(selected);
    } else {
      setSelectedCandidate(null);
    }
  };

  if (isLoading) {
    return <LoaderInternal></LoaderInternal>;
  }

  return (
    <div className="w-full overflow-x-auto">
      {candidates?.length === 0 ? (
        <NoContent></NoContent>
      ) : (
        <div className="p-10 md:flex gap-4  ">
          <div className="md:w-2/5">
            <table className="w-full shadow-lg rounded-lg overflow-hidden">
              {/* Head */}
              <thead className="bg-gray-200 text-gray-500">
                <tr>
                  <th className="px-6 py-3 text-left">Select</th>
                  <th className="px-6 py-3">Candidate Information</th>
                  <th className="px-6 py-3">Job Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Rows */}
                {candidates?.map((candidate) => (
                  <tr
                    key={candidate._id}
                    className="hover:bg-gray-100 transition-colors divide-y-[1px] divide-gray-400 duration-300"
                  >
                    <td className="px-6 py-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-500 rounded-full focus:ring-2 focus:ring-blue-200"
                          value={candidate._id}
                          checked={selectedCandidate?._id === candidate._id}
                          onChange={(e) => handleCheckbox(e, candidate._id)}
                        />
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 flex-shrink-0">
                          <img
                            src={`http://localhost:5000/images/${candidate.image}`}
                            alt=""
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {candidate.firstName} {candidate.lastName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {candidate.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {candidate.jobTitle}
                        </p>
                        <p className="text-sm text-gray-500">
                          {candidate.location}
                        </p>
                        {candidate?.stage ? (
                          <>
                            <p className="text-sm text-gray-500">
                              at{" "}
                              <span className="font-bold">
                                {candidate.stage}
                              </span>{" "}
                              Stage
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-500">
                            at <span className="font-bold">Applied</span> Stage
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          {(() => {
                            const timestamp = candidate.date;
                            const dateTime = new Date(timestamp);

                            const options = {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            };
                            return dateTime.toLocaleDateString(
                              undefined,
                              options
                            );
                          })()}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:w-3/5">
            {selectedCandidate ? (
              <div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img
                            src={`http://localhost:5000/images/${selectedCandidate.image}`}
                            alt={`${selectedCandidate.firstName} ${selectedCandidate.lastName}'s avatar`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold text-gray-800">
                            {selectedCandidate.firstName}{" "}
                            {selectedCandidate.lastName}
                          </h2>
                          <p className="text-gray-600 text-lg">
                            {selectedCandidate.jobTitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">
                        {selectedCandidate.location}
                      </div>
                    </div>
                    <div className="mt-6 text-gray-600 text-lg">
                      {selectedCandidate.summary}
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Experience
                    </h3>
                    <ul className="mt-4">
                      {selectedCandidate.experienceList.map(
                        (experience, index) => (
                          <li
                            key={index}
                            className="mb-4 pb-4 border-b border-gray-200"
                          >
                            <h4 className="text-xl font-semibold">
                              {experience.title}
                            </h4>
                            <p className="text-gray-600">
                              {experience.company} ({experience.industry})
                            </p>
                            <p className="text-gray-600">
                              {experience.jobType}
                            </p>
                            <p className="text-gray-600">
                              {experience.startDate} - {experience.endDate}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Education
                    </h3>
                    <ul className="mt-4">
                      {selectedCandidate.educationList.map(
                        (education, index) => (
                          <li
                            key={index}
                            className="mb-4 pb-4 border-b border-gray-200"
                          >
                            <h4 className="text-xl font-semibold">
                              {education.degree}
                            </h4>
                            <p className="text-gray-600">
                              {education.school}, {education.fieldOfStudy}
                            </p>
                            <p className="text-gray-600">
                              {education.startDate} - {education.endDate}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <a
                        href={`http://localhost:5000/images/${selectedCandidate.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                      >
                        <AiOutlineFilePdf className="w-6 h-6" />
                        <span>View Resume</span>
                      </a>
                      <a
                        href={`mailto:${selectedCandidate.email}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                      >
                        <AiOutlineMail className="w-6 h-6" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${selectedCandidate.phoneNumber}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                      >
                        <AiOutlinePhone className="w-6 h-6" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No candidate selected</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;





