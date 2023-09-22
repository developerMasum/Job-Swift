import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { HiChat, HiHand, HiMail } from "react-icons/hi";
import SendMailModal from "./SendMailModal";
import SendMessageModal from "./SendMessageModal";

const CandidateTables = ({ candidatesData }) => {
  // console.log(candidates);

  const [candidates, setCandidates] = useState(candidatesData);
  // console.log(candidates);

  const [isChecked, setIsChecked] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setEmailId(value);
    setDeleteId(value);
    // console.log(value);

    if (checked) {
      setIsChecked(value);
    } else {
      setIsChecked("");
    }
  };

  const handleUnSelectAll = () => {
    setIsChecked([]);
    const checkboxes = document.querySelectorAll(".form-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  async function handleDelete(id) {
    try {
      const response = await fetch(
        ` http://localhost:5000/delete-candidate/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const remaining = candidates.filter(
          (candidate) => candidate._id !== id
        );
        setCandidates(remaining);
        toast.success("Candidate deleted successfully", {
          position: "bottom-center",
        });
      } else {
        console.error("Failed to delete candidate. Status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while deleting the candidate:", error);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openMessageModal = () => {
    setMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setMessageModalOpen(false);
  };

  const onSubmit = (data) => {
    const mailData = {
      email: data.to,
      subject: data.subject,
      message: data.message,
    };

    // Send the POST request to the server
    axios
      .post(" http://localhost:5000/mail", mailData)
      .then((response) => {
        // The code inside this block will only run if the request is successful
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        // The code inside this block will run if there's an error with the request
        console.error("Error sending email:", error);
        toast.error("Error sending email.");
      });

    closeModal();
  };

  return (
    <div className="mt-5 text-secondary  border rounded-lg">
      <div className="flex justify-between  w-full items-center mb-4">
        <p className="text-xl font-bold text-gray-800">
          {candidates.length} <span className="text-gray-500">Candidates</span>
        </p>
      </div>

      <table className="w-full border-[1px] rounded-lg overflow-hidden">
        {/* Head */}
        <thead className="bg-[#00756a] text-white">
          <tr>
            <th className="px-6 py-3 text-left">Select</th>
            <th className="px-6 py-3">Candidate Information</th>
            <th className="px-6 py-3">Job Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Rows */}
          {candidates.map((candidate) => (
            <tr
              key={candidate._id}
              className="hover:bg-gray-100 transition-colors divide-y-[1px] divide-gray-400 duration-300"
            >
              <td className="px-6 py-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500 rounded-full focus:ring-2 focus:ring-blue-200"
                    value={candidate._id}
                    checked={candidate.isChecked}
                    onChange={(e) => handleCheckbox(e)}
                  />
                </label>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={candidate?.image}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {candidate.firstName} {candidate.lastName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {candidate.location}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <p className="font-semibold text-gray-800">
                    {candidate.jobTitle}
                  </p>
                  <p className="text-sm text-gray-500">{candidate.location}</p>
                  {candidate?.stage ? (
                    <>
                      <p className="text-sm text-gray-500">
                        at <span className="font-bold">{candidate.stage}</span>{" "}
                        Stage
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500">
                      at <span className="font-bold">Applied</span> Stage
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    {(() => {
                      const timestamp = candidate.date;
                      const dateTime = new Date(timestamp);

                      const options = {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      };
                      return dateTime.toLocaleDateString(undefined, options);
                    })()}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!isChecked ? (
        " "
      ) : (
        <>
          <div className="mt-5 mb-3 fixed bottom-0 left-0 right-0 bg-orange-200 py-3">
            <div className="space-y-2 pt-4 text-start">
              <div className="flex gap-5 justify-around items-center">
                <div className="flex gap-3 ">
                  <Link to={`profile/${deleteId}`}>
                    <button className="bg-[#00756a] px-2 py-1 rounded-xl  text-white ">
                      Show Details
                    </button>
                  </Link>
                  <p className="text-gray-800">
                    Select:
                    <span
                      onClick={handleUnSelectAll}
                      className="font-semibold cursor-pointer"
                    >
                      None{" "}
                    </span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <AiFillDelete
                    onClick={() => handleDelete(isChecked)}
                    size={25}
                    color="red"
                    className="cursor-pointer hover:text-red-800"
                    title="Delete This User"
                  />
                  <HiMail
                    onClick={openModal}
                    size={25}
                    className="text-sky-800 hover:text-lime-800 cursor-pointer"
                    title="Send Mail"
                  />
                  <HiChat
                    onClick={openMessageModal}
                    size={25}
                    title="Message"
                    className="text-sky-800 cursor-pointer"
                  />
                  <HiHand
                    size={25}
                    color="red"
                    title="Disqualify"
                    className="cursor-pointer"
                  />
                  <Link to={`profile/${deleteId}`}>
                    <button className="bg-[#00756a] px-2 py-1 rounded-xl  text-white ">
                      Move to Other Stage
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SendMailModal
            value={emailId}
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={onSubmit}
          />
          <SendMessageModal
            value={emailId}
            isOpen={messageModalOpen}
            onClose={closeMessageModal}
            onSubmit={onSubmit}
          ></SendMessageModal>
        </>
      )}
    </div>
  );
};

export default CandidateTables;
