import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { useContext } from "react";
import { RiCloseLine, RiShareForwardLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { authContext } from "../../Auth/AuthProvider";
import UpdateForm from "../New/UpdateForm";
import SocialLink from "./SocialLink";

// Define the Overview component
const Overview = () => {
  const formData = useLoaderData();
  // console.log('finding error',formData);
  const location = useLocation();
  const { user } = useContext(authContext);
  const queryParams = new URLSearchParams(location.search);
  const serializedData = queryParams.get("data");
  // const formData = JSON.parse(decodeURIComponent(serializedData));
  // console.log(formData);
  const jobTitle = formData?.jobTitle;
  const jobPosterEmail = formData?.userEmail;
  const jobId = formData?._id;
  // console.log(jobPosterEmail);
  const [tabIndex, setTabIndex] = useState(0);
  const currentPath = window.location.pathname;
  // console.log(currentPath);
  localStorage.setItem("URL", currentPath);

  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [activeTab, setActiveTab] = useState(0); // Initialize the active tab to 0 (the first tab)

  const handleTabClick = (index) => {
    setActiveTab(index); // Update the active tab when a tab is clicked
  };

  return (
    <div className="container">
      <div className="border-[1px]">
        <div className="border-b-[1px]  bg-green-100">
          {/* Job title header */}
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Job Preview: {formData?.jobTitle}
          </h1>
        </div>

        <div className="flex justify-between items-center bg-[#F5F5F5] border-b-[1px] shadow-md rounded-md p-4">
          <div className="p-4">
            {/* User and job information */}
            <h1 className="font-bold text-3xl text-[#00756a] mb-2">
              {user?.displayName}
            </h1>
            <h1 className="text-xl font-semibold mb-4">{formData?.jobTitle}</h1>
            <div className="flex text-gray-600">
              <h2 className="mr-2">{formData?.jobLocation}</h2>
              <h2 className="text-[#707070]">• {formData?.employmentType}</h2>
            </div>
          </div>
          {/* Button to open the modal */}
          <button
            onClick={openModal}
            className="flex items-center text-[#00756a] hover:text-[#004f46]"
          >
            <RiShareForwardLine className="text-2xl mr-1" />
            <span className="font-semibold">Share Jobs</span>
          </button>
        </div>
      </div>
      <div className=" my-6 mx-auto max-w-4xl">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* <TabList>
            <Tab>Overview</Tab>
            <Tab>Application</Tab>
          </TabList> */}
          <div>
            <TabList className="flex gap-5 cursor-pointer">
              <Tab
                className={`${
                  activeTab === 0
                    ? "bg-teal-700 hover:bg-teal-600 text-white"
                    : "border border-teal-700 text-gray-700"
                } px-4 py-2 rounded-md transition-colors duration-300 ease-in-out`}
                onClick={() => handleTabClick(0)}
              >
                Overview
              </Tab>
              <Tab
                className={`${
                  activeTab === 1
                    ? "bg-teal-700 hover:bg-teal-600 text-white"
                    : "border border-teal-700 text-gray-700"
                } px-4 py-2 rounded-md transition-colors duration-300 ease-in-out`}
                onClick={() => handleTabClick(1)}
              >
                Application
              </Tab>
            </TabList>

            {/* {activeTab === 0 && <div>Overview Content</div>}
      {activeTab === 1 && <div>Application Content</div>} */}
          </div>

          <TabPanel>
            <div className="bg-gray-50 shadow-lg">
              <div className="overview-content p-4 divide-y-2 leading-7 space-y-5">
                {/* Job description */}
                <div>
                  <h1 className="text-lg text-gray-600 font-bold ">
                    Description
                  </h1>
                  <p className="text-gray-500">{formData?.jobDescriptions}</p>
                </div>
                {/* Benefits */}
                <div>
                  <h1 className="text-lg text-gray-600 font-bold">Benefits</h1>
                  <p className="text-gray-500 ">{formData?.benefits}</p>
                </div>

                <div>
                  {formData && formData.responsibilities && (
                    <div>
                      {/* Job requirements */}
                      <h3 className="text-lg font-semibold mt-4">
                        Requirements:
                      </h3>
                      <ul className="list-disc list-inside">
                        {formData.requirements
                          .split(".")
                          .map((requirement, index) => (
                            <li key={index} className="mb-1">
                              {requirement.trim() && `${requirement.trim()}.`}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  {formData && formData.responsibilities && (
                    <div>
                      {/* Job responsibilities */}
                      <h3 className="text-lg font-semibold mt-4">
                        Responsibilities:
                      </h3>
                      <ul className="list-disc list-inside">
                        {formData.responsibilities
                          .split(".")
                          .map((responsibilityPart, index) => (
                            <li key={index} className="mb-1">
                              {responsibilityPart.trim() &&
                                `${responsibilityPart.trim()}.`}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* Apply button */}
              <button className="bg-green-500 px-8 py-1 rounded-md font-semibold text-white w-full mt-6">
                Apply for the post
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            {/* <FormNew></FormNew> */}
            <UpdateForm
              jobPosterEmail={jobPosterEmail}
              jobTitle={jobTitle}
              jobId={jobId}
            ></UpdateForm>
          </TabPanel>
        </Tabs>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bg-gray-200 inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white md:w-1/2 lg:3/4 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
              {/* Modal title */}
              <h2 className="text-2xl font-bold">Share this job</h2>
              {/* Close modal button */}
              <button onClick={closeModal} className="text-gray-500">
                <RiCloseLine className="text-lg" />
              </button>
            </div>
            {/* Add your share options/content here */}
            <div className="text-gray-700 mt-4">
              {/* Modal body */}
              <SocialLink />
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-[#d73939] text-white px-4 py-2 rounded-md hover:bg-[#4f0000] focus:outline-none"
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
