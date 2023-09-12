import React, { useEffect, useState } from "react";
import blogImage from "../../assets/Image/readourblogs.png";
import BlogCard from "./BlogCard ";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Define the URL of your JSON file
    const jsonFileUrl = "./blogs.json";

    // Fetch data from the JSON file
    fetch(jsonFileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the retrieved JSON data to the 'blogs' state
        setBlogs(data.blogs); // Assuming the JSON structure has a 'blogs' key
      })
      .catch((error) => {
        // Handle errors here
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // The empty array ensures this effect runs only once when the component mounts

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6); // Show all blogs or just the first 6

  return (
    <div className="mt-20 px-2 text-swift pb-20">
      <div className="mb-20 mt-40">
        <img src={blogImage} alt="Read our blogs" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-white font-semibold bg-blue-500 dark:bg-blue-700 py-2 px-4 rounded-full hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
