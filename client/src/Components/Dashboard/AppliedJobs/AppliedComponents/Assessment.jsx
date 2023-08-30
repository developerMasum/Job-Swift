import React, { useState } from "react";
import useAppliedJobs from "./useAppliedJobs";
import { FiSearch, FiInfo } from "react-icons/fi";
import {
  HiChat,
  HiHand,
  HiMail,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import hand from "../../../../assets/Image/hand.png";
const Assessment = () => {
  const [appliedJobs] = useAppliedJobs();
  const [activeTab, setActiveTab] = useState("tabs1");

  const filteredJobs = appliedJobs.filter((job) => job.stage === "assessment");
  return (
    <div className="pt-8">
      <div className="md:flex gap-12">
        <div className="md:w-1/3 w-full text-start">
          <button
            style={{
              borderBottom: activeTab === "tabs1" ? "2px solid gray" : "none",
              color: activeTab === "tabs1" ? "black" : "grey",
            }}
            className="text-sm pb-2 font-medium"
            onClick={() => {
              setActiveTab("tabs1");
            }}
          >
            Qualified
          </button>
          <button
            className="text-sm ml-7 pb-2 font-medium"
            style={{
              borderBottom: activeTab === "tabs2" ? "2px solid gray" : "none",
              color: activeTab === "tabs2" ? "black" : "grey",
            }}
            onClick={() => {
              setActiveTab("tabs2");
            }}
          >
            Disqualified
          </button>
          <hr />
          <div className="pt-7 text-center">
            {activeTab === "tabs1" && (
              <div className="space-y-2">
                <div className="flex border border-gray-300 rounded-xl w-full px-3 py-2 items-center">
                  <FiSearch size={20} className="text-gray-600" />
                  <input
                    type="search"
                    className="flex-grow px-2 py-1 outline-none"
                    name="search"
                    placeholder="Search by name, skills, tags and more…"
                  />
                  <FiInfo size={20} className="text-gray-600" />
                </div>
              </div>
            )}

            {activeTab === "tabs2" && (
              <div className="space-y-2 pt-4">
                <img className="w-1/3 mx-auto" src={hand} alt="Hand" />
                <h4 className="font-semibold text-secondary text-xl">
                  No disqualified candidates
                </h4>
              </div>
            )}
          </div>
        </div>

        <div className="w-2/3 md:pt-12">
          {activeTab === "tabs1" && (
            <div className="space-y-2 pt-4 text-start">
              <div className="flex gap-5 justify-end">
                <HiOutlineDotsHorizontal size={25} color="gray" />
                <HiMail size={25} color="gray" />
                <HiChat size={25} color="gray" />
                <HiHand size={25} color="red" />
                <button className="bg-[#00756a]">Move to Interview</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
