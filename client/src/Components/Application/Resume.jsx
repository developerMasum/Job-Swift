import React, { useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineCloseCircle } from 'react-icons/ai';

const ResumeUploader = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedResume(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedResume(file);
    }
  };

  const handleClearResume = () => {
    setSelectedResume(null);
  };

  const handleClearCoverLetter = () => {
    setCoverLetter('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedResume) {
      console.log("Uploaded Resume:", selectedResume);
      console.log("Cover Letter:", coverLetter);
      // You can also perform further actions with the data here
    } else {
      console.log("No resume selected.");
    }
  };

  return (
    <div className="container mx-auto  bg-white  rounded-lg">
      
      <form onSubmit={handleFormSubmit}>
        <label
          htmlFor="resumeInput"
          className="text-gray-500 font-semibold mb-1 block cursor-pointer"
        >
          Upload Resume (PDF, DOC, DOCX)
        </label>
        <div
          className={`border-2 border-dashed rounded-lg p-4 mt-2 ${
            selectedResume ? 'border-gray-300' : 'border-green-500'
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectedResume ? (
            <div className="flex items-center">
              <p className="text-gray-600">{selectedResume.name}</p>
              <button
                type="button"
                onClick={handleClearResume}
                className="ml-2 text-red-500 hover:text-red-600 cursor-pointer"
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          ) : (
            <>
              <AiOutlineCloudUpload className="text-gray-400 mx-auto w-12 h-12 cursor-pointer" />
              <p className="text-gray-400 mt-2 cursor-pointer">Drag and drop or click to upload</p>
            </>
          )}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            id="resumeInput"
            className="hidden"
            onChange={handleResumeChange}
          />
        </div>
        <label htmlFor="coverLetter" className="text-gray-500 font-semibold mt-4 block">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          className="w-full border border-green-200 rounded p-2"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
        {coverLetter && (
          <button
            type="button"
            onClick={handleClearCoverLetter}
            className="mt-2 text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
          >
            Clear
          </button>
        )}
       
      </form>
    </div>
  );
};

export default ResumeUploader;
