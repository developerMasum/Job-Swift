import React, { useState } from "react";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";

const PostJobs = ({ jobs }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(jobs);
  const {
    jobName,
    cityName,
    addressName,
    Sourced,
    Applied,
    PhoneScreen,
    Assessment,
    Interview,
    Offer,
    Hired,
    totalCandidates,
    totalActiveCandidates,
    lastCandidateDate,
  } = jobs;
  return (
    <div className="pt-8 px-8">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-medium">{jobName}</h2>
          <p className="flex gap-1 text-gray-500">
            <span>{cityName}</span>,<span>{addressName}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-secondary px-4 py-1 rounded-lg border-gray-600 border">
            Find Candidates
          </button>
          <div className="">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-white flex gap-1 items-center  px-4 py-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
            >
              Used Internally <span><MdKeyboardArrowDown className="w-5 h-5"/> </span>
            </button>
            <div className="-ml-56">
              {isVisible && (
                <div className="absolute text-sm  text-secondary px-3 py-5 mx-auto mt-2 w-96 rounded-md shadow-lg bg-white">
                  <div className="space-y-2">
                    <h6 className="font-semibold">Publish</h6>
                    <p>
                      Visible on your careers page and selected free and premium
                      job boards.
                    </p>
                  </div>

                  <div className="pt-7 space-y-2">
                    <h6 className="font-semibold">Use Confidentially</h6>
                    <p>
                      Only visible to account admins and members of the hiring
                      team. Other account members cannot refer candidates or ask
                      to join the hiring team.
                    </p>
                  </div>

                  <div className="pt-7 space-y-2">
                    <h6 className="font-semibold">Used Confidentially</h6>
                    <p>
                      Only visible to account admins and members of the hiring
                      team. Other account members cannot refer candidates or ask
                      to join the hiring team.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-7 px-10 mx-auto pb-5 justify-between">
        <div className="font-medium  text-center text-gray-600">
          <p>{Sourced}</p> <p>Sourced</p>{" "}
        </div>
        <div className="font-medium  text-center text-gray-600">
          <p>{Applied}</p> <p>Applied</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{PhoneScreen}</p> <p>Phone Screen</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Assessment}</p> <p>Assessment</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Interview}</p> <p>Interview</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Offer}</p> <p>Offer</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Hired}</p> <p>Hired</p>{" "}
        </div>
      </div>
      <div className="flex  pt-1 justify-between text-gray-600">
        <h2 className="flex  gap-2 items-center">
          {" "}
          <span>
            {" "}
            <MdClear className="w-7 h-7" color="red" />
          </span>{" "}
          This job is not published on your careers page or on any job boards
        </h2>
        <div className="flex">
          <p>Candidates:{totalCandidates}</p>
          <p>{totalActiveCandidates} active in pipeline</p>
          <p>last CandidateDate: {lastCandidateDate} </p>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
