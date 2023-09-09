// import axios from 'axios';
// import React, { useState } from 'react';

// function ImageForm() {
//   const [imageData, setImageData] = useState(null);
//   const [resumeData, setResumeData] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedResume, setSelectedResume] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageData(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleResumeChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedResume(file);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setResumeData(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!imageData || !resumeData) {
//       console.error("Image and/or resume data is missing.");
//       return;
//     }

//     // Handle the base64-encoded image and resume data here
//     console.log('Image Data:', imageData);
//     console.log('Resume Data:', resumeData);

//     // You can also save the files on the server if needed
//     if (selectedImage && selectedResume) {
//       const formData = new FormData();
//       formData.append('image', selectedImage);
//       formData.append('resume', selectedResume);
//       console.log(formData);

//       try {
//             const response = await axios.post(
//                   "http://localhost:5000/upload",
//                   formData,
//                   {
//                     headers: {
//                       "Content-Type": "multipart/form-data",
//                     },
//                   }
//                 );
//                 console.log(response.data);
//               } catch (error) {
//                 console.error(error);
//               }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-semibold mb-4">Upload Image and Resume (base64)</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-700">Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             className="border rounded w-full p-2"
//             onChange={handleImageChange}
//           />
//           {selectedImage && (
//             <img
//               src={imageData}
//               alt="Uploaded Image"
//               className="mt-2 max-w-full"
//             />
//           )}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="resume" className="block text-gray-700">Resume</label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             className="border rounded w-full p-2"
//             onChange={handleResumeChange}
//           />
//           {selectedResume && (
//             <iframe
//               src={resumeData}
//               title="Uploaded Resume"
//               className="mt-2 border border-gray-400 rounded"
//               style={{ width: '100%', height: '400px' }}
//             />
//           )}
//         </div>
//         <div className="mb-4">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//           >
//             Upload
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ImageForm;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ImageForm() {
  const [imageData, setImageData] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedResume, setSelectedResume] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
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
      setSelectedResume(file);
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
      console.error('Image and/or resume data is missing.');
      return;
    }

    // Handle the base64-encoded image and resume data here
    console.log('Image Data:', imageData);
    console.log('Resume Data:', resumeData);

    // You can also save the files on the server if needed
    if (selectedImage && selectedResume) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('resume', selectedResume);

      try {
        const response = await axios.post(
          // Update the server address to match your backend
          'http://localhost:5000/upload', // Assuming your server is running on port 3001
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-applications")
      .then((res) => {
        console.log(res);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Image and Resume (base64)</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            className="border rounded w-full p-2"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <img
              src={imageData}
              alt="Uploaded Image"
              className="mt-2 max-w-full"
            />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700">Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border rounded w-full p-2"
            onChange={handleResumeChange}
          />
          {selectedResume && (
            <iframe
              src={resumeData}
              title="Uploaded Resume"
              className="mt-2 border border-gray-400 rounded"
              style={{ width: '100%', height: '400px' }}
            />
          )}
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
    </div>
  );
}

export default ImageForm;

