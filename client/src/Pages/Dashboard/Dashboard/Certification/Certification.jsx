import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";

const Certification = () => {
  const { id } = useParams();
  const [certifiedData, setCertifiedData] = useState();
  console.log(certifiedData);
  useEffect(() => {
    const URL = ` http://localhost:5000/all-applications/${id}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCertifiedData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [id]);

  console.log(certifiedData);

  if (certifiedData === null) {
    return <Loader />;
  }

  // State to manage form data and errors
  // State to manage form data and errors
  const [formData, setFormData] = useState({
    // userName: "",
    company: "",
    // title: "",
    startDate: "",
    logo: "",
    signature: "", // The signature image URL will be stored here
    signatureDetails: "",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? URL.createObjectURL(e.target.files[0]) : value,
    });

    // Clear the corresponding form error when the user makes a change
    setFormErrors({ ...formErrors, [name]: "" });
  };

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle certificate generation
  const handleGenerateCertificate = () => {
    // Validate the form before opening the modal
    if (validateForm()) {
      openModal();
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      // You can add code here to handle form submission (e.g., send data to a server)
      console.log(formData);
    }
  };

  // Ref for PDF content
  const pdfRef = useRef();

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const content = pdfRef.current;

    const pdfOptions = {
      margin: 10,
      filename: "certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Get the signature image URL
    const signatureImage = formData.signature;

    // Create an image element for the signature
    const signatureImgElement = document.createElement("img");
    signatureImgElement.src = signatureImage;

    // Add the signature image to the content
    content.appendChild(signatureImgElement);

    // Generate the PDF with the signature and save it
    html2pdf().from(content).set(pdfOptions).save();

    // Remove the signature image from the content
    content.removeChild(signatureImgElement);
  };

  // Validation function to check if all fields are filled
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    for (const key in formData) {
      if (formData[key].trim() === "") {
        errors[key] = "This field is required.";
        isValid = false;
      }
    }

    setFormErrors(errors);

    return isValid;
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="rounded-lg shadow-2xl p-4 md:p-8 w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Certification Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* User Name input */}
          {/* <div className="mb-4">
            <label
              htmlFor="userName"
              className="text-sm md:text-base font-semibold"
            >
              Candidate Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.userName ? "border-red-500" : ""
              }`}
              value={formData.userName}
              onChange={handleInputChange}
            />
            {formErrors.userName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.userName}</p>
            )}
          </div> */}
          {/* Company Name input */}
          <div className="mb-4">
            <label
              htmlFor="company"
              className="text-sm md:text-base font-semibold"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.company ? "border-red-500" : ""
              }`}
              value={formData.company}
              onChange={handleInputChange}
            />
            {formErrors.company && (
              <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>
            )}
          </div>
          {/* Job Title input */}
          {/* <div className="mb-4">
            <label
              htmlFor="title"
              className="text-sm md:text-base font-semibold"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.title ? "border-red-500" : ""
              }`}
              value={formData.title}
              onChange={handleInputChange}
            />
            {formErrors.title && (
              <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
            )}
          </div> */}
          {/* Hiring Date input */}
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="text-sm md:text-base font-semibold"
            >
              Hiring Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.startDate ? "border-red-500" : ""
              }`}
              value={formData.startDate}
              onChange={handleInputChange}
            />
            {formErrors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.startDate}
              </p>
            )}
          </div>
          {/* Logo (PNG) input */}
          <div className="mb-4">
            <label
              htmlFor="logo"
              className="text-sm md:text-base font-semibold"
            >
              Logo (PNG)
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept=".png"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.logo ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {formErrors.logo && (
              <p className="text-red-500 text-sm mt-1">{formErrors.logo}</p>
            )}
          </div>
          {/* Signature (PNG) input */}
          <div className="mb-4">
            <label
              htmlFor="signature"
              className="text-sm md:text-base font-semibold"
            >
              Signature (PNG)
            </label>
            <input
              type="file"
              id="signature"
              name="signature"
              accept=".png"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.signature ? "border-red-500" : ""
              }`}
              onChange={handleInputChange}
            />
            {formErrors.signature && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.signature}
              </p>
            )}
          </div>
          {/* Signature Details input */}
          <div className="mb-4">
            <label
              htmlFor="signatureDetails"
              className="text-sm md:text-base font-semibold"
            >
              Signature Details
            </label>
            <input
              type="text"
              id="signatureDetails"
              name="signatureDetails"
              className={`border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none ${
                formErrors.signatureDetails ? "border-red-500" : ""
              }`}
              value={formData.signatureDetails}
              onChange={handleInputChange}
            />
            {formErrors.signatureDetails && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.signatureDetails}
              </p>
            )}
          </div>
          {/* Generate Certificate button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleGenerateCertificate}
              className="bg-teal-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition duration-300 transform hover:scale-105"
            >
              Generate Certificate
            </button>
          </div>
        </form>
      </div>
      {/* Certificate Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
        ariaHideApp={false}
        certifiedData={certifiedData}
      >
        <div className="pt-8 min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 w-1/2">
            {/* Certificate Content */}
            <div
              ref={pdfRef}
              className="min-h-screen border-gray-400 flex items-center justify-center"
            >
              {/* ... (certificate content) ... */}
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="text-center mb-4">
                  <img
                    src={formData.logo}
                    alt="Company Logo"
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h1 className="text-4xl font-bold text-indigo-700">
                    Offer Letter From{" "}
                    <span className="text-teal-700">{formData.company}</span>
                  </h1>
                </div>
                <div className="mb-4">
                  <p className="text-xl font-semibold">
                    Dear
                    {/* {formData.userName} */}
                    {certifiedData?.firstName && (
                      <span className="mx-1 font-bold">
                        {certifiedData.firstName}
                      </span>
                    )}
                    ,
                  </p>
                  <p className="text-2xl font-bold text-green-700">
                    Congratulations!
                  </p>
                </div>
                <p className="mb-6 text-lg">
                  We are pleased to offer you the position of
                  <span className="text-2xl font-semibold mx-1 text-blue-700">
                    {/* {formData.title} */}
                    {certifiedData?.jobTitle && (
                      <span>{certifiedData.jobTitle}</span>
                    )}
                  </span>
                  at <span className="font-bold">{formData.company}</span>.
                </p>
                <div className="mb-6">
                  <p className="text-lg">
                    During your training, you demonstrated exceptional skills in
                    JavaScript, HTML, CSS, React, and the ability to apply these
                    skills effectively to real-world projects.
                  </p>
                  <p className="text-lg">
                    Your dedication, hard work, and quick learning have made you
                    a valuable addition to our team.
                  </p>
                </div>
                <p className="mb-6 text-2xl font-semibold text-purple-700">
                  You Did It, and we are proud of you!
                </p>

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-blue-700">
                    {/* {formData.title} */}
                    {certifiedData?.jobTitle && (
                      <span>{certifiedData.jobTitle}</span>
                    )}
                  </h2>
                  <div>
                    <img
                      src={formData.signature}
                      alt="Signature"
                      className="w-32 h-16 mb-2"
                    />
                    <hr className="border border-gray-500" />
                    <p className="text-lg">{formData.signatureDetails}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <p className="text-lg font-semibold text-red-700">
                    Course Duration: 8 weeks
                  </p>
                  <p className="text-lg font-semibold text-pink-700">
                    Certificate ID: 123456789
                  </p>
                </div>
              </div>
            </div>
            {/* Close and Download PDF buttons */}
            <div className="md:flex justify-around w-1/2 mx-auto gap-4 mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md w-full md:w-1/2 transition duration-300 transform hover:scale-105"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="border border-teal-700 hover:bg-green-700 text-gray-700 hover:text-white font-semibold py-2 px-4 rounded-md w-full md:w-1/2 transition duration-300 transform hover:scale-105"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Certification;
