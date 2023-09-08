// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     startDateTime: '',
//     endDateTime: '',
//   });
//   const [eventCreated, setEventCreated] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username: 'user1', // Replace with actual username and password
//         password: 'password1',
//       });
//       const userToken = response.data.token;
//       setToken(userToken);
//       setShowForm(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreateEvent = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/create-event',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       setEventCreated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="App">
//       <h1>Create Google Calendar Event</h1>

//       {!token ? (
//         <button onClick={handleLogin}>Log In</button>
//       ) : (
//         <>
//           {showForm && (
//             <form>
//               {/* Form fields for event details */}
//               <label>Title:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//               />
//               {/* Add other form fields for description, date/time, etc. */}
//               <button onClick={handleCreateEvent}>Create Event</button>
//             </form>
//           )}
//           {eventCreated && <p>Event created successfully!</p>}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     startDateTime: '',
//     endDateTime: '',
//   });
//   const [eventCreated, setEventCreated] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username: 'user1', // Replace with actual username and password
//         password: 'password1',
//       });
//       const userToken = response.data.token;
//       setToken(userToken);
//       setShowForm(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreateEvent = async (e) => {
//     e.preventDefault(); // Prevent form submission

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/create-event',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       setEventCreated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-semibold mb-4">Create Google Calendar Event</h1>

//         {!token ? (
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
//             onClick={handleLogin}
//           >
//             Log In
//           </button>
//         ) : (
//           <>
//             {showForm && (
//               <form onSubmit={handleCreateEvent}>
//                 {/* Title */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
//                     Title:
//                   </label>
//                   <input
//                     className="border rounded w-full py-2 px-3"
//                     type="text"
//                     name="title"
//                     id="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
//                     Description:
//                   </label>
//                   <textarea
//                     className="border rounded w-full py-2 px-3"
//                     name="description"
//                     id="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Start Date and Time */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-bold mb-2" htmlFor="startDateTime">
//                     Start Date and Time:
//                   </label>
//                   <input
//                     className="border rounded w-full py-2 px-3"
//                     type="datetime-local"
//                     name="startDateTime"
//                     id="startDateTime"
//                     value={formData.startDateTime}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* End Date and Time */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-bold mb-2" htmlFor="endDateTime">
//                     End Date and Time:
//                   </label>
//                   <input
//                     className="border rounded w-full py-2 px-3"
//                     type="datetime-local"
//                     name="endDateTime"
//                     id="endDateTime"
//                     value={formData.endDateTime}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <button
//                   className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none"
//                   type="submit"
//                 >
//                   Create Event
//                 </button>
//               </form>
//             )}

//             {eventCreated && <p className="text-green-500 mt-4">Event created successfully!</p>}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     startDateTime: '',
//     endDateTime: '',
//   });
//   const [eventCreated, setEventCreated] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         username: 'user', // Replace with actual username and password
//         password: 'password',
//       });
//       const userToken = response.data.token;
//       setToken(userToken);
//       setShowForm(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreateEvent = async (e) => {
//     e.preventDefault(); // Prevent the form from submitting

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/create-event',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       setEventCreated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="App">
//       <h1>Create Google Calendar Event</h1>

//       {!token ? (
//         <button onClick={handleLogin}>Log In</button>
//       ) : (
//         <>
//           {showForm && (
//             <form onSubmit={handleCreateEvent}>
//               <label>Title:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//               />

//               <label>Description:</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//               />

//               <label>Start Date and Time:</label>
//               <input
//                 type="datetime-local"
//                 name="startDateTime"
//                 value={formData.startDateTime}
//                 onChange={handleChange}
//               />

//               <label>End Date and Time:</label>
//               <input
//                 type="datetime-local"
//                 name="endDateTime"
//                 value={formData.endDateTime}
//                 onChange={handleChange}
//               />

//               <button type="submit">Create Event</button>
//             </form>
//           )}
//           {eventCreated && <p>Event created successfully!</p>}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
  });
  const [eventCreated, setEventCreated] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: "user1", // Replace with actual username and password
        password: "password1",
      });
      const userToken = response.data.token;
      setToken(userToken);
      setShowForm(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const apiKey = "AIzaSyBNCeA13_2L2LgR8WhqE5PqvV3BIPOx7tY"; // Replace with your actual Google Calendar API key
      const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${apiKey}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setEventCreated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Create Google Calendar Event
        </h1>

        {!token ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            onClick={handleLogin}
          >
            Log In
          </button>
        ) : (
          <>
            {showForm && (
              <form onSubmit={handleCreateEvent}>
                {/* Title */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="title"
                  >
                    Title:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <textarea
                    className="border rounded w-full py-2 px-3"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                {/* Start Date and Time */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="startDateTime"
                  >
                    Start Date and Time:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="datetime-local"
                    name="startDateTime"
                    id="startDateTime"
                    value={formData.startDateTime}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* End Date and Time */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="endDateTime"
                  >
                    End Date and Time:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="datetime-local"
                    name="endDateTime"
                    id="endDateTime"
                    value={formData.endDateTime}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none"
                  type="submit"
                >
                  Create Event
                </button>
              </form>
            )}

            {eventCreated && (
              <p className="text-green-500 mt-4">Event created successfully!</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
