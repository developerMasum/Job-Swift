import React, { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useParams } from "react-router-dom";
const JobsDetails = () => {
  const {id} = useParams()
  console.log('from details',id);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

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
      {jobs.map((job) => (
        <div key={job._id}>
          <div>
            <h4 className="pt-8 font-semibold text-xl">
              Job title and Department details
            </h4>
            <div className="pt-9 px-2 space-y-2">
              <p>
                <span className="text-red-500">*</span>Job title
              </p>
              <input
                type="text"
                defaultValue={job?.jobTitle}
                className="w-full outline-gray-500 rounded-md  "
              />
              <p className="text-xs font-medium text-gray-500">
                78 characters left. No special characters.
              </p>
            </div>
            {/* deperment */}
            <div className="flex gap-14 mt-6 px-2">
              <div>
                <h6 className="font-medium text-second">Department</h6>
                <p className="text-gray-700 text-sm">
                  No department available yet. <br /> Start creating
                </p>
              </div>
              <div className="space-y-2">
                <p>Internal Code</p>
                <input
                  type="text"
                  name=""
                  className="py-1  outline-gray-500 rounded-md"
                  id=""
                />
              </div>
            </div>
            {/* Location */}
            <div className="mt-12 px-2">
              <h3 className="font-medium text-xl pb-7">Location</h3>
              <div className="border border-cyan-600 px-5 rounded-md  py-1 flex gap-2 items-center">
                <HiOutlineLightBulb className="w-5 h-5" />
                Candidates are 140% more likely to apply when you include a
                city. Location is also required for some job boards.
              </div>
              <p className="pt-5 pb-2">
                <span className="text-red-500">*</span>Job Location
              </p>
              <input
                type="text"
                defaultValue={job?.jobLocation}
                className="w-full outline-gray-500 rounded-md  "
              />
            </div>
            {/* Description */}
            <div className="mt-12 px-2">
              <h3 className="font-medium text-xl pb-7">Description</h3>
              <p className="text-sm font-semibold mb-5">
                {" "}
                <span className="text-red-500">*</span> About the role
              </p>
              <div className="px-6 border border-cyan-500 rounded-lg pt-5 pb-32">
                <p className="font-semibold pb-5">Description</p>
                {/* <input type="text" name="" defaultValue={job?.jobDescriptions} className="border-none focus:border-none   text-second" id="" /> */}
                <p>{job?.jobDescriptions}</p>
                <p className="font-semibold pt-6 pb-2">Description</p>
                <p>{job?.responsibilities}</p>
                <p className="font-semibold pt-6 pb-2">Requirements</p>
                <p>{job?.requirements}</p>
                <p className="font-semibold pt-6 pb-2">Benefits</p>
                <p>{job?.benefits}</p>
                {/* sallery */}
                <div className="pt-7">
                  <p className="font-semibold  pb-6">Annual salary</p>
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <p>From</p>
                      <input
                        type="number"
                        name=""
                        defaultValue={job?.salaryFrom}
                        id=""
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <p>To</p>
                      <input
                        type="number"
                        name=""
                        defaultValue={job?.salaryTo}
                        id=""
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <p>Currency</p>
                      <p className="rounded-md border border-gray-500 px-5 py-2">
                        {job?.salaryCurrency}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br /> <br />
    </div>
  );
};

export default JobsDetails;
