// import React from "react";

// function AtsFeature() {
//   const features = [
//     {
//       image: "https://i.ibb.co/txPdRDM/resumeparsing.png",
//       title: "Resume Parsing",
//       description:
//         "Effortlessly extract and organize candidate information from resumes.",
//     },
//     {
//       image: "https://i.ibb.co/0jBSBKQ/jobposting.png",
//       title: "Job Posting",
//       description:
//         "Easily create and publish job listings to attract top talent.",
//     },
//     {
//       image: "https://i.ibb.co/yfmYrnV/candidatemanagement.png",
//       title: "Candidate Management",
//       description: "Track and manage candidates throughout the hiring process.",
//     },
//     {
//       image: "https://i.ibb.co/FBz9Bzz/juicy-workflow.png",
//       title: "Customizable Workflows",
//       description:
//         "Create tailored hiring workflows to fit your organization's needs.",
//     },
//     {
//       image: "https://i.ibb.co/HgrzQbY/customize-setting.png",
//       title: "Communication Tools",
//       description: "Streamline communication with candidates and team members.",
//     },
//     {
//       image: "https://i.ibb.co/jWL5Gvn/Analytics-and-Reporting.png",
//       title: "Analytics and Reporting",
//       description:
//         "Gain insights into your hiring process with advanced analytics.",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div className="container mx-auto">
//         <div className=" grid items-center  mx-auto text-center max-w-3xl text-gray-500 p-4">
//           <div className="space-y-4">
//             <h1 className="text-3xl font-bold"> Key Features</h1>
//             <p>
//               An Applicant Tracking System (ATS) is a powerful solution designed
//               to streamline and enhance the recruitment and hiring processes.
//               With an array of robust features, an ATS simplifies the management
//               of candidate data, job postings, and communication.
            
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-24 mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AtsFeature;


import React from "react";

function AtsFeature() {
  const features = [
    {
      image: "https://i.ibb.co/txPdRDM/resumeparsing.png",
      title: "Resume Parsing",
      description:
        "Effortlessly extract and organize candidate information from resumes.",
    },
    {
      image: "https://i.ibb.co/0jBSBKQ/jobposting.png",
      title: "Job Posting",
      description:
        "Easily create and publish job listings to attract top talent.",
    },
    {
      image: "https://i.ibb.co/yfmYrnV/candidatemanagement.png",
      title: "Candidate Management",
      description: "Track and manage candidates throughout the hiring process.",
    },
    {
      image: "https://i.ibb.co/FBz9Bzz/juicy-workflow.png",
      title: "Customizable Workflows",
      description:
        "Create tailored hiring workflows to fit your organization's needs.",
    },
    {
      image: "https://i.ibb.co/HgrzQbY/customize-setting.png",
      title: "Communication Tools",
      description: "Streamline communication with candidates and team members.",
    },
    {
      image: "https://i.ibb.co/jWL5Gvn/Analytics-and-Reporting.png",
      title: "Analytics and Reporting",
      description:
        "Gain insights into your hiring process with advanced analytics.",
    },
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#00756a] mb-4">
          Key Features of Our ATS
        </h1>
        <p className="text-gray-600 mb-8">
          Our Applicant Tracking System simplifies recruitment and hiring with
          these powerful features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-[1px] shadow-md  rounded-lg overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 mx-auto mt-4"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AtsFeature;

