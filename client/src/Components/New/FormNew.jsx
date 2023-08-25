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
    <div className="border-[2px] border-green-400 border-dashed p-4 rounded-md">
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
        {/* Include other education fields similarly */}
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
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            dateFormat="MM/dd/yyyy"
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
            className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-green-500"
            dateFormat="MM/dd/yyyy"
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

const PersonalDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [summary, setSummary] = useState("");

  // for personal

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      console.log("Uploaded image:", file);
    }
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      console.log("Dropped image:", file);
    }
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setLocation("");
  };

  // ... (Rest of the functions and states)
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

  const handleSaveEducation = (educationData) => {
    if (editingEducationIndex !== null) {
      // Update existing education
      const updatedEducationList = [...educationList];
      updatedEducationList[editingEducationIndex] = educationData;
      setEducationList(updatedEducationList);
    } else {
      // Add new education
      setEducationList([...educationList, educationData]);
    }

    setEditingEducationIndex(null);
    setShowEducationForm(false);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedEducationList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log user input data
    console.log("Personal Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Location:", location);

    console.log("Education Details:");
    educationList.forEach((education, index) => {
      console.log(`Education ${index + 1}:`);
      console.log("School:", education.school);
      console.log("Field of Study:", education.fieldOfStudy);
      console.log("Degree:", education.degree);
      console.log("Institution:", education.institution);
      console.log("Start Date:", education.startDate);
      console.log("End Date:", education.endDate);
    });
  };

  // ... (Rest of the components)

  return (
    <div className="my-20 flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-5xl"
        onSubmit={handleSubmit}
      >
        {/* ... (Rest of the form components) */}

        <div className="flex items-center justify-between mb-6">
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
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-green-500 w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-green-500 w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-green-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* for image */}

          <div className="relative">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-500"
            >
              Upload Photo(optional)
            </label>
            <div className="border-[2px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
              <div
                className={`w-60 h-32  border-2 pr-5 border-gray-300 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden ${
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
                  <label htmlFor="image" className="cursor-pointer flex-col">
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
              />
            </div>
          </div>

          {/* for image */}

          {/* education field */}

          {/* education field */}
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500">Profile</h2>
          {educationList.map((education, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{education.school}</h3>
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
        {/* Experience */}
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
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>
      
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
