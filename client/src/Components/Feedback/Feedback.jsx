import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { authContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [allUsers, setAllUsers] = useState([]);
const {user} = useContext(authContext)
const navigate = useNavigate()

const name = user?.displayName;
const email = user?.email;
const image = user?.photoURL;
const status = 'pending'

console.log('email:', user?.email);
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);

    const data = {rating, feedback,email,name,image, status }
    console.log(data);

    axios.post('http://https://server-job-swift.vercel.app/feedback', data)
    .then((response) => {
      // Handle the success response here
      console.log('Feedback sent successfully:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error sending feedback:', error);
    });

    navigate('/')

    // Clear the form fields
    setRating(0);
    setFeedback('');
  };







  return (
    <div className="max-w-md mx-auto pt-10 bg-white">
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
                  value <= rating ? 'text-yellow-500' : 'text-gray-300'
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
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button

          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
