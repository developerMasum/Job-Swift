// // import React from 'react';
// // import Education from './Education';

// // const countryCodes = [
// //   { code: '+1', flag: '🇺🇸' },
// //   { code: '+44', flag: '🇬🇧' },
// //   // Add more country codes and flags
// // ];

// // const ApplicationForm = () => {
// //   return (
// //     <div className="container mx-auto p-6 bg-white">
// //       <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
// //       <form className="space-y-4">
// //         <div className="flex space-x-2">
// //           <div className="w-1/2">
// //             <label className="block">First Name</label>
// //             <input className="border rounded w-full" type="text" placeholder="First Name" />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block">Last Name</label>
// //             <input className="border rounded w-full" type="text" placeholder="Last Name" />
// //           </div>
// //         </div>
// //         <div>
// //           <label className="block">Email</label>
// //           <input className="border rounded w-full" type="email" placeholder="Email" />
// //         </div>
// //         <div className="relative">
// //           <label className="block">Phone Number</label>
// //           <div className="relative inline-block w-full">
// //             <select className="border rounded w-1/4">
// //               {countryCodes.map((country) => (
// //                 <option key={country.code} value={country.code}>
// //                   {country.flag} {country.code}
// //                 </option>
// //               ))}
// //             </select>
// //             <input className="border rounded w-3/4 pl-12" type="tel" placeholder="Phone Number" />
// //           </div>
// //         </div>
// //         <div>
// //           <label className="block">Address</label>
// //           <textarea className="border rounded w-full h-20" placeholder="Address"></textarea>
// //         </div>
// //         <div>
// //           <label className="block">Education</label>
// //           <input className="border rounded w-full" type="text" placeholder="Education" />
// //         </div>
// //         <div>
// //           <label className="block">Photo (optional)</label>
// //           <input className="border rounded w-full" type="file" />
// //         </div>

// //       </form>
// //       <Education></Education>
// //     </div>
// //   );
// // };

// // export default ApplicationForm;
// // import React, { useState, useEffect } from 'react';
// // import Education from './Education';
// // import { FaFile, FaCamera, FaTrash } from 'react-icons/fa';

// // const countryCodes = [
// //   { code: '+1', flag: '🇺🇸' },
// //   { code: '+44', flag: '🇬🇧' },
// //   // Add more country codes and flags
// // ];

// // const ApplicationForm = () => {
// //   const [isDraggingOver, setIsDraggingOver] = useState(false);
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleFileDrop = (e) => {
// //     e.preventDefault();
// //     setIsDraggingOver(false);

// //     const file = e.dataTransfer.files[0];
// //     setSelectedFile(file);
// //   };

// //   useEffect(() => {
// //     const handleDocumentDragOver = (e) => {
// //       e.preventDefault();
// //     };

// //     const handleDocumentDrop = (e) => {
// //       e.preventDefault();
// //       setIsDraggingOver(false);

// //       const file = e.dataTransfer.files[0];
// //       setSelectedFile(file);
// //     };

// //     document.addEventListener('dragover', handleDocumentDragOver);
// //     document.addEventListener('drop', handleDocumentDrop);

// //     return () => {
// //       document.removeEventListener('dragover', handleDocumentDragOver);
// //       document.removeEventListener('drop', handleDocumentDrop);
// //     };
// //   }, []);

// //   const handleFileSelection = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //   };

// //   const handleRemovePhoto = () => {
// //     setSelectedFile(null);
// //   };

// //   return (
// //     <div className="container mx-auto p-6 bg-white">
// //       <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
// //       <form className="space-y-4">
// //         <div className="flex space-x-2">
// //           <div className="w-1/2">
// //             <label className="block">First Name</label>
// //             <input className="border rounded w-full" type="text" placeholder="First Name" />
// //           </div>
// //           <div className="w-1/2">
// //             <label className="block">Last Name</label>
// //             <input className="border rounded w-full" type="text" placeholder="Last Name" />
// //           </div>
// //         </div>
// //         <div>
// //           <label className="block">Email</label>
// //           <input className="border rounded w-full" type="email" placeholder="Email" />
// //         </div>
// //         <div className="relative">
// //           <label className="block">Phone Number</label>
// //           <div className="relative inline-block w-full">
// //             <select className="border rounded w-1/4">
// //               {countryCodes.map((country) => (
// //                 <option key={country.code} value={country.code}>
// //                   {country.flag} {country.code}
// //                 </option>
// //               ))}
// //             </select>
// //             <input className="border rounded w-3/4 pl-12" type="tel" placeholder="Phone Number" />
// //           </div>
// //         </div>
// //         <div>
// //           <label className="block">Address</label>
// //           <textarea className="border rounded w-full h-20" placeholder="Address"></textarea>
// //         </div>
// //         <div
// //           className={`border rounded w-full p-4 ${
// //             isDraggingOver ? 'border-blue-500' : 'border-gray-300'
// //           }`}
// //           onDragOver={(e) => {
// //             e.preventDefault();
// //             setIsDraggingOver(true);
// //           }}
// //           onDragLeave={() => setIsDraggingOver(false)}
// //           onDrop={handleFileDrop}
// //         >
// //           <label className="block mb-1">Photo (optional)</label>
// //           <div className="relative flex items-center">
// //             {selectedFile ? (
// //               <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
// //                 <img
// //                   src={URL.createObjectURL(selectedFile)}
// //                   alt="Selected"
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <button
// //                   className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-700"
// //                   onClick={handleRemovePhoto}
// //                 >
// //                   <FaTrash />
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mr-4">
// //                 <FaCamera className="w-6 h-6" />
// //               </div>
// //             )}
// //             <div>
// //               <input
// //                 className="hidden"
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleFileSelection}
// //               />
// //               <label
// //                 htmlFor="fileInput"
// //                 className={`cursor-pointer text-sm ${
// //                   selectedFile ? 'text-gray-500' : 'text-blue-500 hover:text-blue-700'
// //                 }`}
// //               >
// //                 {selectedFile ? 'Change' : 'Upload'} Photo
// //               </label>
// //               <p className="text-xs text-gray-500">Drag and drop a file here</p>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //       <Education />
// //     </div>
// //   );
// // };

// // export default ApplicationForm;
// import React, { useState, useEffect } from 'react';
// import Education from './Education';
// import { FaCamera, FaTrash, FaFileUpload } from 'react-icons/fa';

// const countryCodes = [
//   { code: '+1', flag: '🇺🇸' },
//   { code: '+44', flag: '🇬🇧' },
//   // Add more country codes and flags
// ];

// const ApplicationForm = () => {
//   const [isDraggingOver, setIsDraggingOver] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     setIsDraggingOver(false);
//     handleFileSelection(e.dataTransfer.files[0]);
//   };

//   const handleFileSelection = (file) => {
//     setSelectedFile(file);
//   };

//   const handleFileUpload = async (e) => {
//     setIsUploading(true);
//     const file = e.target.files[0];

//     if (file) {
//       setSelectedFile(file);
//     }

//     setIsUploading(false);
//   };

//   const handleRemovePhoto = () => {
//     setSelectedFile(null);
//   };

//   useEffect(() => {
//     const handleDocumentDragOver = (e) => {
//       e.preventDefault();
//     };

//     const handleDocumentDrop = (e) => {
//       e.preventDefault();
//       setIsDraggingOver(false);
//       handleFileSelection(e.dataTransfer.files[0]);
//     };

//     document.addEventListener('dragover', handleDocumentDragOver);
//     document.addEventListener('drop', handleDocumentDrop);

//     return () => {
//       document.removeEventListener('dragover', handleDocumentDragOver);
//       document.removeEventListener('drop', handleDocumentDrop);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
//       <form className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block">First Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200" type="text" placeholder="First Name" />
//           </div>
//           <div>
//             <label className="block">Last Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200"  type="text" placeholder="Last Name" />
//           </div>
//         </div>
//         <div>
//           <label className="block">Email</label>
//           <input className="border-[1px] rounded w-full p-2 border-green-200"  type="email" placeholder="Email" />
//         </div>
//         <div>
//           <label className="block">Address</label>
//           <textarea className="border-[1px] rounded w-full p-2 border-green-200"  placeholder="Address"></textarea>
//         </div>
//         <div className="relative">
//           <label className="block">Phone Number</label>
//           <div className=" relative inline-block w-full">
//             <select
//               className="border-[1px] border-green-200 p-2  rounded w-1/4"
//               value={selectedCountryCode}
//               onChange={(e) => setSelectedCountryCode(e.target.value)}
//             >
//               {countryCodes.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {country.flag} {country.code}
//                 </option>
//               ))}
//             </select>
//             <input
//               className="border-[1px] p-2 border-green-200 rounded w-3/4 pl-12"
//               type="tel"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="relative">
//           <label className="block">Photo (optional)</label>
//           <div className="border-[1px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
//             {selectedFile ? (
//               <div className="relative">
//                 <img
//                   src={URL.createObjectURL(selectedFile)}
//                   alt="Selected"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//                 <button
//                   className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
//                   onClick={handleRemovePhoto}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center space-y-2">
//                 {isUploading ? (
//                   <span>Uploading...</span>
//                 ) : (
//                   <>
//                     <FaCamera className="w-12 h-12 text-gray-500" />
//                     <label
//                       className={`cursor-pointer ${
//                         isDraggingOver ? 'border-blue-500' : 'border-gray-400'
//                       } border-2 rounded-md p-2`}
//                       onDragOver={(e) => {
//                         e.preventDefault();
//                         setIsDraggingOver(true);
//                       }}
//                       onDragLeave={() => setIsDraggingOver(false)}
//                       onDrop={handleFileDrop}
//                     >
//                       {isDraggingOver ? 'Drop here' : 'Drag and drop or click'}
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleFileUpload}
//                     />
//                     <span>Max size: 5MB</span>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//         {/* Rest of the code (Education section) */}
//       </form>
//       <Education />
//     </div>
//   );
// };

// export default ApplicationForm;
// import React, { useState, useEffect } from 'react';
// import Education from './Education';
// import axios from 'axios';
// import { FaCamera, FaTrash, FaFileUpload } from 'react-icons/fa';

// const countryCodes = [
//   { code: '+1', flag: '🇺🇸' },
//   { code: '+44', flag: '🇬🇧' },
//   // Add more country codes and flags
// ];

// const ApplicationForm = () => {
//   const [isDraggingOver, setIsDraggingOver] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     setIsDraggingOver(false);
//     handleFileSelection(e.dataTransfer.files[0]);
//   };

//   const handleFileSelection = (file) => {
//     setSelectedFile(file);
//   };

//   const handleFileUpload = async (e) => {
//     setIsUploading(true);
//     const file = e.target.files[0];

//     if (file) {
//       setSelectedFile(file);
//     }

//     setIsUploading(false);
//   };

//   const handleRemovePhoto = () => {
//     setSelectedFile(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//       await axios.post('/api/submit-form', formData);
//       console.log('Form submitted successfully');
//       // Clear form after successful submission
//       setSelectedFile(null);
//       setPhoneNumber('');
//     } catch (error) {
//       console.error('Error submitting form', error);
//     }
//   };

//   useEffect(() => {
//     const handleDocumentDragOver = (e) => {
//       e.preventDefault();
//     };

//     const handleDocumentDrop = (e) => {
//       e.preventDefault();
//       setIsDraggingOver(false);
//       handleFileSelection(e.dataTransfer.files[0]);
//     };

//     document.addEventListener('dragover', handleDocumentDragOver);
//     document.addEventListener('drop', handleDocumentDrop);

//     return () => {
//       document.removeEventListener('dragover', handleDocumentDragOver);
//       document.removeEventListener('drop', handleDocumentDrop);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block">First Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200" name="firstName" type="text" placeholder="First Name" required />
//           </div>
//           <div>
//             <label className="block">Last Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200" name="lastName" type="text" placeholder="Last Name" required />
//           </div>
//         </div>
//         <div>
//           <label className="block">Email</label>
//           <input className="border-[1px] rounded w-full p-2 border-green-200" name="email" type="email" placeholder="Email" required />
//         </div>
//         <div>
//           <label className="block">Address</label>
//           <textarea className="border-[1px] rounded w-full p-2 border-green-200" name="address" placeholder="Address" required />
//         </div>
//         <div className="relative">
//           <label className="block">Phone Number</label>
//           <div className=" relative inline-block w-full">
//             <select
//               className="border-[1px] border-green-200 p-2  rounded w-1/4"
//               name="countryCode"
//               value={selectedCountryCode}
//               onChange={(e) => setSelectedCountryCode(e.target.value)}
//             >
//               {countryCodes.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {country.flag} {country.code}
//                 </option>
//               ))}
//             </select>
//             <input
//               className="border-[1px] p-2 border-green-200 rounded w-3/4 pl-12"
//               type="tel"
//               placeholder="Phone Number"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="relative">
//           <label className="block">Photo (optional)</label>
//           <div className="border-[1px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
//             {selectedFile ? (
//               <div className="relative">
//                 <img
//                   src={URL.createObjectURL(selectedFile)}
//                   alt="Selected"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//                 <button
//                   className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
//                   onClick={handleRemovePhoto}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center space-y-2">
//                 {isUploading ? (
//                   <span>Uploading...</span>
//                 ) : (
//                   <>
//                     <FaCamera className="w-12 h-12 text-gray-500" />
//                     <label
//                       className={`cursor-pointer ${
//                         isDraggingOver ? 'border-blue-500' : 'border-gray-400'
//                       } border-2 rounded-md p-2`}
//                       onDragOver={(e) => {
//                         e.preventDefault();
//                         setIsDraggingOver(true);
//                       }}
//                       onDragLeave={() => setIsDraggingOver(false)}
//                       onDrop={handleFileDrop}
//                     >
//                       {isDraggingOver ? 'Drop here' : 'Drag and drop or click'}
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       name="photo"
//                       onChange={handleFileUpload}
//                     />
//                     <span>Max size: 5MB</span>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//           Submit
//         </button>
//       </form>
//       <Education />
//     </div>
//   );
// };

// export default ApplicationForm;

// import React, { useState, useEffect } from 'react';
// import Education from './Education';
// import axios from 'axios';
// import { FaCamera, FaTrash } from 'react-icons/fa';

// const countryCodes = [
//   { code: '+1', flag: '🇺🇸' },
//   { code: '+44', flag: '🇬🇧' },
//   // Add more country codes and flags
// ];

// const ApplicationForm = () => {
//   const [isDraggingOver, setIsDraggingOver] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     setIsDraggingOver(false);
//     handleFileSelection(e.dataTransfer.files[0]);
//   };

//   const handleFileSelection = (file) => {
//     setSelectedFile(file);
//   };

//   const handleFileUpload = async (e) => {
//     setIsUploading(true);
//     const file = e.target.files[0];

//     if (file) {
//       setSelectedFile(file);
//     }

//     setIsUploading(false);
//   };

//   const handleRemovePhoto = () => {
//     setSelectedFile(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     // Iterate through the form data and log key-value pairs
//     for (var pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }
//   };

//   useEffect(() => {
//     const handleDocumentDragOver = (e) => {
//       e.preventDefault();
//     };

//     const handleDocumentDrop = (e) => {
//       e.preventDefault();
//       setIsDraggingOver(false);
//       handleFileSelection(e.dataTransfer.files[0]);
//     };

//     document.addEventListener('dragover', handleDocumentDragOver);
//     document.addEventListener('drop', handleDocumentDrop);

//     return () => {
//       document.removeEventListener('dragover', handleDocumentDragOver);
//       document.removeEventListener('drop', handleDocumentDrop);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block">First Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200" name="firstName" type="text" placeholder="First Name" required />
//           </div>
//           <div>
//             <label className="block">Last Name</label>
//             <input className="border-[1px] rounded w-full p-2 border-green-200" name="lastName" type="text" placeholder="Last Name" required />
//           </div>
//         </div>
//         <div>
//           <label className="block">Email</label>
//           <input className="border-[1px] rounded w-full p-2 border-green-200" name="email" type="email" placeholder="Email" required />
//         </div>
//         <div>
//           <label className="block">Address</label>
//           <textarea className="border-[1px] rounded w-full p-2 border-green-200" name="address" placeholder="Address" required />
//         </div>
//         <div className="relative">
//           <label className="block">Phone Number</label>
//           <div className=" relative inline-block w-full">
//             <select
//               className="border-[1px] border-green-200 p-2  rounded w-1/4"
//               name="countryCode"
//               value={selectedCountryCode}
//               onChange={(e) => setSelectedCountryCode(e.target.value)}
//             >
//               {countryCodes.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {country.flag} {country.code}
//                 </option>
//               ))}
//             </select>
//             <input
//               className="border-[1px] p-2 border-green-200 rounded w-3/4 pl-12"
//               type="tel"
//               placeholder="Phone Number"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="relative">
//           <label className="block">Photo (optional)</label>
//           <div className="border-[1px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
//             {selectedFile ? (
//               <div className="relative">
//                 <img
//                   src={URL.createObjectURL(selectedFile)}
//                   alt="Selected"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//                 <button
//                   className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
//                   onClick={handleRemovePhoto}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center space-y-2">
//                 {isUploading ? (
//                   <span>Uploading...</span>
//                 ) : (
//                   <>
//                     <FaCamera className="w-12 h-12 text-gray-500" />
//                     <label
//                       className={`cursor-pointer ${
//                         isDraggingOver ? 'border-blue-500' : 'border-gray-400'
//                       } border-2 rounded-md p-2`}
//                       onDragOver={(e) => {
//                         e.preventDefault();
//                         setIsDraggingOver(true);
//                       }}
//                       onDragLeave={() => setIsDraggingOver(false)}
//                       onDrop={handleFileDrop}
//                     >
//                       {isDraggingOver ? 'Drop here' : 'Drag and drop or click'}
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       name="photo"
//                       onChange={handleFileUpload}
//                     />
//                     <span>Max size: 5MB</span>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//           Submit
//         </button>
//       </form>
//       <Education />
//     </div>
//   );
// };

// export default ApplicationForm;

import React, { useState, useEffect } from "react";
import Education from "./Education";
import axios from "axios";
import { FaCamera, FaTrash } from "react-icons/fa";
import ExprienceForm from "./ExprienceForm";
import Resume from "./Resume";

const countryCodes = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  // Add more country codes and flags
];

const ApplicationForm = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code
  );

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    handleFileSelection(e.dataTransfer.files[0]);
  };

  const handleFileSelection = (file) => {
    setSelectedFile(file);
  };

  const handleFileUpload = async (e) => {
    setIsUploading(true);
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }

    setIsUploading(false);
  };

  const handleRemovePhoto = () => {
    setSelectedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("photo", selectedFile);

    // Iterate through the form data and log key-value pairs
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // You can also send the form data to the server if needed
    try {
      await axios.post("/api/submit-form", formData);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  useEffect(() => {
    const handleDocumentDragOver = (e) => {
      e.preventDefault();
    };

    const handleDocumentDrop = (e) => {
      e.preventDefault();
      setIsDraggingOver(false);
      handleFileSelection(e.dataTransfer.files[0]);
    };

    document.addEventListener("dragover", handleDocumentDragOver);
    document.addEventListener("drop", handleDocumentDrop);

    return () => {
      document.removeEventListener("dragover", handleDocumentDragOver);
      document.removeEventListener("drop", handleDocumentDrop);
    };
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white">
      <div className="underline-offset-2">
        <h2 className="text-2xl font-semibold mb-6 text-gray-500 uppercase text-center">
          Personal Details
        </h2>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">First Name</label>
            <input
              className="border-[1px] rounded w-full p-2 border-green-200"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block">Last Name</label>
            <input
              className="border-[1px] rounded w-full p-2 border-green-200"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <label className="block">Email</label>
          <input
            className="border-[1px] rounded w-full p-2 border-green-200"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="block">Address</label>
          <textarea
            className="border-[1px] rounded w-full p-2 border-green-200"
            name="address"
            placeholder="Address"
            required
          />
        </div>
        <div className="relative">
          <label className="block">Phone Number</label>
          <div className=" relative inline-block w-full">
            <select
              className="border-[1px] border-green-200 p-2  rounded w-1/4"
              name="countryCode"
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              className="border-[1px] p-2 border-green-200 rounded w-3/4 pl-12"
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="relative">
          <label className="block">Photo (optional)</label>
          <div className="border-[2px] border-green-400 border-dashed  p-4 rounded-md flex items-center justify-center">
            {selectedFile ? (
              <div className="relative">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={handleRemovePhoto}
                >
                  <FaTrash />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                {isUploading ? (
                  <span>Uploading...</span>
                ) : (
                  <>
                    <FaCamera className="w-12 h-12 text-gray-500" />
                    <label
                      className={`cursor-pointer ${
                        isDraggingOver ? "border-blue-500" : "border-gray-400"
                      } border-2 rounded-md p-2`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDraggingOver(true);
                      }}
                      onDragLeave={() => setIsDraggingOver(false)}
                      onDrop={handleFileDrop}
                    >
                      {isDraggingOver ? "Drop here" : "Drag and drop or click"}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      name="photo"
                      onChange={handleFileUpload}
                    />
                    <span>Max size: 5MB</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
      <Education />
      <ExprienceForm></ExprienceForm>
      <Resume></Resume>
      <button className="bg-green-500 px-8 py-1 rounded-md font-semibold text-white w-full mt-6">
        Submit Application
      </button>
    </div>
  );
};

export default ApplicationForm;

