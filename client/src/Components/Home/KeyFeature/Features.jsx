// import React from 'react';
// import { FaSearch, FaClipboard, FaCalendar, FaUserTie, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

// const KeyFeatures = () => {
//   const featureData = [
//     {
//       title: 'Efficient Job Search',
//       description: 'Quickly find and track job opportunities.',
//       Icon: FaSearch,
//     },
//     {
//       title: 'Resume Management',
//       description: 'Organize, review, and manage resumes with ease.',
//       Icon: FaClipboard,
//     },
//     {
//       title: 'Interview Scheduling',
//       description: 'Schedule interviews efficiently and keep records.',
//       Icon: FaCalendar,
//     },
//     {
//       title: 'Candidate Profiles',
//       description: 'Access detailed candidate profiles and information.',
//       Icon: FaUserTie,
//     },
//     {
//       title: 'Application Tracking',
//       description: 'Track the status of job applications seamlessly.',
//       Icon: FaFileAlt,
//     },
//     {
//       title: 'Hiring Success',
//       description: 'Ensure successful hiring with our ATS system.',
//       Icon: FaCheckCircle,
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {featureData.map((feature, index) => (
//             <div key={index} className="p-6 border-[1px] rounded-lg text-center  hover:shadow-xl">
//               <div className="mb-4 text-[#0e7490] text-3xl">
//                 <feature.Icon />
//               </div>
//               <h3 className="text-xl text-gray-500 font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-500">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;


// src/components/AccordionFeatures.js
// src/components/ProfessionalLayout.js




// src/components/ProfessionalLayout.js


// src/components/ProfessionalLayout.js
// src/components/ProfessionalLayout.js
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function ProfessionalLayout() {
  const [features, setFeatures] = useState([
    {
      title: 'Resume Parsing',
      description: 'Automatically extract information from resumes.',
      isOpen: false,
    },
    {
      title: 'Job Posting Management',
      description: 'Create, edit, and manage job postings.',
      isOpen: false,
    },
    {
      title: 'Candidate Tracking',
      description: 'Track candidates throughout the hiring process.',
      isOpen: false,
    },
    {
      title: 'Interview Scheduling',
      description: 'Schedule interviews with candidates seamlessly.',
      isOpen: false,
    },
    {
      title: 'Reporting and Analytics',
      description: 'Generate reports and gain insights into hiring.',
      isOpen: false,
    },
   
  ]);

  return (
    <div className="flex flex-col justify-between items-center gap-4 md:flex-row container mx-auto">
      {/* ATS Features */}
     

      {/* Relevant Content and CTA */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome to JobSwift ATS</h1>
        <p>
          JobSwift ATS is your all-in-one solution for streamlining your hiring process.
          From parsing resumes to scheduling interviews and generating reports, we've got you covered.
          Enhance your hiring experience with JobSwift ATS today!
        </p>
        <div className="mt-8">
          <a
            href="#contact" // Replace with your contact or signup page URL
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

       <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-semibold mb-4">ATS Features</h1>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded p-4 mb-4 ${
              feature.isOpen ? 'bg-blue-100' : ''
            }`}
          >
            <button
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => {
                const updatedFeatures = [...features];
                updatedFeatures[index].isOpen = !updatedFeatures[index].isOpen;
                setFeatures(updatedFeatures);
              }}
            >
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              {feature.isOpen ? <IoIosArrowUp className="inline" /> : <IoIosArrowDown className="inline" />}
            </button>
            {feature.isOpen && (
              <div className="mt-4">
                <p>{feature.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalLayout;
