import React, { useState, useEffect } from "react";

import {
  AiOutlineFilePdf,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import LoaderInternal from "../../../../LoaderInternal/LoaderInternal";
import NoContent from "../../NoContent";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

const Table = ({ interviewCandi: candidates, isLoading }) => {
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

  // handle next move to next stage - if you wanna send to Assesment, just replace to stage: 'stage name'
  const handleMoveToApplied = (id) => {
    try {
      const response = fetch(` http://localhost:5000/applicant/stage/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stage: "Offer" }),
      });

      if (response) {
        toast.success("This Candidate moved to Applied");
        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      } else {
        console.error("Failed to update stage.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      {candidates?.length === 0 ? (
        <NoContent></NoContent>
      ) : (
        <div className="md:p-10 md:flex gap-4  ">
          <div className="md:w-2/5 w-full border ">
            <table className="w-full shadow-lg rounded-lg overflow-hidden">
              {/* Head */}
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Select</th>
                  <th className="px-6 py-3">Candidate Information</th>
                  <th className="px-6 py-3">Job Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Rows */}
                {candidates.map((candidate) => (
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
                            src={candidate.image}
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
          <div className="md:w-3/5 w-full">
            {selectedCandidate ? (
              <div>
                {/* mail section */}
                <div className="bg-white shadow-lg border mt-5 md:mt-0 rounded-lg overflow-hidden">
                  <div>
                    <div className="px-6 py-[5px] border-t bg-teal-900 text-white border-gray-200">
                      <div className="flex items-center justify-around space-x-4">
                        <a
                          href={`  http://localhost:5000/${selectedCandidate.resume}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white  space-x-2 hover:text-blue-500"
                        >
                          <AiOutlineFilePdf className="w-6 h-6" />
                          <span>Download Resume</span>
                        </a>
                        <a
                          href={`mailto:${selectedCandidate.email}`}
                          className="flex items-center space-x-2 hover:text-blue-500 text-white "
                        >
                          <AiOutlineMail className="w-6 h-6" />
                          <span>Email</span>
                        </a>
                        <a
                          href={`tel:${selectedCandidate.phoneNumber}`}
                          className="flex items-center space-x-2 hover:text-blue-500 text-white "
                        >
                          <AiOutlinePhone className="w-6 h-6" />
                          <span>Call</span>
                        </a>
                        <button
                          onClick={() =>
                            handleMoveToApplied(selectedCandidate?._id)
                          }
                          className="border border-indigo-100 px-4 rounded-md py-1"
                        >
                          move to Offer
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-8">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img
                            src={selectedCandidate.image}
                            alt={`${selectedCandidate.firstName} ${selectedCandidate.lastName}'s avatar`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold text-gray-800">
                            {selectedCandidate.firstName}{" "}
                            {selectedCandidate.lastName}
                          </h2>
                          <p className="text-gray-600 text-lg text-start">
                            {selectedCandidate.jobTitle}
                          </p>
                          <p className="text-gray-600 text-sm text-start">
                            {selectedCandidate.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-gray-600 text-lg  text-start ">
                      <span className="mb-5  text-teal-700 font-bold text-sm">
                        Summery:
                      </span>
                      <p className="border-zinc-300 border border-opacity-40">
                        {selectedCandidate.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200 text-start">
                    <h3 className="mb-5  text-teal-700 font-bold text-sm">
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
                              {formatDate(experience.startDate)} -{" "}
                              {formatDate(experience.endDate)}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200 text-start ">
                    <h3 className="mb-5  text-teal-700 font-bold text-sm">
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
                              {formatDate(education.startDate)} -{" "}
                              {formatDate(education.endDate)}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="px-6 py-4 border-t border-gray-200 text-start ">
                    <p className="mb-5  text-teal-700 font-bold text-sm">
                      Resume:
                    </p>

                    <div className="border max-w-4xl border-slate-200 p-5 text-center">
                      <iframe
                        src={selectedCandidate.resume}
                        width={100}
                        title="Uploaded Resume"
                        className="mt-2 border border-gray-400 rounded"
                        style={{ width: "100%", height: "400px" }}
                      />
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
