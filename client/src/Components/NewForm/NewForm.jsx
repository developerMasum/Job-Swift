import React, { useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";

const PersonalDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  //   for image

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log user input data
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Location:", location);
  };

  return (
    <div className="my-20 flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-5xl"
        onSubmit={handleSubmit}
      >
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
