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
    signature: "",
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
    <div className="bg-gray-300 pt-8 min-h-screen flex items-center justify-center">
      <div className="bg-slate-400 rounded-lg shadow-2xl p-4 md:p-8 w-full md:w-1/2">
        <h2 className="text-2xl text-white md:text-3xl font-bold text-center mb-4">
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-full transition duration-300 transform hover:scale-105"
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
      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg">
          <div class="flex items-center justify-center mb-4"></div>
          <h1 class="text-5xl font-bold mb-4 text-stone-500">Offer Letter From
          <span class="text-gray-500">${formData.company}</span>
          </h1>
          <div class="mb-2">
            <p class="text-2xl text-stone-500 font-bold">Dear,</p>
            <h2 class="text-3xl font-bold text-stone-500">${formData.userName}</h2>
          </div>
          <p class="mb-4">For successful completion of the <span class="text-3xl font-semibold text-stone-500">${formData.title}</span></p>
          <div class="my-2">
            <p>With a rigorous amount of Javascript, HTML, CSS, React and applied these skills to build several projects.</p>
            <p>We found the student hard-working, dedicated, and a quick learner, who finished the assigned tasks on time.</p>
          </div>
          <p class="mb-4 text-2xl font-semibold text-stone-500">You Did It, and we are proud of you!</p>
          <div class="flex text-5xl font-bold items-center justify-between mt-12">
            <h2 class="text-stone-500">${formData.title}</h2>
            <div>
              <img src="${formData.signature}" width="100" height="50" />
              <hr />
              <p class="text-lg text-stone-500">${formData.signatureDetails}</p>
            </div>
          </div>
          <div class="flex justify-end mt-4">
            <p class="text-lg font-semibold">Course Duration: 8 weeks</p>
          </div>
          <div class="flex justify-end mt-4">
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
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full w-1/2 transition duration-300 transform hover:scale-105 mt-4"
            >
              Close
            </button>
            <button
              type="button"
              onClick={downloadPDF}
              className="bg-stone-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full w-1/2 transition duration-300 transform hover:scale-105 mt-4"
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
