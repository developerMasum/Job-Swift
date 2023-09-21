// Import React and useState from the 'react' library
import React, { useState } from "react";

// Import the CandidateForm component from "./CandidateForm"
import CandidateForm from "./CandidateForm";

// Define the AddCandidatesModal component and receive the 'closeModal' prop
const AddCandidatesModal = ({ closeModal }) => {
  // Initialize a state variable 'isOpen' using useState, initially set to false
  const [isOpen, setIsOpen] = useState(false);

  // Define the 'openModal' function to set 'isOpen' to true
  const openModal = () => {
    setIsOpen(true);
  };

  // Define the 'handleCloseModal' function
  const handleCloseModal = () => {
    // Set 'isOpen' to false to close the modal
    setIsOpen(false);
    // Call the 'closeModal' function passed as a prop to close the modal
    closeModal();
  };

  return (
    <div>
      {/* Render a clickable element to open the modal */}
      <h5 onClick={openModal} className="font-semibold text-xl  rounded-lg ">
        Add manually
      </h5>
      {/* Conditional rendering of modal content when 'isOpen' is true */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal overlay for background */}
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
          {/* Modal container */}
          <div className="modal-container bg-white w-screen h-screen md:max-w-full mt-32 mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              {/* Render the CandidateForm component and pass 'closeModal' as a prop */}
              <CandidateForm closeModal={handleCloseModal} />
            </div>
            <div className="modal-footer py-4 px-6 flex justify-end">
              {/* Render a button to close the modal */}
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the AddCandidatesModal component as the default export
export default AddCandidatesModal;
