import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdClear } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import triangle from "../../../assets/Image/triangles4-1.svg";
import PostJobs from "./PostJobs";
import icons1 from "../../../assets/Image/jobsicon1.png";
import icons2 from "../../../assets/Image/jobsicons.png";
import icons3 from "../../../assets/Image/josbicns3.png";

const countries = ["USA", "Canada", "UK", "Australia", "Germany"];

import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../redux/postJob/postSlice";
import { authContext } from "../../../Auth/AuthProvider";
const Jobs = () => {
  const dispatch = useDispatch();
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(authContext);

  const jobs = useSelector((state) => state.posts.jobs);
  const isJobs = jobs.filter((d) => d.userEmail === user?.email);
  const postId = useSelector((state) => state.posts.jobs).map(post=>post._id);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);
 
  return (
    <div className="pt-[70px] max-w-7xl mx-auto">
      {/* Down nav */}
      <div className="md:px-8 w-full px-4 bg-white shadow-md py-4 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <h2 className="lg:md:text-3xl">MD MASUM</h2>
            <button className="pt-1">
              {" "}
              <LuEdit className="h-5 w-5  text-gray-500" />
            </button>
          </div>
          <div>
            <Link to="post-job">
              <button className="bg-[#00756a] border-2 border-[#00756a] px-5 py-2 rounded-lg text-white lg:md:font-medium hover:bg-[#005f56] hover:border-[#005f56] transition-colors 3s ease-in-out">
                Create a new job
              </button>
            </Link>
          </div>
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
            className="px-4 font-medium hover:underline flex gap-1 items-center py-2 text-secondary"
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
            className="flex font-medium gap-1 hover:underline items-center py-2 text-secondary"
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
      {/* Content */}
      <div className=" mx-2 lg:md:mx-0 flex gap-14 border rounded-md border-gray-400 py-4  items-center bg-white justify-between px-10">
        <div className="space-y-3">
          <h2 className="font-semibold text-base text-gray-800">Post a job</h2>
          <p className="text-secondary">
            Get your job listing in front of millions of candidates today. Do
            things faster with a choice of over 700 job description templates,
            and choose to publish on the most popular free and premium job
            boards.
          </p>
          <Link to="post-job">
            <button className=" text-[#00756a] px-5 py-1 border border-[#00756a] rounded-lg hover:bg-[#ffffdd] transition-colors 3s ease-in-out font-medium">
              Post a job
            </button>
          </Link>
        </div>
        <div className="w-[280px] h-full">
          <img src={triangle} alt="" />
        </div>
      </div>

      {/* Previous post */}

      <div className="pt-10 px-2 lg:md:px-0">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-secondary ">SAMPLE JOBS</p>
          <p className="text-xs font-bold text-secondary ">
            Delete sample data
          </p>
        </div>
        <div className="">
          {isJobs.map((jobs) => (
            <PostJobs  jobs={jobs} key={jobs._id} />
          ))}
        </div>
        <div className="pt-8 pb-6">
          <h2 className="pb-4 text-xs font-bold text-secondary">TALENT POOL</h2>

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
                className="group-hover:block hidden text-secondary hover:underline font-medium
              "
              >
                Upload Resume
              </p>
              <p
                className="group-hover:block hidden text-secondary hover:underline font-medium
              "
              >
                Refer Candidate
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-8 mx-5">
            <h2 className=" text-xs font-bold text-secondary">
              SUGGESTED ACTIONS
            </h2>
            <h2 className=" text-xs font-bold text-secondary hover:underline">
              Don't show again
            </h2>
          </div>
          <div className="px-5 mx-auto pb-20 grid lg:md:grid-cols-3 gap-7">
            <div
              className="flex px-4 py-3 rounded-lg"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <div className="space-y-3">
                <h4 className="font-semibold">Work as a team</h4>
                <p className="text-secondary text-sm">
                  Invite your team to Workable so you can share feedback and
                  work together to hire the right people.
                </p>
                <button className="px-4 py-1 text-primary font-semibold border border-[#00673B] rounded-md">
                  Send invite{" "}
                </button>
              </div>
              <div>
                <img className="w-[200px] h-[100px]" src={icons1} alt="" />
              </div>
            </div>
            <div
              className="flex px-4 rounded-lg py-3"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <div className="space-y-3">
                <h4 className="font-semibold">Show off your brand</h4>
                <p className="text-secondary text-sm">
                  Ensure candidates see your company logo and custom description
                  on job posts, emails and more.
                </p>
                <button className="px-4 py-1 text-primary font-semibold border border-[#00673B] rounded-md">
                  Send invite{" "}
                </button>
              </div>
              <div>
                <img className="w-[200px] h-[100px]" src={icons2} alt="" />
              </div>
            </div>
            <div
              className="flex rounded-lg px-4 py-3"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <div className="space-y-3">
                <h4 className="font-semibold">
                  Find the best features for you
                </h4>
                <p className="text-secondary text-sm">
                  Workable is best when it's customized for you. Check out all
                  of our features with a personal walkthrough.
                </p>
                <button className="px-4 py-1 text-primary font-semibold border border-[#00673B] rounded-md">
                  Send invite{" "}
                </button>
              </div>
              <div>
                <img className="w-[200px] h-[100px]" src={icons3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
