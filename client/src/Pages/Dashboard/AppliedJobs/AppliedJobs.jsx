import React, { useEffect, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineEdit,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { toast } from "react-hot-toast";
import { renderAppliedTabs } from "../../../Components/Dashboard/AppliedJobs/renderAppliedTabs";
import useAppliedJobs from "../../../Components/Dashboard/AppliedJobs/AppliedComponents/useAppliedJobs";
const AppliedJobs = () => {
  const { id } = useParams();

  const [appliedJobs] = useAppliedJobs();
  const jobs = appliedJobs.find((job) => job._id === id);
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tabs1");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    if (!isToggled) {
      toast.error("No Content Upload Please Wait For content");
    }
    setIsToggled(!isToggled);
  };
  const getActiveTabLabel = () => {
    const tab = tabsData.find((t) => t.id === activeTab);
    return tab ? tab.label : "Select Tab";
  };
  const tabsData = [
    { id: "tabs1", label: "All" },
    { id: "tabs2", label: "Sourced" },
    { id: "tabs3", label: "Applied" },
    { id: "tabs4", label: "Phone Screen" },
    { id: "tabs5", label: "Assessment" },
    { id: "tabs6", label: "Interview" },
    { id: "tabs7", label: "Offer" },
    { id: "tabs8", label: "Hired" },
  ];
  return (
    <section className="pt-16 bg-white px-5 md:px-0">
      <div className=" font-semibold bg-[#c7f0f1] p-2 text-center text-sm">
        <div className="flex justify-between">
          <div></div>
          <div className="flex justify-center gap-2 items-center">
            <FaPaperPlane color="#107191" size={12} />
            <h5 className="text-[#107191]">BETA FEATURE</h5>
            <BsFillQuestionCircleFill color="#107191" />
          </div>
          <Link>
            {" "}
            <p className="font-thin text-[#636d77] underline">
              Use the old view
            </p>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center md:gap-4">
              <div className="flex items-center ">
                <p className="text-xl md:text-3xl  font-[500] text-secondary">
                  {jobs?.jobTitle}
                </p>
                <button className="" onClick={handleButtonClick}>
                  {isToggled ? (
                    <MdKeyboardArrowUp color="gray" size={22} />
                  ) : (
                    <MdKeyboardArrowDown color="gray" size={22} />
                  )}
                </button>
              </div>
              <MdOutlineEdit color="#00756a" size={19} fontWeight={700} />
            </div>
            <p className="text-base pt-2 text-gray-500">{jobs?.jobLocation}</p>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:bg-gray-200 px-5 py-2 rounded-md"
          >
            <button className="text-secondary font-semibold hover:text-[#00756a] px-2">
              Add candidates
            </button>
            {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        </div>
        <div className="flex justify-end">
          {isOpen && (
            <div className="absolute w-58 space-y-4 rounded-lg  shadow-lg bg-white">
              <div className="hover:bg-yellow-500 px-3 py-1">
                <h5 className="font-semibold text-xl  rounded-lg ">
                  Add resume
                </h5>
                <p className="text-sm text-secondary">
                  Add candidate with resume
                </p>
              </div>
              <div className="hover:bg-yellow-500 px-3 py-1">
                <h5 className="font-semibold text-xl  rounded-lg ">
                  Add manually
                </h5>
                <p className="text-sm text-secondary">
                  Enter candidate name and details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pt-10">
        <div
          className="bg-white rounded-md hidden md:block"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.9) 0px 0px 0px 5px inset",
          }}
        >
          <div className="flex justify-between">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                style={{
                  borderBottom:
                    activeTab === tab.id ? "2px solid gray" : "none",
                }}
                className={
                  activeTab === tab.id
                    ? "bg-gray-700 rounded px-4 py-1 text-white"
                    : "text-sm text-grey px-4 py-1"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
        </div>

        {/* small device */}

        <div
          className="bg-white rounded-md"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.9) 0px 0px 0px 5px inset",
          }}
        >
          <div className="flex justify-between font-semibold md:hidden">
            <div
              className="flex justify-between w-full cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <button>{getActiveTabLabel()}</button>
              {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>

            {isDropdownOpen && (
              <div className="absolute  bg-white border mt-7 rounded-md w-full">
                {tabsData
                  .filter((tab) => tab.id !== activeTab)
                  .map((tab) => (
                    <div key={tab.id}>
                      <button
                        style={{
                          borderBottom:
                            activeTab === tab.id ? "2px solid gray" : "none",
                        }}
                        className={
                          activeTab === tab.id
                            ? "bg-gray-700  rounded px-4 py-1 text-white block w-full text-left"
                            : "font-semibold hover:bg-yellow-100 rounded-md text-grey px-4 py-1 block w-full text-left"
                        }
                        onClick={() => {
                          setActiveTab(tab.id);
                          setDropdownOpen(false);
                        }}
                      >
                        {tab.label}
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">{renderAppliedTabs(activeTab)}</div>
    </section>
  );
};

export default AppliedJobs;
