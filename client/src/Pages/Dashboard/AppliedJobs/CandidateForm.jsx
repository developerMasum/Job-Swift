// Import React and useState from the 'react' library
import React, { useState } from "react";
import toast from "react-hot-toast";

// Import icons from react-icons library
import { AiOutlinePlus } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";

// Define the CandidateForm component and receive the 'closeModal' prop
const CandidateForm = ({ closeModal }) => {
  // Initialize a state variable 'isOpen' using useState, initially set to false
  const [isOpen, setIsOpen] = useState(false);

  // Define the 'toggleDropdown' function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Define the 'handleSubmit' function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('candidate added successfully')
    closeModal();

    // Access form data using e.target
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      headline: e.target.headline.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
    };

    // Log the form data to the console
    console.log("Form Data:", formData);

    // Handle form submission here, e.g., send data to a server or update state
 e.target.reset();
    // Close the modal
  };

  // Define the 'handleCancel' function to close the modal when the "Cancel" button is clicked
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
            <div className="btn-group items-center relative text-left">
              {/* Render a button for "Add to Applied" */}
              <button className="btn bg-emerald-600">Add to Applied</button>
              {/* Render a dropdown button */}
              <button
                className="btn bg-emerald-600"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <BiDownArrowAlt size={24} />
              </button>
              {isOpen && (
                // Render the dropdown menu when 'isOpen' is true
                <div className="origin-top-right absolute right-0 mt-2 md:mt-80 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                  <div className="py-1">
                    <ul>
                      <li className="px-4 py-2">Soured</li>
                      <li className="px-4 py-2">Applied</li>
                      <li className="px-4 py-2">Phone Screen</li>
                      <li className="px-4 py-2">Assessment</li>
                      <li className="px-4 py-2">Interview</li>
                      <li className="px-4 py-2">Offer</li>
                      <li className="px-4 py-2">Hired</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
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
      <div className="mt-8 flex justify-between border w-full md:w-2/3 mx-auto p-4">
        <p>Add details tags, source, comment (optional)</p>
        {/* Render a plus icon */}
        <AiOutlinePlus size={24} />
      </div>
    </>
  );
};

// Export the CandidateForm component as the default export
export default CandidateForm;
