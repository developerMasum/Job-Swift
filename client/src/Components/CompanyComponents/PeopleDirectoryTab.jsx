import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiMiniPlay } from "react-icons/hi2";
import images from "../../assets/Image/peopleDirectory.png";
import chiringe from "../../assets/Image/chiringe.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import Swal from "sweetalert2";

const PeopleDirectoryTab = () => {
  // Define state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to an API

    // Show a SweetAlert2 success message
    Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "The form has been successfully submitted.",
      timer: 3000,
    });

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      companyName: "",
    });
  };

  const [isPlaying, setIsPlaying] = useState(false);

  // Function to start playing the video
  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="pt-8">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="md:text-3xl text-xl ">People directory</h3>
          <button className="flex bg-[#c7f0f1] px-2 py-1 rounded-full gap-2 items-center">
            <FaPaperPlane color="107191" size={12} />
            <span className="text-swift text-xs font-bold">BETA</span>
          </button>
        </div>

        {/* Button to open modal */}
        <button
          onClick={openModal}
          className="bg-[#00756a] hover:bg-[#005f56] md:px-5 px-2 flex items-center gap-2 md:py-2 py-1 rounded-md transition-colors 3s ease-in-out text-white"
        >
          <span>Add Employee</span>
          <IoIosArrowDown />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col items-center pt-16 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          {/* Image */}
          <img className="mx-auto w-48" src={images} alt="PeopleDirectory" />
          <h6 className="font-semibold my-4">
            Create a company directory to manage employees
          </h6>
          <p className="mb-4 text-sm font-normal text-swift">
            Click 'Add Employee' to start your company directory.
          </p>

          {/* Gray background section */}
          <div className="bg-gray-200 w-full py-4 mb-4">
            <div className="flex items-center md:gap-10 gap-3 sm:flex-row sm:justify-evenly sm:items-center">
              {/* Image */}
              <img
                src={chiringe}
                alt="chiringe"
                className="md:w-32 w-10 sm:w-auto"
              />
              <div>
                {/* Text */}
                <h6 className="font-medium text-swift my-4">
                  Upload a CSV list of your employees
                </h6>
                <p className="text-swift text-sm">
                  Add multiple employees to your directory.
                </p>
              </div>
            </div>
            <div className="pt-10 px-4 flex gap-8">
              {/* Lightbulb icon */}
              <HiOutlineLightBulb color="#598bd4" />
              <p className="text-swift text-sm">
                Not sure what to upload? Download{" "}
                <span className="underline">CSV template</span> and visit our
                <span className="underline">support article</span>.
              </p>
            </div>
            <div className="pt-10 justify-center flex gap-2 items-center">
              {/* Mini play icon */}
              <HiMiniPlay
                color="#598bd4"
                onClick={playVideo}
                style={{ cursor: "pointer" }}
              />

              {/* YouTube video embedded in an iframe */}
              {isPlaying && (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2wXz8eUVeoQ?autoplay=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}

              {/* Link to play the video */}
              {!isPlaying && (
                <h5
                  className="hover:underline font-semibold text-[#598bd4]"
                  onClick={playVideo}
                  style={{ cursor: "pointer" }}
                >
                  Watch introduction video
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bg-gray-200 inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white md:w-1/2 lg:3/4 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
              {/* Modal title */}
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              {/* Close modal button */}
              <button onClick={closeModal} className="text-gray-500">
                <RiCloseLine className="text-lg" />
              </button>
            </div>

            {/* Form inside the modal */}
            <div className="text-gray-700 mt-4">
              <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                <form onSubmit={handleSubmit}>
                  {/* Name input */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Email input */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 pb-2 pt-4 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Company Name input */}
                  <div className="mb-4">
                    <label
                      htmlFor="companyName"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleDirectoryTab;
