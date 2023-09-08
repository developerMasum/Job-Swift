import React, { useState } from "react";
import useAppliedJobs from "./useAppliedJobs";
import NoContent from "../NoContent";
import { FiSearch, FiInfo } from "react-icons/fi";
import {
  HiChat,
  HiHand,
  HiLocationMarker,
  HiMail,
  HiOutlineDotsHorizontal,
  HiPhone,
  HiPhoneIncoming,
} from "react-icons/hi";
import hand from "../../../../assets/Image/hand.png";
const Applied = () => {
  const [appliedJobs] = useAppliedJobs();
  const [activeTab, setActiveTab] = useState("tabs1");
  const filteredJobs = appliedJobs.filter((job) => job.stage === "applied");
  const [isActiveTab, setIsActiveTab] = useState("profile");

  return (
    <div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id}>
            <div className="pt-16">
              <div className="md:flex  gap-12">
                <div className="md:w-1/3 w-full text-start">
                  <div>
                    <button
                      style={{
                        borderBottom:
                          activeTab === "tabs1" ? "2px solid gray" : "none",
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
                        borderBottom:
                          activeTab === "tabs2" ? "2px solid gray" : "none",
                        color: activeTab === "tabs2" ? "black" : "grey",
                      }}
                      onClick={() => {
                        setActiveTab("tabs2");
                      }}
                    >
                      Disqualified
                    </button>
                    <hr />
                    <div className="pt-10 text-center">
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
                          <img
                            className="w-1/3 mx-auto"
                            src={hand}
                            alt="Hand"
                          />
                          <h4 className="font-semibold text-swift text-xl">
                            No disqualified candidates
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-2/3 ">
                  {activeTab === "tabs1" && (
                    <div className="space-y-2  text-start">
                      <div className="flex gap-5 justify-end">
                        <HiOutlineDotsHorizontal size={25} color="gray" />
                        <HiMail size={25} color="gray" />
                        <HiChat size={25} color="gray" />
                        <HiHand size={25} color="red" />
                        <button className="bg-[#00756a] px-4 py-1 rounded-md">
                          Move to Interview
                        </button>
                      </div>
                      <div className="pt-10 bg-white">
                        {appliedJobs.map((data) => (
                          <div key={appliedJobs.id}>
                            <div>
                              <h3 className="text-3xl font-semibold">
                                {data.name}
                              </h3>
                              <div className="flex items-center gap-2 text-base text-gray-800">
                                <p>{data.education.educationName}</p> from
                                <p>{data.education.collegeName}</p>
                              </div>
                              <div className="flex items-center gap-2 text-base text-gray-500">
                                <p>{data.education.collegeName}</p>
                                <p>{data.education.year}</p>
                              </div>
                              <div className="flex items-center gap-5 py-3">
                                <div className="flex items-center gap-2 text-gray-600 text-[13px]">
                                  <HiLocationMarker />
                                  <p>{data.education.collegeLocation}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 text-[13px]">
                                  <HiPhone />
                                  <p>{data.contact}</p>
                                </div>
                              </div>
                              {/* Tags */}
                              <div>
                                <button className="font-medium text-gray-500">
                                  + Add Tags
                                </button>
                                <p className="pt-5">
                                  via{" "}
                                  <span className="font-bold">
                                    careers page
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="space-x-8">
                          <button
                            className={
                              isActiveTab === "profile"
                                ? "bg-gray-700 rounded px-3 py-1 text-white"
                                : "text-sm text-grey px-3 py-1"
                            }
                            onClick={() => {
                              setIsActiveTab("profile");
                            }}
                          >
                            Profile
                          </button>

                          <button
                            className={
                              isActiveTab === "timeline"
                                ? "bg-gray-700 rounded px-3 py-1 text-white"
                                : "text-sm text-grey px-3 py-1e "
                            }
                            onClick={() => {
                              setIsActiveTab("timeline");
                            }}
                          >
                            Timeline
                          </button>
                        </div>
                        {isActiveTab === "profile" && (
                          <div className="space-y-2 pt-5">
                            <h5 className="font-medium text-xs text-gray-500">
                              EDUCATION
                            </h5>
                            {appliedJobs.map((education) => (
                              <div
                                className="flex items-center gap-10"
                                key={education.id}
                              >
                                <p>{education.education.year}</p>
                                <div className="flex items-center gap-1">
                                  <p className="font-medium">
                                    {education.education.educationName}
                                  </p>
                                  in
                                  <p className="font-medium">
                                    {education.education.subject}
                                  </p>
                                  at
                                  <p className="font-medium">
                                    {education.education.collegeName}
                                  </p>
                                </div>
                              </div>
                            ))}
                            <div>
                              <h5 className="font-medium pt-7 text-gray-500">
                                RESUME
                              </h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default Applied;
