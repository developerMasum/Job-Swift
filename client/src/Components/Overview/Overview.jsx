import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { RiCloseLine, RiShareForwardLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { authContext } from "../../Auth/AuthProvider";
import UpdateForm from "../New/UpdateForm";

// import UpdateForm from "../New/UpdateForm";
// application a hr mail ashbe . 

const Overview = () => {
  const formData = useLoaderData()
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
  localStorage.setItem('URL', currentPath)
  return (
    <div className="container">
      <div className="border-[1px]">
        <div className="border-b-[1px]  bg-green-100">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Job Preview: {formData?.jobTitle}
          </h1>
        </div>

        <div className="flex justify-between items-center bg-[#F5F5F5] border-b-[1px] shadow-md rounded-md p-4">
          <div className="p-4">
            <h1 className="font-bold text-3xl text-[#00756a] mb-2">
              {user?.displayName}
            </h1>
            <h1 className="text-xl font-semibold mb-4">{formData?.jobTitle}</h1>
            <div className="flex text-gray-600">
              <h2 className="mr-2">{formData?.jobLocation}</h2>
              <h2 className="text-[#707070]">• {formData?.employmentType}</h2>
            </div>
          </div>
          <button className="flex items-center text-[#00756a] hover:text-[#004f46]">
            <RiShareForwardLine className="text-2xl mr-1" />
            <span className="font-semibold">Share Jobs</span>
          </button>
        </div>
      </div>
      <div className=" my-6 mx-auto max-w-4xl">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Application</Tab>
          </TabList>
          <TabPanel>
            <div className="bg-gray-50 shadow-lg">
              <div className="overview-content p-4 divide-y-2 leading-7 space-y-5">
                <div>
                  <h1 className="text-lg text-gray-600 font-bold ">
                    Description
                  </h1>
                  <p className="text-gray-500">{formData?.jobDescriptions}</p>
                </div>
                <div>
                  <h1 className="text-lg text-gray-600 font-bold">Benefits</h1>
                  <p className="text-gray-500 ">{formData?.benefits}</p>
                </div>

                <div>
                  {formData && formData.responsibilities && (
                    <div>
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
              <button className="bg-green-500 px-8 py-1 rounded-md font-semibold text-white w-full mt-6">
                Apply for the post
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            {/* <FormNew></FormNew> */}
            <UpdateForm jobPosterEmail={jobPosterEmail} jobTitle={jobTitle} jobId={jobId} ></UpdateForm>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Overview;
