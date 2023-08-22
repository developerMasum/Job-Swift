import React, { useContext, useState } from "react";
import { RiCloseLine, RiShareForwardLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { authContext } from "../../../Auth/AuthProvider";
import "./CustomModal.css";

const CustomModal = ({ data, showPop, setShowPop }) => {
  const { user, logout } = useContext(authContext);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={`modalBackground ${showPop ? "visible" : "hidden"}`}>
      <div className="modalContainer p-6 rounded-lg shadow-md scroll-m-1 bg-white">
        <button
          onClick={() => setShowPop(false)}
          className="absolute top-10 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <RiCloseLine />
        </button>
        <div>
          <div className="border-b-[1px]  bg-white">
            <h1 className="text-2xl font-semibold mb-4">
              Job Preview: {data?.jobTitle}
            </h1>
          </div>
          <div className="mb-4 flex justify-between items-center border-b-[1px] shadow-md rounded-md p-4">
            <div className="p-4">
              <h1 className="font-bold text-2xl text-[#00756a]">
                {user?.displayName}
              </h1>
              <h1 className="text-lg font-semibold my-4">{data?.jobTitle}</h1>
              <div className="flex text-gray-500">
                <h2 className="text-gray-600">{data?.jobLocation}</h2>
                <h2>.{data?.employmentType}</h2>
              </div>
            </div>
            <button className="text-[#00756a] hover:text-[#004f46] flex items-center cursor-pointer">
              <RiShareForwardLine className="text-xl mr-1" /> Share Job
            </button>
          </div>

         <div className="shadow-lg my-6">
         <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Application</Tab>
            </TabList>
            <TabPanel>
              <div className="">
                <div className="overview-content p-4 divide-y-2 leading-7 space-y-5">
                  <div>
                  <h1 className="text-lg text-gray-600 font-bold ">Description</h1>
                  <p className="text-gray-500">{data?.jobDescriptions}</p>
                  </div>
                  <div>
                  <h1 className="text-lg text-gray-600 font-bold">Requirements</h1>
                  <p className="text-gray-500">{data?.requirements}</p>
                  </div>
                  <div>
                  <h1 className="text-lg text-gray-600 font-bold">Benefits</h1>
                  <p className="text-gray-500 ">{data?.benefits}</p>
                  </div>
                  <button className="bg-[#00756a] px-8 py-1 rounded-md font-semibold text-white w-full mt-6">Apply for the post</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="">hello</div>
            </TabPanel>
          </Tabs>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;


