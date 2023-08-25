import React, { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Agenda = () => {
  const [activeTab, setActiveTab] = useState("tabs1");
  const [isOpenType, setIsOpenType] = useState(true);
  const [isOpenJob, setIsOpenJob] = useState(true);
  const [isOpenAttendees, setIsOpenAttendees] = useState(true);
  const [showText, setShowText] = useState(false);
  return (
    <div className="bg-[#f2f4f6] max-h-max">
      <div className="pt-20 md:flex gap-10  px-10 md:px-5 ">
        <div className="md:w-1/4 w-full">
          <h2 className="font-semibold py-3">FILTERS</h2>
          <div
            className="	px-6 py-7 bg-white rounded-md"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                FILTER BY TYPE
              </p>
              <button onClick={() => setIsOpenType(!isOpenType)}>
                {isOpenType ? (
                  <IoIosArrowDown
                    color="gray"
                    className="text-base font-semibold"
                  />
                ) : (
                  <IoIosArrowUp
                    color="gray"
                    className="text-base font-semibold"
                  />
                )}
              </button>
            </div>
            {isOpenType && (
              <div className="space-y-2 pt-3">
                <div>
                  <input type="checkbox" name="" id="call1" /> <span>Call</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="call2" />{" "}
                  <span>Interview</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="call3" />{" "}
                  <span>Meeting</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="call4" />{" "}
                  <span>Internal Meeting</span>
                </div>
              </div>
            )}
            <hr className="my-5" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-500">
                FILTER BY JOB
              </p>
              <button onClick={() => setIsOpenJob(!isOpenJob)}>
                {isOpenJob ? (
                  <IoIosArrowDown
                    color="gray"
                    className="text-base font-semibold"
                  />
                ) : (
                  <IoIosArrowUp
                    color="gray"
                    className="text-base font-semibold"
                  />
                )}
              </button>
            </div>
            {isOpenJob && <div className="space-y-2 pt-5"></div>}
            <hr className="my-5" />

            {showText && (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    FILTER BY ATTENDEES
                  </p>
                  <button onClick={() => setIsOpenAttendees(!isOpenAttendees)}>
                    {isOpenAttendees ? (
                      <IoIosArrowDown
                        color="gray"
                        className="text-base font-semibold"
                      />
                    ) : (
                      <IoIosArrowUp
                        color="gray"
                        className="text-base font-semibold"
                      />
                    )}
                  </button>
                </div>
                {isOpenAttendees && <div className="space-y-2 pt-5"></div>}
              </div>
            )}
          </div>
        </div>

        {/*  */}
        <div className="md:w-3/4 w-full">
          <h2 className="py-3 font-semibold">AGENDA</h2>
          <div
            className="bg-white px-6 py-8 rounded-md"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
          >
            <div className="">
              <button
                style={{
                  borderBottom:
                    activeTab === "tabs1" ? "2px solid gray" : "none",
                  color: activeTab === "tabs1" ? "black" : "grey",
                }}
                className="text-sm pb-2 font-medium"
                onClick={() => {
                  setActiveTab("tabs1");
                  setShowText(!true);
                }}
              >
                MY AGENDA
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
                  setShowText(true);
                }}
              >
                TEAM AGENDA
              </button>
              <hr />
            </div>

            <div className="pt-7 text-center">
              {activeTab === "tabs1" && (
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-500">
                    No events scheduled
                  </h5>
                  <p className=" text-gray-500 text-sm">
                    Use your agenda to keep track of the events you’re
                    attending.
                  </p>
                </div>
              )}

              {activeTab === "tabs2" && (
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-500">
                    No team events scheduled
                  </h5>
                  <p className=" text-gray-500 text-sm">
                    Use the team agenda to keep track of team interviews and
                    calls.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
