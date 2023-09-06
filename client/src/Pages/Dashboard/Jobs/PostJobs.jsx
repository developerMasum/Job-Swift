import React, { useState } from "react";
import { MdClear, MdKeyboardArrowDown, MdStar } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostJobs = ({ jobs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    jobTitle,
    cityName,
    jobLocation,
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
    _id,
  } = jobs;
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/all-post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
  };
  

  return (
    <div
      className="py-8 rounded-lg  lg:md:px-8 px-6   bg-white mt-5"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      }}
    >
      <div className="lg:md:flex justify-between ">
        <div className="flex lg:md:gap-2  items-center">
          <MdStar size={25} color="#ffca00" />
          <Link to={`applied-job/${_id}`}>
            <h2 className="lg:md:text-xl lg:md:font-medium  hover:underline">
              {jobTitle}
            </h2>
          </Link>
          <p className="flex gap-1 text-gray-500">
            <span>{cityName}</span>,<span>{jobLocation}</span>
          </p>
        </div>
        <div className="flex lg:md:gap-2 gap-6 lg:md:mt-0 mt-5">
          <button className="text-secondary px-4 py-1 rounded-lg border-gray-600 border">
            <Link to="findCandidates">Find Candidates</Link>
          </button>
          <div className="">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-white flex gap-1 items-center  px-4 py-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
            >
              Used Internally{" "}
              <span>
                <MdKeyboardArrowDown className="w-5 h-5" />{" "}
              </span>
            </button>
            <div className="-ml-56">
              {isVisible && (
                <div
                  className="lg:md:absolute text-sm  text-secondary mt-2 mx-auto lg:md:w-96 w-60 rounded-lg shadow-lg space-y-2  bg-white"
                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  }}
                >
                  <button className="space-y-2  text-start hover:bg-teal-700 hover:text-white  px-3 pt-5 py-3">
                    <Link to={`/overview/${_id}`}>
                      <h6 className="font-semibold">Publish</h6>
                      <p>
                        Visible on your careers page and selected free and
                        premium job boards.
                      </p>
                    </Link>
                  </button>

                  <button
                    disabled
                    className="py-3  hover:bg-teal-700 hover:text-white  px-3  space-y-2 text-start "
                  >
                    <Link to={`/editJobs/${_id}`}>
                      <h6 className="font-semibold">Use Edit</h6>
                      <p>
                        Editable only by account admins and members of the
                        hiring team. Other account members cannot refer
                        candidates or request to join the hiring team
                      </p>
                    </Link>
                  </button>

                  <button
                    onClick={() => handleDelete(_id)}
                    className="py-3  hover:bg-teal-700 hover:text-white  px-3  space-y-2 text-start "
                  >
                    <h6 className="font-semibold">Used Delete</h6>
                    <p>
                      Only delete permissions are given to account admins and
                      members of the hiring team. Other account members cannot
                      refer candidates or ask to join the hiring team.
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:md:flex pt-7 lg:md:px-10 pe-6 mx-auto pb-5 justify-between grid grid-cols-4 gap-4">
        <div className="font-medium  text-center text-gray-600">
          <p> - </p> <p>Sourced</p>
        </div>
        <div className="font-medium  text-center text-gray-600">
          <p> - </p> <p>Applied</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> - </p> <p>Phone Screen</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> - </p> <p>Assessment</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> - </p> <p>Interview</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> - </p> <p>Offer</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> - </p> <p>Hired</p>
        </div>
      </div>
      <div className="flex  pt-1 justify-between text-gray-600  ">
        <h2 className="flex  gap-2 items-center">
          <span>
            <MdClear className="w-7 h-7" color="red" />
          </span>
          This job is not published on your careers page or on any job boards
        </h2>
        <div className="lg:md:flex">
          <p>Candidates:{totalCandidates}</p>
          <p>{totalActiveCandidates} active in pipeline</p>
          <p>last CandidateDate: {lastCandidateDate} </p>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
