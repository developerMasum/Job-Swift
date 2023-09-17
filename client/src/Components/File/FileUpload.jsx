import React, { useEffect, useState } from "react";
import axios from "axios";

function ImageForm() {
  const [imageData, setImageData] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [allFiles, setAllFiles] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setResumeData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageData || !resumeData) {
      console.error("Image and/or resume data is missing.");
      return;
    }

    try {
      // Make an Axios POST request with the formData
      const response = await axios.post("  http://localhost:5000/upload-file", {
        image: imageData,
        resume: resumeData,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  console.log(imageData);

  useEffect(() => {
    fetch("  http://localhost:5000/get-file", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllFiles(data);
      });
  }, []);
  console.log(allFiles);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Upload Image and Resume (base64)
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border rounded w-full p-2"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700">
            Resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border rounded w-full p-2"
            onChange={handleResumeChange}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Upload
          </button>
        </div>
      </form>
      <div>
        {allFiles?.map((file) => (
          <>
            <img width={100} src={file.image} alt="" />
            <iframe
              src={file.resume}
              width={100}
              title="Uploaded Resume"
              className="mt-2 border border-gray-400 rounded"
              style={{ width: "100%", height: "400px" }}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default ImageForm;
