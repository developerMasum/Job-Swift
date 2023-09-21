import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { authContext } from "../../Auth/AuthProvider";
import { useDispatch } from "react-redux";
import { createFeedback } from "../../redux/feedback/feedbackAPI";
import { useNavigate } from "react-router-dom";

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

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    const data = { rating, feedback, email, name, image, status };

    dispatch(createFeedback(data));

    setTimeout(() => {
      navigate("/");
    }, 3000);
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
          className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
        >
          {isLoading ? "Please waite....." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
