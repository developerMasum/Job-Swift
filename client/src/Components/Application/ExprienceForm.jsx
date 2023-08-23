
// export default Form;
import React, { useState } from 'react';
import { FaTrash, FaPlus, FaEdit, FaSave } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [educationFormVisible, setEducationFormVisible] = useState(false);
  const [educationData, setEducationData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedEducationIndex, setSelectedEducationIndex] = useState(null);
  const [formData, setFormData] = useState({
    school: '',
    fieldOfStudy: '',
    degree: '',
    startDate: null,
    endDate: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      endDate: date,
    }));
  };

  const handleAddEducation = () => {
    setEducationData((prevData) => [...prevData, formData]);
    setFormData({
      school: '',
      fieldOfStudy: '',
      degree: '',
      startDate: null,
      endDate: null,
    });
    setEducationFormVisible(false);
  };

  const handleEditEducation = (index) => {
    setEditMode(true);
    setSelectedEducationIndex(index);
    setFormData(educationData[index]);
    setEducationFormVisible(true);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = educationData.filter((_, i) => i !== index);
    setEducationData(updatedEducation);
  };

  const handleUpdateEducation = () => {
    const updatedEducationData = [...educationData];
    updatedEducationData[selectedEducationIndex] = formData;
    setEducationData(updatedEducationData);
    setEditMode(false);
    setSelectedEducationIndex(null);
    setFormData({
      school: '',
      fieldOfStudy: '',
      degree: '',
      startDate: null,
      endDate: null,
    });
    setEducationFormVisible(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        {/* <h2 className="text-2xl font-semibold">Profile</h2> */}
        <div className="flex items-center space-x-2">
          {educationFormVisible ? (
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => {
                setEditMode(false);
                setEducationFormVisible(false);
                setFormData({
                  school: '',
                  fieldOfStudy: '',
                  degree: '',
                  startDate: null,
                  endDate: null,
                });
              }}
            >
              <FaTrash className="w-6 h-6" />
            </button>
          ) : (
            <button
              className="text-green-500 hover:text-green-700"
              onClick={() => {
                setEditMode(false);
                setEducationFormVisible(true);
              }}
            >
              <FaPlus className="w-6 h-6" />
            </button>
          )}
          <h3 className="text-lg font-semibold ml-2  text-gray-500">Exprience</h3>
        </div>
      </div>
      {educationFormVisible && (
        <div className="border-[1px] border-gray-300 p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Exprience {editMode && 'Update'} (optional)
          </h3>
          <form>
            <input
              className="border rounded w-full mb-2 p-2"
              type="text"
              name="school"
              placeholder="Title"
              value={formData.school}
              onChange={handleInputChange}
            />
            <input
              className="border rounded w-full mb-2 p-2"
              type="text"
              name="fieldOfStudy"
              placeholder="Field of Study"
              value={formData.fieldOfStudy}
              onChange={handleInputChange}
            />
            <input
              className="border rounded w-full mb-2 p-2"
              type="text"
              name="degree"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleInputChange}
            />
            <div className="flex space-x-2 mb-2">
              <div className="w-1/2">
                <label className="block mb-1">Start Date</label>
                <DatePicker
                  className="border rounded w-full p-2"
                  selected={formData.startDate}
                  onChange={handleStartDateChange}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1">End Date</label>
                <DatePicker
                  className="border rounded w-full p-2"
                  selected={formData.endDate}
                  onChange={handleEndDateChange}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                />
              </div>
            </div>
            {editMode ? (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                type="button"
                onClick={handleUpdateEducation}
              >
                <FaSave className="mr-2" /> Update
              </button>
            ) : (
              <button
                className="bg-[#00756a] text-white py-2 px-4 rounded hover:bg-blue-600"
                type="button"
                onClick={handleAddEducation}
              >
                <FaSave className="mr-2 inline-block" /> Save
              </button>
            )}
          </form>
        </div>
      )}
      <div className="border-t border-gray-300 mt-4 pt-4">
        {/* <h3 className="text-lg font-semibold">Education</h3> */}
        {educationData.map((education, index) => (
          <div key={index} className="border border-gray-300 p-4 my-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold mb-2">
                  School: {education.school}
                </p>
                <p>Field of Study: {education.fieldOfStudy}</p>
                <p>Degree: {education.degree}</p>
                <p>Start Date: {education.startDate?.toLocaleDateString()}</p>
                <p>End Date: {education.endDate?.toLocaleDateString()}</p>
              </div>
              <div>
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEditEducation(index)}
                >
                  <FaEdit className="w-5 h-5" />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteEducation(index)}
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
