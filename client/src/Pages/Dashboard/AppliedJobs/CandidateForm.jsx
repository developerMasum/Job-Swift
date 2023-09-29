
import React, { useState } from "react";
import toast from "react-hot-toast";

import { AiOutlinePlus } from "react-icons/ai";

const CandidateForm = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('candidate added successfully')
    closeModal();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      headline: e.target.headline.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
    };

    console.log("Form Data:", formData);
 e.target.reset();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <div className="px-4 py-2 md:px-0 text-second">
        {/* Navbar */}
        <div className="w-full flex justify-between items-center mb-4">
          <h3 className="text-2xl md:text-3xl">Add Candidate</h3>
          <div className="flex gap-2 items-center">
            {/* Render a clickable "Cancel" link */}
            <a
              onClick={handleCancel}
              className="hover:underline btn btn-link text-black"
              href="#"
            >
              Cancel
            </a>
            
          </div>
        </div>
        {/* Horizontal line */}
        <hr className="border-t border-black opacity-50 mb-4" />
        {/* Form */}
        <div className="border w-full md:w-2/3 mx-auto p-4">
          <p className="text-lg font-semibold mb-4">Basic Info</p>
          <hr className="border-t mb-4" />
          <form onSubmit={handleSubmit}>
            <div className="md:flex">
              <div className="mb-4 md:w-1/2 md:pr-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="headline"
                className="block text-sm font-medium text-gray-700"
              >
                Headline
              </label>
              <input
                type="text"
                id="headline"
                name="headline"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="flex justify-end">
              {/* Render a "Submit" button */}
              <button
                type="submit"
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 flex justify-between text-gray-800 border w-full md:w-2/3 mx-auto p-4">
        <p>Add details tags, source, comment (optional)</p>
        <AiOutlinePlus size={24} />
      </div>
    </>
  );
};

export default CandidateForm;
