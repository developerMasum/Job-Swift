import React, { useEffect, useState } from "react";
import axios from "axios";

function FileUpload() {
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

const FileUpload = () => {
  return (
    <div className='container mx-auto'>
      <form>
       <fieldset className='border rounded-md'>
        <legend>Personal Details</legend>
       <label htmlFor="name">name</label>
        <input type="text" />
       </fieldset>
      </form>
    </div>
  );
};

export default FileUpload;