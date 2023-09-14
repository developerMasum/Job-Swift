// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const HrPlatform = () => {
//   return (
//    <div className="bg-gray-100">
//      <div className=" py-16 md:flex container gap-8 mx-auto justify-between items-center mt-8 md:mt-16 px-12 md:0">
//       <div className="w-full md:w-1/2">
//         <img
//           src="https://i.ibb.co/Bg7bL6z/hrdone.png"
//           alt="HR Image"
//           className="w-full md:max-w-md mx-auto "
//         />
//       </div>
//       <div className="w-full space-y-6 mt-6 md:mt-0 md:w-1/2">
//         <h2 className="text-4xl font-bold text-cyan-500 md:text-3xl">
//           Elevate Your Hiring Process with Job Swift
//         </h2>
//         <p className="text-lg text-gray-700 leading-7">
//           Job Swift is your all-in-one ATS solution designed to streamline
//           the hiring process. Discover the perfect candidates faster with our
//           cutting-edge features, including:
//         </p>
//         <ul className="list-disc pl-6 text-gray-700">
//           <li>Effortless Job Posting and Management</li>
//           <li>Advanced Resume Screening</li>
//           <li>Seamless Interview Scheduling</li>
//           <li>Integrated Collaboration Tools</li>
//           <li>Real-time Candidate Tracking</li>
//         </ul>
//         <div>
//           <Link
//             to="/demo-page"
//             className="text-cyan-500 font-bold text-xl flex items-center space-x-1"
//             title="Get My Free Demo"
//           >
//             Get My Free Demo <FaChevronRight />
//           </Link>
//         </div>
//       </div>
//     </div>
//    </div>
//   );
// };

// export default HrPlatform;



import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HrPlatform = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:flex gap-8 justify-between items-center mt-8 md:mt-16">
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/Bg7bL6z/hrdone.png"
            alt="HR Image"
            className="w-full md:max-w-md mx-auto rounded-lg"
          />
        </div>
        <div className="w-full space-y-6 mt-6 md:mt-0 md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-500 md:text-3xl">
            Elevate Your Hiring Process with Job Swift
          </h2>
          <p className="text-lg text-gray-700 leading-7">
            Job Swift is your all-in-one ATS solution designed to streamline
            the hiring process. Discover the perfect candidates faster with our
            cutting-edge features, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Effortless Job Posting and Management</li>
            <li>Advanced Resume Screening</li>
            <li>Seamless Interview Scheduling</li>
            <li>Integrated Collaboration Tools</li>
            <li>Real-time Candidate Tracking</li>
          </ul>
          <div className="max-w-[300px]">
            <Link
              to="/demo-page"
              className="border-b-[1px] border-cyan-500 text-gray-500 font-bold text-xl flex items-center justify-center px-6 py-1 rounded-full hover:bg-border-[1px] hover:text-gray-600 hover:border-cyan-700 transition duration-300 ease-in-out"
              title="Get My Free Demo"
            >
              Get My Free Demo <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrPlatform;

