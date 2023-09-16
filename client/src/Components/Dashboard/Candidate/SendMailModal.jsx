import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";

const SendMailModal = ({ isOpen, onClose, onSubmit, value }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [mail, setMail] = useState([]);
  const [originalMail, setOriginalEmail] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          " https://server-job-swift.vercel.app/all-applications"
        );
        const data = await response.json();
        setMail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const candidateEmail = mail.find((e) => e._id === value)?.email;

  useEffect(() => {
    if (candidateEmail) {
      // Set the original email if needed
      setOriginalEmail(candidateEmail);
    }
  }, [candidateEmail]);

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleInterviewClick = () => {
    // Populate the Subject and Message fields with interview data
    reset({
      to: candidateEmail || "",
      subject: "Interview Invitation",
      message:
        "Dear [Candidate Name],\n\nWe are pleased to invite you for an interview. Please find the details below:\n\nDate: [Interview Date]\nTime: [Interview Time]\nLocation: [Interview Location]\n\nWe look forward to meeting you!\n\nSincerely,\n[Your Name]",
    });
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

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    className="text-green-700 underline text-sm font-bold py-2 px-4 rounded"
                    onClick={handleInterviewClick}
                  >
                    Interview
                  </button>
                  <button
                    type="button"
                    className="text-red-700 underline font-bold py-2 text-sm rounded mx-2"
                    onClick={handleRejectionClick}
                  >
                    Reject
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
                className=" hover:bg-slate-400 bg-cyan-800 w-full text-white font-bold py-2 px-4 rounded"
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

export default SendMailModal;
