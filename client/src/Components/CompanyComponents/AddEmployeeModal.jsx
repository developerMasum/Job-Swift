// AddEmployeeModal.js
import React from "react";

const AddEmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal">
        <div className="modal-content">
          <h2 className="text-xl font-semibold">Add Employee</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae culpa omnis quos soluta assumenda dolorum molestias qui deleniti doloribus!</p>
        </div>
        <div className="modal-footer">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
