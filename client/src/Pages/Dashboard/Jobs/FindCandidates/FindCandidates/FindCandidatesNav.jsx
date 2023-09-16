import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FindCandidatesNav = ({id}) => {
  const [activeTab, setActiveTab] = useState("jobDetails");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (

    <div className="w-full">
      <div className="bg-white fixed md:top-[68px] top-[62px] border-[1px] border-gray-300 shadow w-full mx-auto px-4 py-2">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl font-semibold text-gray-600">Web Developer</h2>
        <div className="space-x-4 flex items-center">
          {/* Dropdown for View Candidates */}

          <Link to={"../candidate"}>
            {" "}
            <button className=" font-medium bg-cyan-500 text-white py-1 px-4 rounded-full hover:bg-cyan-700 transition duration-300 ease-in-out">
              View Candidates
            </button>
          </Link>

          <Link
            to="../jobs"
            className="bg-transparent border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-1 px-4 rounded-full transition duration-300 ease-in-out"
          >
            View Jobs
          </Link>

          {/* Dropdown for Published (Career Page Only) */}

          <button className="bg-red-600 text-white py-1 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
            Publish
          </button>
        </div>
      </div>

      <div className="flex justify-evenly text-gray-500  gap-4 w-full pt-8">
        <Link
          to={`jobDetails/${id}`}
          className="tab-link"
          onClick={() => handleTabClick("jobDetails")}
          style={
            activeTab === "jobDetails"
              ? {
                  borderBottom: "2px solid #33879f",
                  fontWeight: "bold",
                  color: "#33879f",
                }
              : {}
          }
        >
          Job Details
        </Link>
        <Link
          to="candidates"
          className="tab-link"
          onClick={() => handleTabClick("candidates")}
          style={
            activeTab === "candidates"
              ? {
                  borderBottom: "2px solid #33879f",
                  fontWeight: "bold",
                  color: "#33879f",
                }
              : {}
          }
        >
          Find Candidates
        </Link>
        <Link
          to="teamMembers"
          className="tab-link"
          onClick={() => handleTabClick("teamMembers")}
          style={
            activeTab === "teamMembers"
              ? {
                  borderBottom: "2px solid #33879f",
                  fontWeight: "bold",
                  color: "#33879f",
                }
              : {}
          }
        >
          Team Members
        </Link>
        <Link
          to="workflow"
          className="tab-link"
          onClick={() => handleTabClick("workflow")}
          style={
            activeTab === "workflow"
              ? {
                  borderBottom: "2px solid #33879f",
                  fontWeight: "bold",
                  color: "#33879f",
                }
              : {}
          }
        >
          Workflow
        </Link>
      </div>
    </div>
    </div>
  );
};

export default FindCandidatesNav;
