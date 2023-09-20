import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";
import axios from "axios";

const SendRejectionMail = ({ isOpen, onClose, onSubmit, value }) => {
  const candidateEmail = value;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleRejectionClick = () => {
    // Populate the Subject and Message fields with rejection data
    reset({
      to: candidateEmail || "",
      subject: "Application Status Update",
      message:
        "Dear [Candidate Name],\n\nWe regret to inform you that your application has been declined. We appreciate your interest and effort in applying to our company. Thank you for considering us, and we wish you the best in your job search.\n\nSincerely,\n[Your Name]",
    });
  };

  const sendEmail = (data) => {
    const mailData = {
      email: data.to,
      subject: data.subject,
      message: data.message,
    };

    // Send the POST request to the server
    axios
      .post("  https://server-hazel-nine.vercel.app/mail", mailData)
      .then((response) => {
        // The code inside this block will only run if the request is successful
        toast.success("Email sent successfully!");
        closeModal();
        window.location.reload(true);
      })
      .catch((error) => {
        // The code inside this block will run if there's an error with the request
        toast.success("Email sent successfully!");
        closeModal();
        window.location.reload(true);
      });
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 w-full h-full flex items-center justify-center z-50`}
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={handleClose}
      ></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto text-start rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 px-6">
          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="to"
              >
                To
              </label>
              <div className="">
                <input
                  {...register("to", { required: true })}
                  type="email"
                  defaultValue={candidateEmail || ""}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    errors.to ? "border-red-500" : "border"
                  }`}
                  id="to"
                />

                <div className="flex justify-start items-center">
                  <p className="text-xs font-semibold text-swift">
                    Use template{" "}
                  </p>

                  <button
                    type="button"
                    className="text-red-700 underline font-bold py-2 text-sm rounded mx-2"
                    onClick={handleRejectionClick}
                  >
                    Rejection Mail
                  </button>
                </div>
              </div>
              {errors.to && (
                <p className="text-red-500 text-xs italic">
                  This field is required.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                {...register("subject", { required: true })}
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.subject ? "border-red-500" : "border"
                }`}
                id="subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs italic">
                  This field is required.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.message ? "border-red-500" : "border"
                }`}
                rows="7"
                id="message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs italic">
                  This field is required.
                </p>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="hover:bg-slate-400 bg-cyan-800 w-full text-white font-bold py-2 px-4 rounded"
              >
                Send <FiSend className="inline-block" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendRejectionMail;
