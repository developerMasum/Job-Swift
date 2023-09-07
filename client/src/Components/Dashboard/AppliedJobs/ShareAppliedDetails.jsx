import React, { useEffect, useState } from 'react';
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
import AppliedCandidate from './AppliedComponents/Applied/AppliedCandidate';
import NoContent from './NoContent';
import useData from '../../../Hooks/useData';
const ShareAppliedDetails = ({stageName}) => {
    const [Data] = useData();
    const [activeTab, setActiveTab] = useState("tabs1");
    const filteredJobs = Data.filter((job) => job.stage === "applied");
    const [isActiveTab, setIsActiveTab] = useState("profile");
    const [candidates, setCandidates] = useState([]);
    console.log(candidates.length);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("http://localhost:5000/all-applications");
          const data = await response.json();
          const firstFourData = data.slice(0, 3);
          setCandidates(firstFourData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);
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
                                className="flex-grow px-2 py-1 outline-none border-none focus:border-none "
                                name="search"
                                placeholder="Search by name, skills, tags and more…"
                              />
                              <FiInfo size={20} className="text-gray-600" />
                            </div>
                            <AppliedCandidate stageName={stageName} candidates={candidates} />
                          </div>
                        )}
  
                        {activeTab === "tabs2" && (
                          <div className="space-y-2 pt-4">
                            {/* <img
                              className="w-1/3 mx-auto"
                              src={hand}
                              alt="Hand"
                            /> */}
                            <HiHand size={140} className="mx-auto"/>
                            <h4 className="font-semibold text-secondary text-xl">
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
                        <div className="md:flex hidden gap-5 justify-end">
                          <HiOutlineDotsHorizontal size={25} color="gray" />
                          <HiMail size={25} color="gray" />
                          <HiChat size={25} color="gray" />
                          <HiHand size={25} color="red" />
                          <button className="bg-[#00756a] px-4 py-1 rounded-md">
                            Move to Interview
                          </button>
                        </div>
                        <div className="pt-10 bg-white">
                          {Data.map((data) => (
                            <div key={Data.id}>
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
                              {Data.map((data) => (
                                <div key={data.id}>
                                  <div className="flex items-center gap-10">
                                    <p>{data.education.year}</p>
                                    <div className="flex items-center gap-1">
                                      <p className="font-medium">
                                        {data.education.educationName}
                                      </p>
                                      in
                                      <p className="font-medium">
                                        {data.education.subject}
                                      </p>
                                      at
                                      <p className="font-medium">
                                        {data.education.collegeName}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <h5 className="font-medium pt-7 text-sm text-gray-500">
                                      COVER LETTER
                                      </h5>
                                      {data?.coverLetter}
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-sm pt-7 text-gray-500">
                                      SUMMARY
                                      </h5>
                                      {data.summary}
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-sm pt-7 text-gray-500">
                                      RESUME
                                      </h5>
                                      {data.resume}
                                    </div>
                                    {/* Contact Details */}
                                    <div>
                                      <h5 className="font-medium text-sm pt-7 text-gray-500">
                                      CONTACT DETAILS
                                      </h5>
                                      <div className=" flex gap-20 text-gray-500">
                                        <p>Phone</p>
                                        <p>{data.contact}</p>
                                      </div>
                                      <div className=" pt-2 flex gap-20 text-gray-500">
                                        <p>Email</p>
                                        <p>{data.email}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
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

export default ShareAppliedDetails;