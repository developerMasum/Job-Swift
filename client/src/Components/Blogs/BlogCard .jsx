import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";


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
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto", // Adjust card layout as needed
        height: "100%", // Make the card take up the full height of its container
      }}
    >
      <img src={image} alt={title} className="w-full " />
      <div className="dark:text-white px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      </div>
      <div className="px-6 pb-4">
        <Link
          to={`/blogs/${id}`}
          className={`flex items-center text-center font-semibold underline py-2 px-4 rounded-full text-teal-700 transition duration-300 ease-in-out transform hover:scale-105`}
        >
          <span>Read More</span>
          <AiOutlineRight size={16}/>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
