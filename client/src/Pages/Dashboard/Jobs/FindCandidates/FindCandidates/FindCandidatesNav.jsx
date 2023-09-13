import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const FindCandidatesNav = () => {
  const [activeTab, setActiveTab] = useState("jobDetails");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    // <div className="">
    //   <div className="bg-white fixed top-[68px]">
    //     <div className="flex justify-between px-1 pt-4">
    //       <div>
    //         <h2 className="text-3xl ms-5">Web Developer</h2>
    //       </div>
    //       <div className="flex gap-2 items-center">
    //         {/* <button className='flex items-center'>View Candidates
    //                     <button className=''><BiChevronDown></BiChevronDown></button>
    //                 </button> */}

    //         {/* dropdown  view candidates */}
    //         <div className="dropdown relative group hover:underline">
    //           <label
    //             tabIndex={0}
    //             className="rounded-full transition duration-300 transform "
    //           >
    //             <button className="flex items-center">
    //               View Candidates
    //               <button className="">
    //                 <BiChevronDown></BiChevronDown>
    //               </button>
    //             </button>
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className="-ms-14 py-4 menu menu-sm dropdown-content mt-1 px-4 shadow-xl bg-white rounded-md w-max"
    //           >
    //             <div className="text-black">
    //               <h2 className="ps-3 pe-5 py-4">Select pipeline stage</h2>
    //               <li>
    //                 <Link>Sourced</Link>
    //               </li>
    //               <li>
    //                 <Link>Applied{"(2)"}</Link>
    //               </li>
    //               <li>
    //                 <Link>Phone Screen</Link>
    //               </li>
    //               <li>
    //                 <Link>Assessment</Link>
    //               </li>
    //               <li>
    //                 <Link>Interview</Link>
    //               </li>
    //               <li>
    //                 <Link>Offer</Link>
    //               </li>
    //               <li>
    //                 <Link>Hired</Link>
    //               </li>
    //             </div>
    //           </ul>
    //         </div>
    //         {/* dropdown end */}

    //         <Link className="btn border border-black">View Jobs</Link>
    //         <Link className="btn bg-[#00756a] text-white hover:bg-lime-800">
    //           Update
    //         </Link>

    //         {/* dropdown  publish career page only*/}
    //         <div className="dropdown relative group">
    //           <label
    //             tabIndex={0}
    //             className="rounded-full transition duration-300 transform "
    //           >
    //             <button className="btn btn-error text-white hover:bg-orange-700">
    //               Published {"(Career Page Only)"}
    //               <button>
    //                 <BiChevronDown></BiChevronDown>{" "}
    //               </button>
    //             </button>
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className=" menu menu-sm dropdown-content mt-1 shadow-xl bg-white rounded-md w-72"
    //           >
    //             <div className="text-black">
    //               <li className="bg-[#fff6df]">
    //                 <Link className="font-small mt-2">
    //                   Published (Careers page only)
    //                   <br />
    //                   <br />
    //                   There are issues that will prevent this job being
    //                   published on some job boards. Please check the job for
    //                   details.
    //                 </Link>
    //               </li>
    //               <li className="border-t-2"></li>
    //               <li className=" hover:bg-[#fff6df]">
    //                 <Link>
    //                   Unpublish & use internally
    //                   <br />
    //                   <br />
    //                   Visible to your Workable account members only. Account
    //                   members can refer candidates or ask to join the hiring
    //                   team.
    //                 </Link>
    //               </li>
    //             </div>
    //           </ul>
    //         </div>
    //         {/* dropdown end */}
    //       </div>
    //     </div>

    //     <div className="flex gap-1  lg:md:pt-6 lg:md:pb-5">
    //       <Link to="jobDetails">
    //         <p className=" hover:bg-[#f2f4f5] ms-4 ps-4 lg:md:pe-32 py-2 rounded-lg">
    //           Job details
    //         </p>
    //       </Link>
    //       <div className="flex items-center gap-1">
    //         <p className="border-l-2 h-8"></p>
    //         <Link to="applicationForm">
    //           <p className=" hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg">
    //             Application Form
    //           </p>
    //         </Link>
    //       </div>
    //       <div className="flex items-center gap-1">
    //         <p className="border-l-2 h-8"></p>
    //         <Link to="candidates">
    //           <p className=" hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg">
    //             Find Candidates
    //           </p>
    //         </Link>
    //       </div>
    //       <div className="flex items-center gap-1">
    //         <p className="border-l-2 h-8"></p>
    //         <Link to="teamMembers">
    //           <p className=" hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg">
    //             Team Members
    //           </p>
    //         </Link>
    //       </div>
    //       <div className="flex items-center gap-1">
    //         <p className="border-l-2 h-8"></p>
    //         <Link to="workflow">
    //           <p className=" hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg">
    //             Workflow
    //           </p>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className="bg-white fixed top-[68px] border-[1px] border-gray-300 shadow-lg w-full container mx-auto px-4 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-gray-600">Web Developer</h2>
        <div className="space-x-4 flex items-center">
          {/* Dropdown for View Candidates */}
          <div className="relative group">
            <button className="text-cyan-600 font-medium hover:underline">
              View Candidates <BiChevronDown className="inline-block" />
            </button>
            <ul className="hidden absolute mt-2 -ml-2 p-4 bg-white rounded-md shadow-xl w-max group-hover:block">
              <li>
                <Link className="text-cyan-600 hover:underline">Sourced</Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">
                  Applied (2)
                </Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">
                  Phone Screen
                </Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">
                  Assessment
                </Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">Interview</Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">Offer</Link>
              </li>
              <li>
                <Link className="text-cyan-600 hover:underline">Hired</Link>
              </li>
            </ul>
          </div>

          <Link
            to="view-jobs"
            className="bg-transparent border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-1 px-4 rounded-full transition duration-300 ease-in-out"
          >
            View Jobs
          </Link>
          <Link
            to="update"
            className="bg-cyan-500 text-white py-1 px-4 rounded-full hover:bg-cyan-700 transition duration-300 ease-in-out"
          >
            Update
          </Link>

          {/* Dropdown for Published (Career Page Only) */}
          <div className="relative group">
            <button className="bg-red-600 text-white py-1 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
              Published {"(Career Page Only)"}{" "}
              <BiChevronDown className="inline-block" />
            </button>
            <ul className="hidden absolute mt-2 -ml-2 p-4 bg-white rounded-md shadow-xl w-72 group-hover:block">
              <li className="bg-yellow-200">
                <p className="text-cyan-600 text-sm p-2">
                  Published (Careers page only)
                  <br />
                  <br />
                  There are issues that may prevent this job from being
                  published on some job boards. Please check the job for
                  details.
                </p>
              </li>
              <li className="border-t-2"></li>
              <li className="hover:bg-yellow-200">
                <Link className="text-cyan-600 text-sm p-2">
                  Unpublish & use internally
                  <br />
                  <br />
                  Visible to your Workable account members only. Account members
                  can refer candidates or ask to join the hiring team.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly text-gray-500  gap-4 w-full pt-8">
        <Link
          to="jobDetails"
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
          to="applicationForm"
          className="tab-link"
          onClick={() => handleTabClick("applicationForm")}
          style={
            activeTab === "applicationForm"
              ? {
                  borderBottom: "2px solid #33879f",
                  fontWeight: "bold",
                  color: "#33879f",
                }
              : {}
          }
        >
          Application Form
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
  );
};

export default FindCandidatesNav;
