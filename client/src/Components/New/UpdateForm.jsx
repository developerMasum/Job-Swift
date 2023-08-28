import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload, AiFillCheckCircle } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";

// for education and experience

import {
  FaTrash,
  FaUpload,
  FaPlus,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AiOutlineCloudUpload, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { createApplicationPost } from "../../redux/application/api";
// import { useForm } from "react-hook-form";

const EducationForm = ({ onSave, onCancel, initialValues }) => {
  const [school, setSchool] = useState(
    initialValues ? initialValues.school : ""
  );
  const [fieldOfStudy, setFieldOfStudy] = useState(
    initialValues ? initialValues.fieldOfStudy : ""
  );
  const [degree, setDegree] = useState(
    initialValues ? initialValues.degree : ""
  );
  const [institution, setInstitution] = useState(
    initialValues ? initialValues.institution : ""
  );
  const [startDate, setStartDate] = useState(
    initialValues ? new Date(initialValues.startDate) : null
  );
  const [endDate, setEndDate] = useState(
    initialValues ? new Date(initialValues.endDate) : null
  );

  const handleSave = () => {
    onSave({
      school,
      fieldOfStudy,
      degree,
      institution,
      startDate,
      endDate,
    });
  };

  return (
    <div className="border-[2px] bg-gray-50 shadow-2xl p-4 rounded-md">
      <h3 className="text-lg font-semibold text-green-500">
        {initialValues ? "Edit Education" : "Add Education"}
      </h3>
      <div className="grid gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            School
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Field of Study
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            required
          />
        </div>
        {/* Degree */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Degree
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>
        {/* Institution */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Institution
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500 cursor-pointer"
            dateFormat="MM/dd/yyyy"
            placeholderText="DD/MM/YY"
          />
        </div>
        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border px-3 py-2 rounded-md w-full focus:outline-none  cursor-pointer focus:ring-green-500"
            dateFormat="MM/dd/yyyy"
            placeholderText="DD/MM/YY"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="flex items-center text-green-500 hover:text-green-700 mr-2"
          onClick={handleSave}
        >
          <FaSave className="mr-1" />
          Save
        </button>
        <button
          type="button"
          className="flex items-center text-red-500 hover:text-red-700"
          onClick={onCancel}
        >
          <FaTimes className="mr-1" />
          Cancel
        </button>
      </div>
    </div>
  );
};

const ExperienceForm = ({ onSave, onCancel, initialValues }) => {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [company, setCompany] = useState(
    initialValues ? initialValues.company : ""
  );
  const [industry, setIndustry] = useState(
    initialValues ? initialValues.industry : ""
  );
  const [jobType, setJobType] = useState(
    initialValues ? initialValues.jobType : ""
  );
  const [startDate, setStartDate] = useState(
    initialValues ? new Date(initialValues.startDate) : null
  );
  const [endDate, setEndDate] = useState(
    initialValues ? new Date(initialValues.endDate) : null
  );

  const handleSave = () => {
    onSave({
      title,
      company,
      industry,
      jobType,
      startDate,
      endDate,
    });
  };

  return (
    <div className="border-[2px] bg-gray-50 shadow-2xl p-4 rounded-md">
      <h3 className="text-lg font-semibold text-green-500">
        {initialValues ? "Edit Experience" : "Add Experience"}
      </h3>
      <div className="grid gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        {/* Degree */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </div>
        {/* Institution */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job type
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          />
        </div>
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500 cursor-pointer"
            dateFormat="MM/dd/yyyy"
            placeholderText="DD/MM/YY"
          />
        </div>
        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border px-3 py-2 rounded-md w-full focus:outline-none  cursor-pointer focus:ring-green-500"
            dateFormat="MM/dd/yyyy"
            placeholderText="DD/MM/YY"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="flex items-center text-green-500 hover:text-green-700 mr-2"
          onClick={handleSave}
        >
          <FaSave className="mr-1" />
          Save
        </button>
        <button
          type="button"
          className="flex items-center text-red-500 hover:text-red-700"
          onClick={onCancel}
        >
          <FaTimes className="mr-1" />
          Cancel
        </button>
      </div>
    </div>
  );
};

const UpdateForm = () => {
  // image

  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  // for edu cation

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [educationList, setEducationList] = useState([]);

  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [experienceList, setExperienceList] = useState([]);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);
  const [summary, setSummary] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddEducation = () => {
    setEditingEducationIndex(null);
    setShowEducationForm(true);
  };

  const handleEditEducation = (index) => {
    setEditingEducationIndex(index);
    setShowEducationForm(true);
  };

  const handleCancelEducation = () => {
    setEditingEducationIndex(null);
    setShowEducationForm(false);
  };
  // experience
  const handleAddExperience = () => {
    setEditingExperienceIndex(null);

    setShowExperienceForm(true);
  };

  const handleEditExperience = (index) => {
    // setEditingEducationIndex(index);
    // setShowEducationForm(true);

    setEditingExperienceIndex(index);
    setShowExperienceForm(true);
  };

  const handleCancelExperience = () => {
    setEditingExperienceIndex(null);
    setShowExperienceForm(false);
  };

  const handleSaveEducation = (educationData) => {
    if (editingEducationIndex !== null) {
      const updatedEducationList = [...educationList];
      updatedEducationList[editingEducationIndex] = educationData;
      setEducationList(updatedEducationList);
    } else {
      setEducationList([...educationList, educationData]);
    }

    setEditingEducationIndex(null);
    setShowEducationForm(false);
  };
  const handleSaveExperience = (experienceData) => {
    if (editingExperienceIndex !== null) {
      const updatedExperienceList = [...experienceList];
      updatedExperienceList[editingExperienceIndex] = experienceData;
      setExperienceList(updatedExperienceList);
    } else {
      setExperienceList([...experienceList, experienceData]);
    }
    // todo
    setEditingExperienceIndex(null);
    setShowExperienceForm(false);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperienceList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedExperienceList);
  };
  const handleDeleteEducation = (index) => {
    const updatedEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedEducationList);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // // ... other state and handler definitions ...

  // const token = "bf38e9214689948b26cac41912e7e528"
  // const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`

  const img_key = "5efe9a284094d859ae9cafe3952f92f7";

  const url = `https://api.imgbb.com/1/upload?key=${img_key}`;
  // const onSubmit = (data) => {
  //   // for education

  //   console.log("Education Details:");
  //   educationList.forEach((education, index) => {
  //     console.log(`Education ${index + 1}:`);
  //     console.log("School:", education.school);
  //     console.log("Field of Study:", education.fieldOfStudy);
  //     console.log("Degree:", education.degree);
  //     console.log("Institution:", education.institution);
  //     console.log("Start Date:", education.startDate);
  //     console.log("End Date:", education.endDate);
  //   });

  //   console.log(applicationData);

  //   // for resume

  //   const formData = new FormData();
  //   formData.append("image", data.image[0]);
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgResponse) => {
  //       console.log(imgResponse);
  //       if (imgResponse.success) {
  //         const imgURL = imgResponse.data.display_url;
  //         const { firstName, lastName, email, phone, address } = data;
  //         const applicationData = {
  //           firstName,
  //           lastName,
  //           email,
  //           phone,
  //           image: imgURL,
  //           address,
  //           ...educationList,
  //           educationList
  //         };
  //         console.log(applicationData);
  //       }
  //     });
  // };
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // ... handle educationList and other data ...

    //   const formData = new FormData();
    //   formData.append("image", data.image[0]);

    //  fetch(url,{
    //   method:"POST",body:formData
    //  })
    //  .then(res=>res.json())
    //  .then(imgResponse=>{
    //   console.log(imgResponse);
    //  })

    const { firstName, lastName, email, phone, address, coverLetter } = data;
    const applicationData = {
      firstName,
      lastName,
      email,
      phone,
      coverLetter,
      address,
      ...educationList,
      ...experienceList,
    };
    console.log(applicationData);

    dispatch(
      createApplicationPost({
        firstName,
        lastName,
        email,
        phone,
        address,
        coverLetter,
        educationList,
        experienceList,
      })
    );
    setIsSubmitted(true);
  };

  // for image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
      }, 3000);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center shadow-md border-[1px]  bg-gray-50 space-y-2 p-32">
          <FaCheckCircle className="text-green-500 mx-auto text-6xl" />
          <p className="text-lg text-gray-500">
            Thank you,{" "}
            <span className="font-semibold text-gray-500">
              {firstName} {lastName}
            </span>
            , for your application! We'll be in touch via{" "}
            <span className="font-semibold text-500">{email}</span> for further
            information.
          </p>
          <p className="text-gray-600">
            Our recruiter will contact you shortly.
          </p>
        </div>
      ) : (
        <div className="mx-w-5xl container mx-auto">
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6"
            >
              <div className="bg-neutral-100 p-2">
                <h1 className="text-lg font-semibold text-gray-500">
                  Personal Details
                </h1>
              </div>
              <div className="md:flex gap-4">
                <div className="mb-4  w-full">
                  <label className="block mb-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-2 py-1 border rounded-lg"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">First name is required</span>
                  )}
                </div>

                <div className="mb-4  w-full">
                  <label className="block mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-2 py-1 border rounded"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">Last name is required</span>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-2 py-1 border rounded"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full px-2 py-1 border rounded"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-red-500">Phone number is required</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="phone">
                  Address
                </label>
                <input
                  type="text"
                  id="phone"
                  name="address"
                  className="w-full px-2 py-1 border rounded"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-red-500">Phone number is required</span>
                )}
              </div>

              {/* image upload */}
              <div className="mb-4">
                <label className="block mb-1 cursor-pointer" htmlFor="image">
                  Image(optional)
                  <div className="flex items-center justify-center bg-neutral-100 p-6 rounded-lg border-dashed border-2 border-gray-400">
                    {!imagePreview ? (
                      <>
                        <AiOutlineCloudUpload className="text-gray-400 w-12 h-12 cursor-pointer" />
                        <p className="text-gray-400 mt-2 text-center">
                          click to upload
                        </p>
                      </>
                    ) : (
                      <div className="relative inline-block rounded-full overflow-hidden">
                        <img
                          src={imagePreview}
                          width={100}
                          alt="Uploaded"
                          className="max-w-full h-auto"
                        />
                        {!uploading ? (
                          <button
                            type="button"
                            onClick={handleDeleteImage}
                            className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full transition hover:bg-red-600 focus:outline-none"
                          >
                            <RiDeleteBin2Line />
                          </button>
                        ) : (
                          <div className="absolute top-0 right-0 flex items-center h-full">
                            <p className="text-pink-700 font-bold">
                              Uploading...
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="w-full hidden"
                    {...register("image")}
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* image upload */}

              {/* Education */}

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-green-500">
                  Profile
                </h2>
                {educationList.map((education, index) => (
                  <div key={index} className="mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {education.school}
                        </h3>
                        <p className="text-gray-600">
                          {education.fieldOfStudy}, {education.degree}
                        </p>
                      </div>
                      <div>
                        <button
                          className="text-green-500 hover:text-green-700 mr-2"
                          onClick={() => handleEditEducation(index)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteEducation(index)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {showEducationForm && (
                  <EducationForm
                    onSave={handleSaveEducation}
                    onCancel={handleCancelEducation}
                    initialValues={
                      editingEducationIndex !== null
                        ? educationList[editingEducationIndex]
                        : null
                    }
                  />
                )}
                <button
                  className="flex items-center text-gray-500 font-medium hover:text-green-700 mt-4"
                  onClick={handleAddEducation}
                >
                  <FaPlus className="mr-1" />
                  Add Education(optional)
                </button>
              </div>

              <div className="mb-6">
                {experienceList.map((education, index) => (
                  <div key={index} className="mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {education.title}
                        </h3>
                        <p className="text-gray-600">
                          {education.company}, {education.industry}
                        </p>
                      </div>
                      <div>
                        <button
                          className="text-green-500 hover:text-green-700 mr-2"
                          onClick={() => handleEditExperience(index)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteExperience(index)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {showExperienceForm && (
                  <ExperienceForm
                    onSave={handleSaveExperience}
                    onCancel={handleCancelExperience}
                    initialValues={
                      editingExperienceIndex !== null
                        ? experienceList[editingExperienceIndex]
                        : null
                    }
                  />
                )}
                <button
                  className="flex items-center text-gray-500 font-medium hover:text-green-700 mt-4"
                  onClick={handleAddExperience}
                >
                  <FaPlus className="mr-1" />
                  Add Experience(optional)
                </button>
              </div>

              <div className="mb-4">
                <label className="block mb-1" htmlFor="coverLetter">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows="4"
                  className="w-full px-2 py-1 border rounded"
                  {...register("coverLetter", { required: true })}
                />
                {errors.coverLetter && (
                  <span className="text-red-500">Cover letter is required</span>
                )}
              </div>

              <button className="bg-green-500 px-8 py-1 rounded-md font-semibold text-white w-full mt-6 mb-0">
                Apply for the post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateForm;
