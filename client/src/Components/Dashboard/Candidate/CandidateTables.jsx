import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import {
  HiChat,
  HiHand,
  HiMail,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import SendMailModal from "./SendMailModal";

const CandidateTables = ({ candidates, setSortOrder, sortOrder }) => {
  // console.log(candidates);
  const [isChecked, setIsChecked] = useState("");
  // const [sortOrder, setSortOrder] = useState("newest");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setEmailId(value);
    setDeleteId(value);
    // console.log(value);

    if (checked) {
      // If checked, add the value to the list of checked checkboxes
      setIsChecked(value);
    } else {
      // If unchecked, remove the value from the list of checked checkboxes
      setIsChecked("");
    }
  };
  // console.log('deleteId',deleteId);

  // console.log(isChecked);
  const handleUnSelectAll = () => {
    setIsChecked([]);
    const checkboxes = document.querySelectorAll(".form-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  // async function handleDelete(id) {
  //   const response = await fetch('http://localhost:5000/delete-candidates', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(id),
  //   });

  //   if (!response.ok) {
  //     console.error('Error deleting candidates:', response.statusText);

  //   }
  // }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    const mailData = {
      email: data.to,
      subject: data.subject,
      message: data.message,
    };

    // Send the POST request to the server
    axios
      .post("http://localhost:5000/mail", mailData)
      .then((response) => {
        console.log("Email sent successfully:", response.data);
        toast.success("Email sent successfully!"); // Use toast.success to show a success message
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email.");
      });

    closeModal();
  };

  return (
    <div className="mt-5 text-secondary">
      <div className="flex justify-between w-full items-center ">
        <p className="w-1/2 text-secondary"> {candidates.length} Candidates</p>
        <div className="w-52">
          <select
            className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
      {/* <table className="w-full ">
       
        <thead className="">
          <tr>
            <th className="p-2">Select</th>
            <th className="p-2">Candidate Information</th>
            <th className="p-2">Job Status</th>
          </tr>
        </thead>
        <tbody className="py-12">
       
          {candidates.map((candidate) => (
            <tr
              key={candidate._id}
              className="border-t border-gray-300 text-secondary "
            >
              <td className="p-2 ">
                <label className="pl-28">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={candidate._id}
                    checked={candidate.isChecked}
                    onChange={(e) => handleCheckbox(e)}
                  />
                </label>
              </td>
              <td className="p-2">
                <div className="flex justify-start gap-3 items-center ">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={`http://localhost:5000/images/${candidate.image}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-1 font-semibold text-secondary">
                      {candidate.firstName} {candidate.lastName}
                    </p>
                    {candidate.educationList ? (
                      <>
                        {" "}
                        <p>
                          {" "}
                          {candidate.educationList?.map((edu, index) => (
                            <span key={index}>
                              {" "}
                              {edu?.degree ? edu?.degree : ""} from{" "}
                              {edu?.institution ? edu?.institution : " "}{" "}
                            </span>
                          ))}{" "}
                          <span> </span>
                        </p>{" "}
                      </>
                    ) : (
                      "no"
                    )}
                    <p className="text-sm">{candidate.location}</p>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <p>{candidate.jobTitle}</p>
                  <p> {candidate.location}</p>
                  <p>at ---- Stage</p>
                  <p>
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
      </table> */}
      <table className="w-full shadow-lg rounded-lg overflow-hidden">
        {/* Head */}
        <thead className="bg-gray-200 text-gray-500">
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
                      src={`http://localhost:5000/images/${candidate.image}`}
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
                  <p className="text-sm text-gray-500">at ---- Stage</p>
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
          {" "}
          <div className="mt-5 mb-3 fixed bottom-0 left-0 right-0 bg-orange-200 py-3">
            <div className="space-y-2 pt-4 text-start">
              <div className="flex gap-5 justify-around items-center">
                <div className="flex gap-3 ">
                  <Link to={`profile/${deleteId}`}>
                    {" "}
                    <button className="bg-[#00756a] px-2 py-1 rounded-xl  text-white ">
                      Details
                    </button>
                  </Link>
                  <p>
                    Select:{" "}
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
                    className="cursor-pointer"
                  />
                  <HiMail
                    onClick={openModal}
                    size={25}
                    className="text-sky-800 hover:text-lime-800 cursor-pointer"
                  />
                  <HiChat size={25} className="text-sky-800" />
                  <HiHand size={25} color="red" />
                  <button className="bg-[#00756a] px-2 py-1 rounded-xl  text-white ">
                    Move to Next Step
                  </button>
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
        </>
      )}
    </div>
  );
};

export default CandidateTables;
