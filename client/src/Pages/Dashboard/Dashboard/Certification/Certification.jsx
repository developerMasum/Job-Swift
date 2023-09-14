import React, { useState } from "react";
import Modal from "react-modal";
import html2pdf from "html2pdf.js";

const Certification = () => {
  // Initialize form data using useState
  const [formData, setFormData] = useState({
    userName: "Ashik Faysal",
    company:"Job Swift",
    title: "Web Development",
    startDate: "2022-01-01",
    endDate: "2023-01-12",
    signature: "https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png",
    signatureDetails: "Web Developer",
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  // Initialize modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to generate and open the certificate modal
  const handleGenerateCertificate = () => {
    openModal();
  };

  // Function to download the certificate as a PDF
  const downloadPDF = () => {
    // Get the certificate content element by ID
    const element = document.getElementById("certificate-content");

    // Define options for PDF generation
    const options = {
      margin: 10,
      filename: "certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate and save the PDF
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className=" pt-8 min-h-screen flex items-center justify-center">
      <div class=" rounded-lg shadow-2xl p-4 md:p-8 w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Certification Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* User Name input */}
          <div className="mb-4">
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
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>
          {/* Company Name input */}
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="text-sm md:text-base font-semibold"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          {/* Course Name input */}
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="text-sm md:text-base font-semibold"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          {/* Hiring Date input */}
          <div className="mb-4">
            <label
              htmlFor="hiringDate"
              className="text-sm md:text-base font-semibold"
            >
              Hiring Date
            </label>
            <input
              type="date"
              id="hiringDate"
              name="hiringDate"
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.startDate}
              onChange={handleInputChange}
            />
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
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              onChange={handleInputChange}
            />
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
              className="border rounded w-full px-3 py-2 transition duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.signatureDetails}
              onChange={handleInputChange}
            />
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
      >
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full">
          {/* Certificate Content */}
          <div
  id="certificate-content"
  dangerouslySetInnerHTML={{
    __html: `
      <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="text-center mb-4">
            <img src="https://i.ibb.co/Y218M42/logo-js.png" alt="Company Logo" class="w-16 h-16 mx-auto mb-2" />
            <h1 class="text-4xl font-bold">Offer Letter From
              <span>${formData.company}</span>
            </h1>
          </div>
          <div class="mb-4">
            <p class="text-xl font-semibold">Dear ${formData.userName},</p>
            <p class="text-2xl font-bold">Congratulations!</p>
          </div>
          <p class="mb-6 text-lg">
            We are pleased to offer you the position of <span class="text-2xl font-semibold">${formData.title}</span> at ${formData.company}.
          </p>
          <div class="mb-6">
            <p class="text-lg">During your training, you demonstrated exceptional skills in JavaScript, HTML, CSS, React, and the ability to apply these skills effectively to real-world projects.</p>
            <p class="text-lg">Your dedication, hard work, and quick learning have made you a valuable addition to our team.</p>
          </div>
          <p class="mb-6 text-2xl font-semibold">You Did It, and we are proud of you!</p>
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-bold">${formData.title}</h2>
            <div>
              <img src="${formData.signature}" alt="Signature" class="w-32 h-16 mb-2" />
              <hr class="border" />
              <p class="text-lg">${formData.signatureDetails}</p>
            </div>
          </div>
          <div class="mt-8 flex justify-between">
            <p class="text-lg font-semibold">Course Duration: 8 weeks</p>
            <p class="text-lg font-semibold">Certificate ID: 123456789</p>
          </div>
        </div>
      </div>
    `,
  }}
></div>



          {/* Close and Download PDF buttons */}
          <div className="md:flex justify-around w-1/2 mx-auto gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-teal-700 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md w-1/2 transition duration-300 transform hover:scale-105 mt-4"
            >
              Close
            </button>
            <button
              type="button"
              onClick={downloadPDF}
              className="border border-teal-700 hover:bg-green-700 text-gray-700 font-semibold py-2 px-4 rounded-md hover:text-white w-1/2 transition duration-300 transform hover:scale-105 mt-4"
            >
              Download PDF
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Certification;
