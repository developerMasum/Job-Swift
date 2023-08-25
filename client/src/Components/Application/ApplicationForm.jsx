import React, { useState, useEffect } from "react";
import Education from "./Education";

import { FaCamera, FaTrash } from "react-icons/fa";
import ExprienceForm from "./ExprienceForm";
import Resume from "./Resume";
import { useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { createApplicationPost } from "../../redux/application/applicationsSlice";

const countryCodes = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
];

const ApplicationForm = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code
  );

  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    handleFileSelection(e.dataTransfer.files[0]);
  };

  const handleFileSelection = (file) => {
    setSelectedFile(file);
  };

  const handleFileUpload = async (e) => {
    setIsUploading(true);
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }

    setIsUploading(false);
  };

  const handleRemovePhoto = () => {
    setSelectedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };

    try {
      await dispatch(createApplicationPost(data));
      setIsSubmitted(true); // Update the form submission state
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const handleDocumentDragOver = (e) => {
      e.preventDefault();
    };

    const handleDocumentDrop = (e) => {
      e.preventDefault();
      setIsDraggingOver(false);
      handleFileSelection(e.dataTransfer.files[0]);
    };

    document.addEventListener("dragover", handleDocumentDragOver);
    document.addEventListener("drop", handleDocumentDrop);

    return () => {
      document.removeEventListener("dragover", handleDocumentDragOver);
      document.removeEventListener("drop", handleDocumentDrop);
    };
  }, []);

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center bg-gray-50 space-y-2 p-32">
          <FaCheckCircle className="text-green-500 mx-auto text-6xl" />
          <p className="text-lg text-gray-500">
            Thank you,{" "}
            <span className="font-semibold text-gray-500">Md.Saiful Islam</span>
            , for your application! We'll be in touch via Email for further
            information.
          </p>
          <p className="text-gray-600">
            Our recruiter will contact you shortly.
          </p>
        </div>
      ) : (
        <div className="container mx-auto p-6 bg-gray-50 border-[1px] shadow-lg rounded-md">
          <div className="underline-offset-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-500 uppercase text-center">
              Personal Details
            </h2>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block">First Name</label>
                <input
                  className="border-[1px] rounded w-full p-2 border-green-200"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block">Last Name</label>
                <input
                  className="border-[1px] rounded w-full p-2 border-green-200"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block">Email</label>
              <input
                className="border-[1px] rounded w-full p-2 border-green-200"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block">Address</label>
              <textarea
                className="border-[1px] rounded w-full p-2 border-green-200"
                name="address"
                placeholder="Address"
                required
              />
            </div>
            <div className="relative">
              <label className="block">Phone Number</label>
              <div className=" relative inline-block w-full">
                <select
                  className="border-[1px] border-green-200 p-2  rounded w-1/4"
                  name="countryCode"
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  className="border-[1px] p-2 border-green-200 rounded w-3/4 pl-12"
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="relative">
              <label className="block">Photo (optional)</label>
              <div className="border-[2px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
                {selectedFile ? (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <button
                      className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                      onClick={handleRemovePhoto}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-2">
                    {isUploading ? (
                      <span>Uploading...</span>
                    ) : (
                      <>
                        <FaCamera className="w-12 h-12 text-gray-500" />
                        <label
                          className={`cursor-pointer ${
                            isDraggingOver
                              ? "border-blue-500"
                              : "border-gray-400"
                          } border-2 rounded-md p-2`}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDraggingOver(true);
                          }}
                          onDragLeave={() => setIsDraggingOver(false)}
                          onDrop={handleFileDrop}
                        >
                          {isDraggingOver
                            ? "Drop here"
                            : "Drag and drop or click"}
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          name="photo"
                          onChange={handleFileUpload}
                        />
                        <span>Max size: 5MB</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            <Education />
            <ExprienceForm></ExprienceForm>
            <Resume></Resume>
            <button
              type="submit"
              className="bg-green-500 px-8 py-1 rounded-md font-semibold text-white w-full mt-6"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
