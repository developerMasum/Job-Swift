import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdClear } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import triangle from "../../../assets/Image/triangles4-1.svg";
import PostJobs from "./PostJobs";


const countries = ["USA", "Canada", "UK", "Australia", "Germany"];

import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../redux/postJob/postSlice";
import { authContext } from "../../../Auth/AuthProvider";
import { getAllCandidates } from "../../../redux/candidates/candidatesOperation";
import JobsInvitationsCard from "./JobsInvitetionsCard";
import Swal from "sweetalert2";
const Jobs = () => {
  const dispatch = useDispatch();
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(authContext);
  const email = user?.email;
  const nameOrMail = user?.displayName ;

  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
// console.log('from jobs', candidates);
useEffect(() => {
  // Dispatch the action to fetch candidates based on the selected sorting order
  dispatch(getAllCandidates(email));
}, [dispatch]);

const jobs = useSelector((state) => state.posts.jobs);
const isJobs = jobs.filter((d) => d.userEmail === user?.email);
const jobTitleFor = isJobs.map(j => j.jobTitle);
const mappedTitle = isJobs.map((j) => {
  const filteredByTitle = candidates.filter((c) => c.jobTitle === j.jobTitle && c.jobId === j._id); 
  const interviewCount = filteredByTitle.filter((ft) => ft.stage === "Interview").length;
  const sourcedCount = filteredByTitle.filter((ft) => ft.stage === "Sourced").length;
  const appliedCount = filteredByTitle.filter((ft) => ft.stage === "Applied").length;
  const offerCount = filteredByTitle.filter((ft) => ft.stage === "Offer").length;
  const hiredCount = filteredByTitle.filter((ft) => ft.stage === "Hired").length;
  const assessmentCount = filteredByTitle.filter((ft) => ft.stage === "Assessment").length;

  // console.log(`Job Title: ${j.jobTitle}`);
  // console.log(`Job ID: ${j._id}`); 
  // console.log(`Interview Count: ${interviewCount}`);
  // console.log(`Sourced Count: ${sourcedCount}`);
  // console.log(`Applied Count: ${appliedCount}`);
  // console.log(`Offer Count: ${offerCount}`);
  // console.log(`Hired Count: ${hiredCount}`);
  // console.log(`Assessment Count: ${assessmentCount}`);

  return {
    jobTitleFor: j.jobTitle,
    jobId: j._id,
    Interview: interviewCount,
    Sourced: sourcedCount,
    Applied: appliedCount,
    Offer: offerCount,
    Hired: hiredCount,
    Assessment: assessmentCount,
  };
});
  // console.log('job title',mappedTitle);
  // const resilt = jobTitle.filter(job=>job.jobTitle===)
  // console.log('isjobs',resilt);
  

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  // ---------------------------------------job delete ---------------------
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/all-post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");

             
            //   const remaining = jobs.filter((job) => job.jobId !== id);
            // setMappedTitle(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="pt-[70px] max-w-7xl mx-auto">
      <div className="bg-white rounded-lg border-[1px] p-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-gray-600">{nameOrMail} </h2>
            {/* <button className="text-gray-600 hover:text-cylog transition-colors duration-300">
              <FaEdit className="w-5 h-5" />
            </button> */}
          </div>
          <Link to="post-job">
            <button className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
              Create a New Job
            </button>
          </Link>
        </div>
      </div>

      {/* Dropdown */}
      <div className="flex justify-end pr-16 ">
        <div className="relative z-50">
          <button
            onClick={() => {
              setFirstOpen(!isFirstOpen);
              if (isSecondOpen) setSecondOpen(false);
            }}
            className="px-4 font-medium hover:underline flex gap-1 items-center py-2 text-swift"
          >
            All Location
            <span>
              <MdKeyboardArrowDown className="h-5 w-5" />
            </span>
          </button>

          {isFirstOpen && (
            <div className="absolute mt-2 w-52 rounded-md shadow-lg bg-white">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ul className="mt-2">
                {countries
                  .filter((country) =>
                    country.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((country) => (
                    <li
                      key={country}
                      className="px-3 py-1 hover:bg-yellow-100 hover:bg-opacity-50 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="">
          <button
            onClick={() => {
              setSecondOpen(!isSecondOpen);
              if (isFirstOpen) setFirstOpen(false);
            }}
            className="flex font-medium gap-1 hover:underline items-center py-2 text-swift"
          >
            No group applied
            <span>
              <MdKeyboardArrowDown className="h-5 w-5" />
            </span>
          </button>

          {isSecondOpen && (
            <div className="absolute mr-16 w-52 rounded-md shadow-lg bg-white">
              <ul className="px-3 py-2 cursor-pointer">
                <li className="hover:bg-yellow-100 hover:bg-opacity-50 text-gray-500 hover:text-black py-1">
                  No Group Applied
                </li>
                <li className="hover:bg-yellow-100 hover:bg-opacity-50 text-gray-500 hover:text-black py-1">
                  Group by city
                </li>
                <li className="hover:bg-yellow-100 hover:bg-opacity-50 text-gray-500 hover:text-black py-1">
                  Group by state
                </li>
                <li className="hover:bg-yellow-100 hover:bg-opacity-50 text-gray-500 hover:text-black py-1">
                  Group by country
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mx-2 lg:md:mx-0 flex gap-8 border-[1px] rounded-md   border-gray-300 p-6 items-center bg-white justify-between">
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-bold text-second"> Post a job</h2>
          <p className="text-gray-500">
            Get your job listing in front of millions of candidates today. Do
            things faster with a choice of over 700 job description templates,{" "}
            <br />
            and choose to publish on the most popular free and premium job
            boards.
          </p>
          <Link to="post-job">
            <button className="border border-cyan-600 text-cyan-600 px-6 py-2 rounded-lg font-medium hover:bg-cyan-600 hover:text-white hover:border-cyan-800 transition-colors duration-300">
              Post a Job
            </button>
          </Link>
        </div>
        <div className="w-52 h-40">
          <img src={triangle} alt="" className="w-full h-full" />
        </div>
      </div>

      {/* Previous post */}

      <div className="pt-10 px-2 lg:md:px-0">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-swift ">ALL POSTED JOBS</p>
          <p className="text-xs font-bold text-swift uppercase ">Showing with candidates Stages</p>
        </div>
        <div className="">
          {mappedTitle.map((jobs,index) => (
            <PostJobs handleDelete={handleDelete} jobs={jobs} key={index} />
          ))}
        </div>
        {/* <div className="">
          {mappedTitle.map((jobs) => (
            <PostJobs jobs={jobs} key={jobs._id} />
          ))}
        </div> */}
        <div className="pt-8 pb-6">
          <h2 className="pb-4 text-xs font-bold text-swift">TALENT POOL</h2>

          <div className="group hover:bg-yellow-100 flex px-7 py-4 justify-between items-center hover:bg-opacity-60">
            <div className="flex gap-2 items-center">
              <span>
                <AiFillStar color="#808080" className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-semibold">Talent Pool</h4>
              <p>
                Add candidates by email: send resumes to{" "}
                <span className="hover:underline">
                  md-masum@jobs.workablemail.com
                </span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p
                className="group-hover:block hidden text-swift hover:underline font-medium
              "
              >
                Upload Resume
              </p>
              <p
                className="group-hover:block hidden text-swift hover:underline font-medium
              "
              >
                Refer Candidate
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-8 mx-5">
            <h2 className=" text-xs font-bold text-swift">SUGGESTED ACTIONS</h2>
            <h2 className=" text-xs font-bold text-swift hover:underline">
              Don't show again
            </h2>
          </div>
          <JobsInvitationsCard />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
