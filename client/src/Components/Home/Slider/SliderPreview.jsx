// export default SliderPreview;
import React from "react";
import { FaUserAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating";

const SliderPreview = ({ data }) => {
  const {
    testimonial,
    name,
    avatar,
    rating,
    titleOfComment,
    numberOfEmployees,
    companyName,
    jobPosition,
  } = data;

  // Replace this URL with your actual image URL
  const avatarPlaceholder = "https://via.placeholder.com/80";

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-green-400/50 cursor-pointer">
      <div className="mb-4 text-gray-600 flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 text-sm">{name}</span>
      </div>

      <p className="text-lg font-semibold text-gray-800 mb-2">{titleOfComment}</p>

      <Rating
        readonly
        initialRating={rating}
        emptySymbol={<FaStar className="text-gray-400" />}
        fullSymbol={<FaStar className="text-yellow-400" />}
      />

      <p className="text-gray-800 text-base mt-2 mb-2">“{testimonial}”</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-sm">
          <p className="text-gray-600">{jobPosition}</p>
          <p className="text-gray-600">{companyName}</p>
          <p className="text-gray-600">{numberOfEmployees}</p>
        </div>

        <div className="text-green-500 text-2xl">
          <FaQuoteLeft />
        </div>
      </div>
    </div>
  );
};

export default SliderPreview;