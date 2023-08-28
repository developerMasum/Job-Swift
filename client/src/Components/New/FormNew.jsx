import React, { useState } from "react";
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
import { AiOutlineCloudUpload, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { createApplicationPost } from "../../redux/application/api";
import { useForm } from "react-hook-form";

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

const FormNew = () => {
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

  const [selectedResume, setSelectedResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedResume(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedResume(file);
    }
  };

  const handleClearResume = () => {
    setSelectedResume(null);
  };

  const handleClearCoverLetter = () => {
    setCoverLetter("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedResume) {
      console.log("Uploaded Resume:", selectedResume);
      console.log("Cover Letter:", coverLetter);
    } else {
      console.log("No resume selected.");
    }
  };

  // for personal

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setUploadedImage(URL.createObjectURL(file));
  //     console.log("Uploaded image:", file);
  //   }
  // };

  // const handleImageDrop = (event) => {
  //   event.preventDefault();
  //   const file = event.dataTransfer.files[0];
  //   if (file) {
  //     setUploadedImage(URL.createObjectURL(file));
  //     console.log("Dropped image:", file);
  //   }
  // };

  // const handleDeleteImage = () => {
  //   setUploadedImage(null);
  // };

  // const handleClear = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPhoneNumber("");
  //   setLocation("");
  // };

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
  // const data = useSelector(state)

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   console.log("Education Details:");
  //   educationList.forEach((education, index) => {
  //     console.log(`Education ${index + 1}:`);
  //     console.log("School:", education.school);
  //     console.log("Field of Study:", education.fieldOfStudy);
  //     console.log("Degree:", education.degree);
  //     console.log("Institution:", education.institution);
  //     console.log("Start Date:", education.startDate);
  //     console.log("End Date:", education.endDate);})

  //     try {
  //      await dispatch(createApplicationPost({firstName,lastName,email,phoneNumber,location}));
  //       setIsSubmitted(true); // Update the form submission state
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   };

  const data = useSelector((state) => console.log(state));
  const img_key = "5efe9a284094d859ae9cafe3952f92f7";

  const url = `https://api.imgbb.com/1/upload?key=${img_key}`;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

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

  //   const FormData = {
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNumber,
  //     location,
  //     ...educationList,
  //   };

  //   const formData = new formData();
  //   formData.append("image", data.image[0]);
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgResponse) => {
  //       console.log(imgResponse);
  //     });

  //   try {
  //     await dispatch(
  //       createApplicationPost({
  //         firstName,
  //         lastName,
  //         email,
  //         phoneNumber,
  //         location,
  //         educationList, // Pass the educationList array to the action
  //       })
  //     );
  //     setIsSubmitted(true); // Update the form submission state
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // ... (Rest of the components)

  // for react-hook-form

  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <div className="flex items-center justify-center bg-gray-100 ">
          <form
            className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* ... (Rest of the form components) */}

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-green-500">
                Personal Details
              </h2>
              <button
                type="button"
                className={`text-red-500 ${
                  !(firstName || lastName || email || phoneNumber || location)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:text-red-700"
                }`}
                onClick={handleClear}
                disabled={
                  !(firstName || lastName || email || phoneNumber || location)
                }
              >
                <FaTrash className="mr-1 inline-block" />
                Clear
              </button>
            </div>
            <div className="grid gap-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium  text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border px-3 py-2 rounded-md focus:outline-none focus:ring-green-500 w-full"
                    {...register("firstName", { required: true })}
                    name="jobTitle"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border px-3 py-2 rounded-md focus:outline-none focus:ring-green-500 w-full"
                    {...register("lastName", { required: true })}
                    name="lastName"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium  text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
                  {...register("phoneNumber", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium  text-gray-500"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
                  {...register("location", { required: true })}
                />
              </div>

              {/* for image */}

              {/* <div className="relative">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-500"
                >
                  Upload Photo(optional)
                </label>
                <div className="border-[1px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
                  <div
                    className={`w-60 h-32  border-[1px]  pr-5 border-gray-300 rounded-md flex items-center justify-center overflow-hidden ${
                      uploadedImage ? "mb-2" : ""
                    }`}
                    onDrop={handleImageDrop}
                    onDragOver={(event) => event.preventDefault()}
                  >
                    {uploadedImage ? (
                      <div className="relative">
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                          onClick={handleDeleteImage}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="image"
                        className="cursor-pointer flex-col"
                      >
                        <div className="flex justify-center items-center">
                          <FaUpload className="text-gray-400 text-4xl" />
                        </div>
                        <span className="text-gray-400 block mt-2">
                          Drag or click to upload
                        </span>
                      </label>
                    )}
                  </div>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    {...register("image", { required: true })}
                  />
                </div>
              </div> */}

              {/* <div className="relative">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-500"
                >
                  Upload Photo (optional)
                </label>
                <div className="border-[1px] border-green-400 border-dashed p-4 rounded-md flex items-center justify-center">
                  <div
                    className={`w-60 h-32  border-[1px]  pr-5 border-gray-300 rounded-md flex items-center justify-center overflow-hidden ${
                      errors.image ? "mb-2" : ""
                    }`}
                  >
                    {uploadedImage ? (
                      <div className="relative">
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                          onClick={() => setUploadedImage(null)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="image"
                        className="cursor-pointer flex-col"
                      >
                        <div className="flex justify-center items-center">
                          <FaUpload className="text-gray-400 text-4xl" />
                        </div>
                        <span className="text-gray-400 block mt-2">
                          Drag or click to upload
                        </span>
                      </label>
                    )}
                  </div>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    {...register("image")}
                  />
                </div>
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    Please upload an image.
                  </p>
                )}
              </div> */}
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-green-500">Profile</h2>
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
            {/* experience */}

            {/* <div className="mb-6">
             
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
            </div> */}

            <div className="mb-2">
              <label
                htmlFor="summary"
                className="block text-md font-medium text-gray-500"
              >
                Summary(optional)
              </label>
              <textarea
                id="summary"
                rows="4"
                className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
               
                {...register("summary")}
              ></textarea>
            </div>

            <div className="my-4">
              <label
                htmlFor="resumeInput"
                className="text-gray-500 font-semibold mb-1 block cursor-pointer "
              >
                Upload Resume (PDF, DOC, DOCX)
              </label>
              <div
                className={`border-[1px] border-dashed rounded-lg p-4 mt-2 ${
                  selectedResume ? "border-gray-300" : "border-green-500"
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {selectedResume ? (
                  <div className="flex items-center">
                    <p className="text-gray-600">{selectedResume.name}</p>
                    <button
                      type="button"
                      onClick={handleClearResume}
                      className="ml-2 text-red-500 hover:text-red-600 cursor-pointer"
                    >
                      <AiOutlineCloseCircle />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex-col ">
                      <AiOutlineCloudUpload className="text-gray-400 mx-auto w-12 h-12 cursor-pointer" />
                      <p className="text-gray-400 mt-2 text-center ">
                        Drag and drop or click to upload
                      </p>
                    </div>
                  </>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  id="resumeInput"
                  className="hidden"
                  onChange={handleResumeChange}
                />
              </div>
              <label
                htmlFor="coverLetter"
                className="text-gray-500 font-semibold mt-4 block"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows="4"
                className="w-full border border-gray-300 rounded p-2"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
              {coverLetter && (
                <button
                  type="button"
                  onClick={handleClearCoverLetter}
                  className="mt-2 text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="my-4">
              <label
                htmlFor="resumeInput"
                className="text-gray-500 font-semibold mb-1 block cursor-pointer"
              >
                Upload Resume (PDF, DOC, DOCX)
              </label>
              {/* <div
                className={`border-[1px] border-dashed rounded-lg p-4 mt-2 ${
                  errors.resumeInput ? "border-red-500" : "border-green-500"
                }`}
              >
                {selectedResume ? (
                  <div className="flex items-center">
                    <p className="text-gray-600">{selectedResume.name}</p>
                    <button
                      type="button"
                      onClick={handleClearResume}
                      className="ml-2 text-red-500 hover:text-red-600 cursor-pointer"
                    >
                      <AiOutlineCloseCircle />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="resumeInput"
                    className="cursor-pointer flex-col"
                  >
                    <div className="flex justify-center items-center">
                      <AiOutlineCloudUpload className="text-gray-400 text-4xl" />
                    </div>
                    <span className="text-gray-400 mt-2 text-center">
                      Drag and drop or click to upload
                    </span>
                  </label>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  id="resumeInput"
                  className="hidden"
                  {...register("resumeInput", { required: true })}
                  onChange={handleResumeChange}
                />
                {errors.resumeInput && (
                  <p className="text-red-500 text-sm mt-1">
                    Please upload a valid resume file.
                  </p>
                )}
              </div> */}
              <label
                htmlFor="coverLetter"
                className="text-gray-500 font-semibold mt-4 block"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows="4"
                className="w-full border border-gray-300 rounded p-2"
                {...register("coverLetter")}
              />
              {coverLetter && (
                <button
                  type="button"
                  onClick={handleClearCoverLetter}
                  className="mt-2 text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormNew;
