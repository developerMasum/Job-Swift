import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select"; // Import the timezone select component

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
 const [image, setImage] = useState(null);

 const handleImageChange = (e) => {
   const file = e.target.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = () => {
       setImage(reader.result);
     };
     reader.readAsDataURL(file);
   }
 };
  const handleImageRemove = () => {
    setImage(null);
  };


  return (
    <>
      <div className="shadow-md h-20 flex items-center justify-center mb-6">
        <h2 className="text-center text-5xl font-bold">Workable</h2>
      </div>
      <div>
        <div className="bg-slate-200">
          <h3 className="text-3xl font-semibold">Profile</h3>
          <form className="bg-white p-4">
            {/* ... First Name, Last Name, and Job Title fields ... */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="jobTitle"
                  className="block text-lg font-semibold mb-2"
                >
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="timeZone"
                className="block text-lg font-semibold mb-2"
              >
                Time Zone
              </label>
              <div className="select-wrapper w-1/2">
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                />
              </div>
            </div>
            {/* ... Profile Image input ... */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-lg font-semibold mb-2"
              >
                Profile Image
              </label>
              <div className="border p-4 flex justify-center mx-auto">
                {image ? (
                  <div className="flex items-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mr-2"
                    />
                    <button
                      type="button"
                      onClick={handleImageRemove}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
