import React, { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Tips from "../../../../Components/Dashboard/PostJob/Tips";
import { useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import Swal from "sweetalert2";
import {
  companyTypes,
  functions,
  employmentTypes,
  experienceLevels,
  educationOptions,
  keywordOptions,
  currencies,
} from "../../../../Components/Dashboard/UtilsJobPost/data";

const EditJobs = () => {
  const { id } = useParams();

  const data = useLoaderData();
  const navigate = useNavigate();
  // console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      id: data._id,
      benefits: data.benefits,
      experience: data.experience,
      employmentType: data.employmentType,
      requirements: data.requirements,
      jobTitle: data.jobTitle,
      jobLocation: data.jobLocation,
      jobDescriptions: data.jobDescriptions,
      salaryTo: data.salaryTo,
      salaryFrom: data.salaryFrom,
      salaryCurrency: data.salaryCurrency,
      responsibilities: data.responsibilities,
    };
    // console.log(postData);
    // const id = data._id;

    const response = await fetch(` https://server-job-swift.vercel.app/all-post/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      navigate("/dashboard/jobs");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Jobs has been update",
        showConfirmButton: false,
        timer: 500,
      });
    }
  };
  return (
    <div className="pt-20">
      <div className="md:flex justify-between items-center my-10">
        <div className=" w-full md:w-9/12 rounded-lg border-[1px]">
          <div className="bg-gray-50 p-4">
            <h1 className="text-lg text-gray-500 font-bold">
              Job title and Department details
            </h1>
          </div>
          <div>
            <div className=" w-full mx-auto p-4 bg-white rounded-lg border-[1px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h3 className="text-lg  text-gray-500 font-semibold mb-2">
                    Job Title <FiAlertCircle className="inline text-red-500" />
                  </h3>
                  <input
                    type="text"
                    name="jobTitle"
                    defaultValue={data?.jobTitle}
                    {...register("jobTitle", {
                      required: "Job title is required",
                    })}
                    className={`w-full px-4 py-2 border rounded ${
                      errors.jobTitle ? "border-red-500" : ""
                    }`}
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500" role="alert">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2  text-gray-500">
                    Location <FiAlertCircle className="inline text-red-500" />
                  </h3>
                  <p className="text-sm text-gray-400">
                    Candidates are 140% more likely to apply when you include a
                    city. Location is also required for some job boards.
                  </p>
                  <label
                    htmlFor="jobLocation"
                    className="block  text-gray-500 font-semibold mb-1"
                  >
                    Job Location
                  </label>
                  <input
                    type="text"
                    name="jobLocation"
                    defaultValue={data?.jobLocation}
                    placeholder="Example: Baddha uttor, Dhaka-1200"
                    {...register("jobLocation", {
                      required: "Job location is required",
                    })}
                    className={`w-full px-4 py-2 border rounded ${
                      errors.jobLocation ? "border-red-500" : ""
                    }`}
                  />
                  <p className=" text-gray-400">
                    Include the city for office-based or hybrid jobs. Fully
                    remote jobs need at least a country.
                  </p>
                  {errors.jobLocation && (
                    <p className="text-red-500" role="alert">
                      {errors.jobLocation.message}
                    </p>
                  )}
                </div>

                {/* description */}
                <div className="mb-4">
                  <h3 className="text-lg text-gray-500 font-semibold mb-2 flex items-center">
                    Description
                    <FiAlertCircle className="ml-2 text-red-500" />
                  </h3>
                  <div className="mb-2">
                    <h4 className="text-md text-gray-500 font-semibold mb-1">
                      Job Descriptions
                    </h4>
                    <textarea
                      name="jobDescriptions"
                      defaultValue={data?.jobDescriptions}
                      {...register("jobDescriptions", {
                        required: "Job descriptions are required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.jobDescriptions ? "border-red-500" : ""
                      }`}
                      rows={4}
                    />
                    {errors.jobDescriptions && (
                      <p className="text-red-500" role="alert">
                        {errors.jobDescriptions.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <h4 className="text-md text-gray-500 font-semibold mb-1">
                      Requirements
                    </h4>
                    <textarea
                      name="requirements"
                      defaultValue={data?.requirements}
                      {...register("requirements", {
                        required: "Requirements are required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.requirements ? "border-red-500" : ""
                      }`}
                      rows={4}
                    />
                    {errors.requirements && (
                      <p className="text-red-500" role="alert">
                        {errors.requirements.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <h4 className="text-md text-gray-500 font-semibold mb-1">
                      Responsibilities
                    </h4>
                    <textarea
                      name=" responsibilities"
                      defaultValue={data?.responsibilities}
                      {...register("responsibilities", {
                        required: "Requirements are required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.responsibilities ? "border-red-500" : ""
                      }`}
                      rows={4}
                    />
                    {errors.responsibilities && (
                      <p className="text-red-500" role="alert">
                        {errors.responsibilities.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <h4 className="text-md text-gray-500 font-semibold mb-1">
                      Benefits
                    </h4>
                    <textarea
                      name="benefits"
                      defaultValue={data?.benefits}
                      {...register("benefits", {
                        required: "Benefits are required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.benefits ? "border-red-500" : ""
                      }`}
                      rows={4}
                    />
                    {errors.benefits && (
                      <p className="text-red-500" role="alert">
                        {errors.benefits.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-2 text-gray-900">
                  <h3 className="text-lg text-gray-500 font-bold">
                    Company industry and Job function
                  </h3>
                </div>

                {/* start  */}

                <div className="md:flex justify-between gap-3 my-2 text-gray-700">
                  <div className="mb-4 w-full">
                    <h3 className="text-md text-gray-500 font-semibold mb-2 flex items-center">
                      Company type
                      <FiAlertCircle className="ml-2 text-red-500" />
                    </h3>
                    <select
                      name="employmentType"
                      {...register("employmentType", {
                        required: "Employment type is required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.employmentType ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select.....</option>
                      {companyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.employmentType && (
                      <p className="text-red-500" role="alert">
                        {errors.employmentType.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <h3 className="text-md text-gray-500 font-semibold mb-2 flex items-center">
                      Job function
                      <FiAlertCircle className="ml-2 text-red-500" />
                    </h3>
                    <select
                      name="experience"
                      {...register("experience", {
                        required: "Experience level is required",
                      })}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.experience ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select....</option>
                      {functions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p className="text-red-500" role="alert">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-2 text-gray-900">
                  <h3 className="text-lg text-gray-500 font-bold">
                    Employment Details
                  </h3>
                </div>

                {/* start here  */}

                <div className=" text-gray-700">
                  <div className="md:flex justify-between gap-3 my-2">
                    <div className="mb-4 w-full">
                      <h3 className="text-lg text-gray-500 font-semibold mb-2 flex items-center ">
                        Employment Type
                        <FiAlertCircle className="ml-2 text-red-500" />
                      </h3>
                      <select
                        name="employmentType"
                        {...register("employmentType", {
                          required: "Employment type is required",
                        })}
                        className={`w-full px-4 py-2 border rounded ${
                          errors.employmentType ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select.....</option>
                        {employmentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.employmentType && (
                        <p className="text-red-500" role="alert">
                          {errors.employmentType.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-4 w-full">
                      <h3 className="text-md text-gray-500 font-semibold mb-2 flex items-center">
                        Experience
                        <FiAlertCircle className="ml-2 text-red-500" />
                      </h3>
                      <select
                        name="experience"
                        {...register("experience", {
                          required: "Experience level is required",
                        })}
                        className={`w-full px-4 py-2 border rounded ${
                          errors.experience ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select....</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                      {errors.experience && (
                        <p className="text-red-500" role="alert">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="md:flex justify-between gap-3 my-2">
                    <div className="mb-4 w-full">
                      <h3 className="text-md text-gray-500 font-semibold mb-2 flex items-center">
                        Education
                        <FiAlertCircle className="ml-2 text-red-500" />
                      </h3>
                      <select
                        name="employmentType"
                        {...register("employmentType", {
                          required: "Employment type is required",
                        })}
                        className={`w-full px-4 py-2 border rounded ${
                          errors.employmentType ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select.....</option>
                        {educationOptions.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.employmentType && (
                        <p className="text-red-500" role="alert">
                          {errors.employmentType.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-4 w-full">
                      <h3 className="text-md text-gray-500 font-semibold mb-2 flex items-center">
                        keyword
                        <FiAlertCircle className="ml-2 text-red-500" />
                      </h3>
                      <select
                        name="experience"
                        {...register("experience", {
                          required: "Experience level is required",
                        })}
                        className={`w-full px-4 py-2 border rounded ${
                          errors.experience ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select....</option>
                        {keywordOptions.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                      {errors.experience && (
                        <p className="text-red-500" role="alert">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* start here  */}
                <div className="bg-gray-50 p-2 text-gray-700">
                  <h3 className="text-lg text-gray-500 font-semibold">
                    Annual salary
                  </h3>
                </div>

                {/* start currency  */}

                <div className="mb-4 flex text-gray-900">
                  <div className="w-1/3 pr-2">
                    <label
                      htmlFor="salaryFrom"
                      className="block text-md text-gray-500 font-semibold mb-1"
                    >
                      From
                    </label>
                    <input
                      type="number"
                      name="salaryFrom"
                      defaultValue={data?.salaryFrom}
                      {...register("salaryFrom")}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                  <div className="w-1/3 px-2">
                    <label
                      htmlFor="salaryTo"
                      className="block font-semibold mb-1 text-md text-gray-500"
                    >
                      To
                    </label>
                    <input
                      type="number"
                      name="salaryTo"
                      defaultValue={data?.salaryTo}
                      {...register("salaryTo")}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                  <div className="w-1/3 pl-2">
                    <label
                      htmlFor="salaryCurrency"
                      className="block font-semibold mb-1 text-md text-gray-500"
                    >
                      Currency
                    </label>
                    <select
                      name="salaryCurrency"
                      {...register("salaryCurrency", {
                        required: "Currency is required",
                      })}
                      aria-invalid={errors.salaryCurrency ? "true" : "false"}
                      className={`w-full px-4 py-2 border rounded ${
                        errors.salaryCurrency ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select currency</option>
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                    {errors.salaryCurrency && (
                      <p className="text-red-500" role="alert">
                        {errors.salaryCurrency.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="space-x-4">
                    <button
                      type="submit"
                      className="bg-[#1F7068] text-white outline-none px-4 py-1 rounded-md text-[20px] font-medium"
                    >
                      Save draft
                    </button>
                    <button
                      type="submit"
                      className="border-[1px] text-gray-500 border-[#1F7068] outline-none px-4 py-1 rounded-md text-[20px] font-semibold"
                    >
                      Save & continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" hidden md:block w-full md:w-1/5">
          <Tips></Tips>
        </div>
      </div>
    </div>
  );
};

export default EditJobs;
