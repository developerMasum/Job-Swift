import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // Destructure properties from the 'blog' object
  const { id, title, image, content } = blog;

  // State to track whether to show blog details
  const [showDetails, setShowDetails] = useState(false);

  // State to track mouse hover
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Apply CSS classes based on hover state
      className={`max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out ${
        isHovered ? "hover:scale-105" : ""
      }`}
    >
      <img src={image} alt={title} className="w-full md:h-3/5" />
      <div className="bg-white dark:bg-gray-800 dark:text-white px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      </div>
      <div className="px-6 py-4 bg-gray-900 dark:bg-gray-700">
        <Link
          to={`/blogs/${id}`}
          // Apply CSS classes based on hover state
          className={`block text-center text-white font-semibold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 py-2 px-4 rounded-full hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-900 transition duration-300 ease-in-out transform hover:scale-105`}
        >
          VIEW THESE RESOURCES
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
