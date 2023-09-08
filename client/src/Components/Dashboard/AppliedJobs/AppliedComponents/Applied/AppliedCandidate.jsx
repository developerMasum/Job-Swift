import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  HiChat,
  HiHand,
  HiMail,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
const AppliedCandidate = ({ candidates, stageName }) => {
  // console.log(candidates);
  const [isChecked, setIsChecked] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");

  const [candidatesList, setCandidatesList] = useState(
    candidates.map((candidate) => {
      return { ...candidate, isChecked: false };
    })
  );
  useEffect(() => {
    setCandidatesList(
      candidates.map((candidate) => ({ ...candidate, isChecked: false }))
    );
  }, [candidates]);

  const handleSelectAll = (e) => {
    const checkAll = e.target.checked;
    const updatedCandidates = candidatesList.map((candidate) => {
      return { ...candidate, isChecked: checkAll };
    });
    setCandidatesList(updatedCandidates);
  };

  const handleCheckbox = (candidateId) => {
    const updatedCandidates = candidatesList.map((candidate) => {
      if (candidate._id === candidateId) {
        return { ...candidate, isChecked: !candidate.isChecked };
      }
      return candidate;
    });
    setCandidatesList(updatedCandidates);
  };

  const handleUnSelectAll = () => {
    const updatedCandidates = candidatesList.map((candidate) => {
      return { ...candidate, isChecked: false };
    });
    setCandidatesList(updatedCandidates);
  };
  const selectedCount = candidatesList.filter(
    (candidate) => candidate.isChecked
  ).length;

  return (
    <div>
      <div className="mt-5 text-second">
        <div className="flex px-2 justify-between w-full items-center ">
          <input type="checkbox" onChange={handleSelectAll} name="" id="box" />
          {/* <div className="">
            <select
              className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div> */}
          <div className="">
            <select
              className="block appearance-none  w-full bg-gray-100 border-0 text-gray-700 py-1  rounded leading-tight focus:outline-none focus:bg-white"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">⬆ Newest First</option>
              <option value="oldest">⬇ Oldest First</option>
            </select>
          </div>
        </div>
        <table className="w-full">
          {/* head */}

          <tbody className="py-12">
            {/* rows */}
            {candidatesList.map((candidate, index) => (
              <tr key={index} className="border-t border-gray-300 text-second ">
                <td className="p-2 ">
                  <label className="">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      value={candidate._id}
                      checked={candidate.isChecked}
                      onChange={(e) => handleCheckbox(candidate._id)}
                    />
                  </label>
                </td>
                <td className="p-2">
                  <div className="flex justify-start gap-3 items-center ">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={`https://sojib-job-swift.vercel.app/images/${candidate.image}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg mb-1 font-semibold text-second">
                        {candidate.firstName} {candidate.lastName}
                      </p>
                      {candidate.educationList ? (
                        <>
                          {" "}
                          <p>
                            {" "}
                            {candidate.educationList?.map((edu) => (
                              <span className="text-sm">
                                {" "}
                                {edu?.degree ? edu?.degree : ""} from{" "}
                                {edu?.institution ? edu?.institution : " "}{" "}
                              </span>
                            ))}{" "}
                            <span> </span>
                          </p>{" "}
                        </>
                      ) : (
                        "no"
                      )}
                      <p className="text-sm">{candidate.location}</p>
                      <p className="text-sm">
                        via <strong>careers page,</strong>7 days ago
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* footer part  */}

        {selectedCount < 1 ? (
          " "
        ) : (
          <>
            {" "}
            <div className="mt-5 mb-3 fixed bottom-0 left-0 right-0 bg-orange-200 py-3">
              <div className="space-y-2 pt-4 text-start">
                <div className="flex gap-5 justify-around items-center">
                  <div className="flex gap-3 ">
                    <p>{selectedCount} selected</p>
                    <p>
                      Select:{" "}
                      <span
                        onClick={handleUnSelectAll}
                        className="font-semibold cursor-pointer"
                      >
                        None{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <AiFillDelete
                      onClick={() => handleDelete(isChecked)}
                      size={25}
                      color="red"
                    />
                    <HiMail size={25} className="text-sky-800" />
                    <HiChat size={25} className="text-sky-800" />
                    <HiHand size={25} color="red" />
                    <button className="bg-[#00756a] p-2 rounded-xl text-center text-white ">
                      Move to {stageName}
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default AppliedCandidate;
