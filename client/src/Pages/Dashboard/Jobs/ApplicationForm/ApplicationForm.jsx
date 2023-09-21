import React, { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ApplicationForm = () => {
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="pt-56">
      <div className="bg-[#fff6df] rounded-md border-2 border-[#ffe6ae] px-4 py-4">
        <p className="font-medium tex-xs ">
          STATUS: This job cannot be published on job boards, as it doesn’t meet
          all the job boards’ requirements.{" "}
          <span className="font-normal">
            To post your job in job boards, double check the following:
          </span>{" "}
        </p>
        <p className="text-sm font-medium pt-4">Account-related warnings</p>
        <li className="px-2">
          Your <span className="underline">email address</span> must match your
          company's website domain, or appear on the contact page
        </li>
      </div>
      <div className="pt-6">
        <div className="flex items-center justify-between">
          <h6 className="font-semibold text-second">
            CUSTOMIZE YOUR APPLICATION FORM
          </h6>
          <button className="border-cyan-500 border px-4 py-1 rounded-md hover:border-cyan-800 text-second hover:text-swift">
            View desktop mode
          </button>
        </div>
        {/* Personal information */}
        <div className="flex gap-9 w-11/12 mx-auto pt-10">
          <div className="w-2/3">
            <div>
              <h2 className="text-second mb-6 text-xl font-medium">
                Personal information
              </h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-second font-medium">Name</p>
                  <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                    Mandatory
                  </button>
                </div>
                {/* Heading */}
                <div className="flex items-center justify-between">
                  <p className="text-second font-medium">Headline</p>
                  <div className="space-x-2">
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Mandatory
                    </button>
                    <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                      Optional
                    </button>
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Off
                    </button>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center justify-between">
                  <p className="text-second font-medium">Phone</p>
                  <div className="space-x-2">
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Mandatory
                    </button>
                    <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                      Optional
                    </button>
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Off
                    </button>
                  </div>
                </div>
                {/* Address */}

                <div className="flex items-center justify-between">
                  <p className="text-second font-medium">Address</p>
                  <div className="space-x-2">
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Mandatory
                    </button>
                    <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                      Optional
                    </button>
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Off
                    </button>
                  </div>
                </div>
                {/* Photo */}
                <div className="flex items-center justify-between">
                  <p className="text-second font-medium">Photo</p>
                  <div className="space-x-2">
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Mandatory
                    </button>
                    <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                      Optional
                    </button>
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Off
                    </button>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="pt-10 pb-6 ">
                <h1 className="text-second mb-6 text-xl font-medium">
                  Details
                </h1>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-second font-medium">Photo</p>
                  <div className="space-x-2">
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Mandatory
                    </button>
                    <button className="bg-[#daf2da] px-3 py-1 rounded-full text-sm font-medium text-[#00756a]">
                      Optional
                    </button>
                    <button className="hover:bg-gray-300 px-3 py-1 rounded-full font-medium text-sm">
                      Off
                    </button>
                  </div>
                </div>

                <p className="text-second font-medium">Questions</p>
                <p className="text-gray-500 italic">No questions added</p>
                <div className="py-9 flex items-center gap-1">
                  <div className="bg-cyan-500 p-1 rounded-full">
                    <FaPlus className="" color="white" size={9} />
                  </div>
                  <p className="hover:underline text-second font-semibold">
                    Add a question
                  </p>
                  <p className="text-second ">or</p>
                  <p className="hover:underline text-second font-semibold">
                    Use requirements as questions
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold text-second text-center">
              Team code
            </h2>
            <div className="border border-cyan-700 rounded-md w-3/4 px-4 py-3 mx-auto">
              <div className="flex gap-2 items-center py-2">
                <BsLightningChargeFill className="w-5 h-5" />
                <strong className="uppercase text-base">
                  Autofill application
                </strong>
              </div>
              <p className="text-gray-500 text-start">
                Save time by importing your resume in one of the following
                formats: .pdf, .doc, .docx, .odt, or .rtf.
              </p>
              <button className="bg-cyan-600 px-5 py-2 rounded-lg  text-white font-medium mt-5">
                Import resume from
              </button>
            </div>
            {/* Require Fileds */}
            <div className="w-3/4 mx-auto py-7 text-start">
              <p className="text-sm ">
                <span className="text-red-500 mr-2">*</span>Require Fields
              </p>
              <h3 className="text-2xl font-semibold py-5">
                Personal Information
              </h3>
              <div className="space-y-7">
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    <span className="text-red-500 mr-2">*</span>First Name
                  </p>
                  <input
                    type="text"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    <span className="text-red-500 mr-2">*</span>Second Name
                  </p>
                  <input
                    type="text"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    <span className="text-red-500 mr-2">*</span>Email
                  </p>
                  <input
                    type="email"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    Heading <span className="text-gray-500">(optional)</span>
                  </p>
                  <input
                    type="text"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    Phone <span className="text-gray-500">(optional)</span>
                  </p>
                  <input
                    type="number"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit ipsum dolor sit ipsum dolor sit amet
                    consectetur adipisicing elit. Illo, modi!
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    Address <span className="text-gray-500">(optional)</span>
                  </p>
                  <input
                    type="text"
                    className="w-full rounded-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-second">
                    Address <span className="text-gray-500">(optional)</span>
                  </p>
                  <input
                    type="file"
                    className="w-full rounded-lg border border-cyan-500 px-2 py-1"
                    name=""
                    id=""
                  />
                </div>
              </div>
              {/* Profile Secton */}
              <div className="space-y-7 pt-9">
                <h3 className="text-2xl font-semibold py-5">Profile</h3>
                <div className="space-y-2 flex justify-between items-center">
                  <p className="text-second">
                    Education <span className="text-gray-500">(optional)</span>
                  </p>
                  <button className="border border-cyan-700 px-5 py-1 rounded-lg">
                    Add
                  </button>
                </div>
                <div className="space-y-2 flex justify-between items-center">
                  <p className="text-second">
                    Experience <span className="text-gray-500">(optional)</span>
                  </p>
                  <button className="border border-cyan-700 px-5 py-1 rounded-lg">
                    Add
                  </button>
                </div>
                <div className="space-y-2 ">
                  <p className="text-second">
                    Summery <span className="text-gray-500">(optional)</span>
                  </p>
                  <textarea className="w-full h-32 p-3  focus:outline-none border border-cyan-700 focus:shadow-outline hover:bg-gray-100 rounded"></textarea>
                </div>
                <div>
                  <p className="text-second">
                    Resume <span className="text-gray-500">(optional)</span>
                  </p>
                  <input
                    type="file"
                    className="px-2 py-1 border border-cyan-700 w-full rounded-md"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="space-y-7 pt-9">
                <h3 className="text-2xl font-semibold py-5">Details</h3>

                <div className="space-y-2 pb-7">
                  <p className="text-second">
                    Cover Letter{" "}
                    <span className="text-gray-500">(optional)</span>
                  </p>
                  <textarea className="w-full h-32 p-3  focus:outline-none border border-cyan-700 focus:shadow-outline hover:bg-gray-100 rounded"></textarea>
                </div>
                <button className="mx-auto w-full font-semibold py-2 rounded-lg hover:bg-cyan-600 bg-cyan-500">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="py-10 w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Right Side */}
          <div className="flex items-center gap-7">
            <button className="font-semibold text-white bg-cyan-500 hover:bg-cyan-800 px-5 py-2 rounded-lg">
              {isDefaultChecked ? "Update and set defaults" : "Update"}
            </button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => setIsDefaultChecked(!isDefaultChecked)}
              />
              <p className="text-semibold text-second">
                Keep this setup for my future jobs
                <span className="text-sm text-gray-500">
                  (not including custom questions)
                </span>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className=" flex  items-center">
            <button className="border-cyan-500 border px-4 py-1 rounded-l-md hover:border-cyan-800 text-second hover:text-swift">
              Archive Job
            </button>
            <div
              onClick={toggleDropdown}
              className="border border-cyan-500 rounded-r-md"
            >
              {isDropdownOpen ? (
                <IoMdArrowDropup className="w-8 h-8 cursor-pointer" />
              ) : (
                <IoMdArrowDropdown className="w-8 h-8 cursor-pointer" />
              )}
              {isDropdownOpen && (
                <div className="absolute right-20 -mt-56 border border-cyan-500 bg-white rounded-md shadow-lg">
                  {/* Your dropdown content goes here */}
                  <div className="space-y-5 py-3">
                    <div className="cursor-pointer px-4 hover:bg-green-100">
                      <h6 className="font-medium ">Archive</h6>
                      <p className="text-second">
                        Archived jobs can be unarchived for use <br /> in the
                        future.
                      </p>
                    </div>
                    <div className="cursor-pointer px-4 hover:bg-green-100">
                      <h6 className="font-medium ">Delete</h6>
                      <p className="text-second">
                        Deleting a job is permanent and cannot be <br /> undone.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
