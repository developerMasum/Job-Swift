import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Transition } from "@headlessui/react"; // Import Tailwind CSS animation classes

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog data from the JSON file
    fetch("/blogs.json") // Assuming the JSON file is in the public folder
      .then((response) => response.json())
      .then((data) => {
        // Find the blog with the matching ID
        const selectedBlog = data.blogs.find(
          (blog) => blog.id === parseInt(id)
        );

        // Set the selected blog in the state
        setBlog(selectedBlog);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [id]);

  // State to control whether to show the full description or a truncated version
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle between showing full and truncated descriptions
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="container mx-auto mt-20 rounded-2xl">
      {blog ? (
        <Transition
          show={!!blog}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Blog Details Card */}
          <div className="max-w-full mx-auto rounded overflow-hidden shadow-lg my-8">
            {/* Blog Image */}
            <img
              className="w-full md:h-[80vh] object-cover" // Adjust the image height for your needs
              src={blog.image}
              alt={blog.title}
            />
            <div className="px-6 py-4">
              {/* Blog Title */}
              <h1 className="font-bold text-xl mb-2">{blog.title}</h1>
              <p className="text-gray-700">Author: {blog.author}</p>
              {/* <p className="pt-4 pb-2 text-gray-700">{blog.content}</p> */}

              {/* Blog Publication Date */}
              <p className="text-gray-700">
                Publication Date: {blog.publication_date}
              </p>

              {/* Blog Description */}
              <p className="text-gray-700 mt-4">
                {/* Show the full description or a truncated version */}
                {showFullDescription
                  ? blog.description
                  : `${blog.description.slice(0, 150)}... `}
                {/* Toggle button to show/hide description */}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "(Read Less)" : "(Read More)"}
                </span>
              </p>
            </div>
          </div>
          {/* End Blog Details Card */}
        </Transition>
      ) : (
        // Loading message while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
