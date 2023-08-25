import React, { useState } from "react";
import { FaPaperPlane, FaPlaneDeparture } from "react-icons/fa";
import files from "../../assets/Image/files.png";

const OnboardingTab = () => {
  const [activeTab, setActiveTab] = useState("tabs1");

  return (
    <div className="pt-8">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="md:text-3xl text-xl ">People directory</h3>
          <button className="flex bg-[#c7f0f1] px-2 py-1 rounded-full gap-2 items-center">
            <FaPaperPlane color="107191" size={12} />
            <span className="text-[#107191] text-xs font-bold">BETA</span>
          </button>
        </div>
        <p className="text-start text-secondary">
          Track the progress of all workflows in the company
        </p>
      </div>
      {/* Body */}
      <div>
        <div className="pt-12 text-start">
          <button
            style={{
              borderBottom: activeTab === "tabs1" ? "2px solid gray" : "none",
              color: activeTab === "tabs1" ? "black" : "grey",
            }}
            className="text-xs pb-2 font-medium"
            onClick={() => {
              setActiveTab("tabs1");
            }}
          >
            PENDING 0
          </button>
          <button
            className="text-xs ml-7 pb-2 font-medium"
            style={{
              borderBottom: activeTab === "tabs2" ? "2px solid gray" : "none",
              color: activeTab === "tabs2" ? "black" : "grey",
            }}
            onClick={() => {
              setActiveTab("tabs2");
            }}
          >
            SCHEDULED 0
          </button>
          <button
            className="text-xs ml-7 pb-2 font-medium"
            style={{
              borderBottom: activeTab === "tabs3" ? "2px solid gray" : "none",
              color: activeTab === "tabs3" ? "black" : "grey",
            }}
            onClick={() => {
              setActiveTab("tabs3");
            }}
          >
            IN PROGRESS 0
          </button>
          <button
            className="text-xs ml-7 pb-2 font-medium"
            style={{
              borderBottom: activeTab === "tabs4" ? "2px solid gray" : "none",
              color: activeTab === "tabs4" ? "black" : "grey",
            }}
            onClick={() => {
              setActiveTab("tabs4");
            }}
          >
            COMPLETED 0
          </button>
          <button
            className="text-xs ml-7 pb-2 font-medium"
            style={{
              borderBottom: activeTab === "tabs5" ? "2px solid gray" : "none",
              color: activeTab === "tabs5" ? "black" : "grey",
            }}
            onClick={() => {
              setActiveTab("tabs5");
            }}
          >
            INCOMPLETED 0
          </button>
        </div>
        <div className="pt-7 text-center">
          {activeTab === "tabs1" && (
            <div className="space-y-2 text-center">
              <img className="text-center mx-auto" src={files} alt="" />
              <h5 className="font-medium text-xl">
                Assign onboarding to new employees
              </h5>
              <p className="text-sm text-secondary ">
                New hires who have not yet been assigned{" "}
                <span className="font-medium hover:underline">
                  onboarding workflows
                </span>{" "}
                will appear in 'Pending'.
              </p>
            </div>
          )}
          {activeTab === "tabs2" && (
            <div className="space-y-2 text-center">
              <img className="text-center mx-auto" src={files} alt="" />
              <h5 className="font-medium text-xl">
                Assign onboarding to new employees
              </h5>
              <p className=" text-sm text-secondary ">
                Employees who have been assigned{" "}
                <span className="font-medium hover:underline">
                  onboarding workflows
                </span>{" "}
                will appear in ‘Scheduled’ before their onboarding starts.
              </p>
            </div>
          )}
          {activeTab === "tabs3" && (
            <div className="space-y-2 text-center">
              <img className="text-center mx-auto" src={files} alt="" />
              <h5 className="font-medium text-xl">
                See employee onboarding in progress
              </h5>
              <p className=" text-sm text-secondary ">
                New hires who have started an
                <span className="font-medium hover:underline">
                  onboarding workflows
                </span>{" "}
                will appear in ‘In Progress’.
              </p>
            </div>
          )}
          {activeTab === "tabs4" && (
            <div className="space-y-2 text-center">
              <img className="text-center mx-auto" src={files} alt="" />
              <h5 className="font-medium text-xl">
                Review completed onboarding
              </h5>
              <p className=" text-sm text-secondary ">
                Employees who have finished their onboarding will appear in
                ‘Complete’.
              </p>
            </div>
          )}
          {activeTab === "tabs5" && (
            <div className="space-y-2 text-center">
              <img className="text-center mx-auto" src={files} alt="" />
              <h5 className="font-medium text-xl">
                Review incomplete onboarding
              </h5>
              <p className=" text-sm text-secondary ">
                Employees who didn’t finish their onboarding and are past their
                start date will appear in ‘Incomplete’.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingTab;
