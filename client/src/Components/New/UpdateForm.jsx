import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateForm = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();
//   // for onchange event
//   const [pdfFile, setPdfFile] = useState(null);
//   const [pdfFileError, setPdfFileError] = useState("");

//   // for submit event
//   const [viewPdf, setViewPdf] = useState(null);

//   // onchange event
//   const fileType = ["application/pdf"];
//   const handlePdfFileChange = (e) => {
//     let selectedFile = e.target.files[0];
//     if (selectedFile) {
//       if (selectedFile && fileType.includes(selectedFile.type)) {
//         let reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onloadend = (e) => {
//           setPdfFile(e.target.result);
//           setPdfFileError("");
//         };
//       } else {
//         setPdfFile(null);
//         setPdfFileError("Please select valid pdf file");
//       }
//     } else {
//       console.log("select your file");
//     }
//   };

//   const img_key = "5efe9a284094d859ae9cafe3952f92f7";

//   const url = `https://api.imgbb.com/1/upload?key=${img_key}`;

//   const onSubmit = (data) => {
//     console.log(data);
//     const formData = new formData();
//     formData.append("image", data.image[0]);
//     fetch(url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((imgResponse) => {
//         console.log(imgResponse);
//         if (imgResponse.success) {
//           const imgURL = imgResponse.data.display_url;
//           const { firstName, lastName, email, phone } = data;
//           const applicationData = {
//             firstName,
//             lastName,
//             email,
//             phone,
//             image: imgURL,
//           };
//           console.log(applicationData);
//         }
//       });
//   };


const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
    // ... other state and handler definitions ...
  
    const img_key = "8e9289abe3e2d1d4ca343b8b5cfee6ce";
  
    const url = `https://api.imgbb.com/1/upload?key=${img_key}`;
  
    const onSubmit = (data) => {
      console.log(data);
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          console.log(imgResponse);
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const { firstName, lastName, email, phone } = data;
            const applicationData = {
              firstName,
              lastName,
              email,
              phone,
              image: imgURL,
            };
            console.log(applicationData);
          }
        });
    };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6"
      >
        <div className="mb-4">
          <label className="block mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-2 py-1 border rounded"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-2 py-1 border rounded"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500">Last name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-2 py-1 border rounded"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-2 py-1 border rounded"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500">Phone number is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">Image is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="resume">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="w-full"
            {...register("resume", { required: true })}
          />
          {errors.resume && (
            <span className="text-red-500">Resume is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="4"
            className="w-full px-2 py-1 border rounded"
            {...register("coverLetter", { required: true })}
          />
          {errors.coverLetter && (
            <span className="text-red-500">Cover letter is required</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
