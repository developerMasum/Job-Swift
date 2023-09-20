import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { authContext } from "../../Auth/AuthProvider";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const name = user?.displayName;
  const email = user?.email;
  const image = user?.photoURL;
  const status = "pending";

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if a submission is already in progress
    if (isLoading) return;

    setIsLoading(true); // Show loading indicator

    const data = { rating, feedback, email, name, image, status };

    axios
      .post(" https://server-hazel-nine.vercel.app/feedback", data)
      .then((response) => {
        // Handle the success response here
        console.log("Feedback sent successfully:", response.data);
        navigate("/");
        toast.success("Feedback added successfully");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error sending feedback:", error);
        toast.error("Error adding feedback. Please try again later.");
      })
      .finally(() => {
        // Clear the form fields and hide loading indicator
        setIsLoading(false);
        setRating(0);
        setFeedback("");
      });
  };

  return (
    <div className="max-w-md mx-auto pt-10 bg-white p-12 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="rating">
            Rate your experience:
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <FaStar
                key={value}
                className={`cursor-pointer text-xl ${
                  value <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(value)}
              />
            ))}
            <span className="ml-2 text-xl text-yellow-500">{rating}</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="feedback">
            Your feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Share your feedback..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isLoading ? "Submitting....." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
