// import Lottie from "lottie-react";
// import ats from "..//../../images/ats.json";
// const NewBanner = () => {
//   return (
//     <div>
//       <div>
//         <h1>Well Come To JobSwift</h1>
//       </div>
//       <div className="md:flex justify-between items-center">
//         <div className="md:w-2/5">
//           <Lottie animationData={ats} loop={true} />;
//         </div>
//         <div className="md:w-3/5">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
//             quas at officiis nostrum in sit enim minus nemo culpa odit quaerat
//             aspernatur recusandae esse corporis, dolorum tempore soluta?
//             Dolores, ducimus.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBanner;




// import React from "react";
// import Lottie from "lottie-react";
// import ats from "..//../../images/ats.json";

// const NewBanner = () => {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900">
//             Welcome to JobSwift
//           </h1>
//         </div>
//         <div className="md:flex justify-between items-center mt-8">
//           <div className="md:w-1/2">
//             <Lottie animationData={ats} loop={true} />
//           </div>
//           <div className="md:w-1/2 mt-6 md:mt-0">
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
//               quas at officiis nostrum in sit enim minus nemo culpa odit
//               quaerat aspernatur recusandae esse corporis, dolorum tempore
//               soluta? Dolores, ducimus.
//             </p>
//             <div className="mt-4">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBanner;
// import React from "react";
// import Lottie from "lottie-react";
// import ats from "../../../images/ats.json";
// import { AiFillInfoCircle } from "react-icons/ai";

// const NewBanner = () => {
//   return (
//     <div className="bg-blue-900 py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold text-white">
//             Welcome to JobSwift
//           </h1>
//           <p className="mt-2 text-lg text-blue-300">
//             Your Ultimate ATS Solution
//           </p>
//         </div>
//         <div className="md:flex justify-between items-center mt-8">
//           <div className="md:w-1/2">
//             <Lottie animationData={ats} loop={true} />
//           </div>
//           <div className="md:w-1/2 mt-6 md:mt-0">
//             <p className="text-white">
//               Connect with the best talents effortlessly with our advanced
//               Applicant Tracking System. Simplify your recruitment process and
//               find the perfect fit for your team.
//             </p>
//             <div className="mt-6">
//               <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300">
//                 Learn More
//               </button>
//               <span className="ml-2 text-blue-300">
//                 <AiFillInfoCircle />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBanner;
import React from "react";
import Lottie from "lottie-react";
import ats from "../../assets/ats.json";
import { FaUsers, FaFileAlt } from "react-icons/fa";

const NewBanner = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-cyan-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            Welcome to JobSwift
          </h1>
          <p className="mt-2 text-lg text-blue-200">
            Your Ultimate ATS Solution
          </p>
        </div>
        <div className="md:flex justify-between items-center mt-8">
          <div className="md:w-1/2">
            <Lottie animationData={ats} loop={true} />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 text-white">
            <p>
              Connect with the best talents effortlessly with our advanced
              Applicant Tracking System. Simplify your recruitment process and
              find the perfect fit for your team.
            </p>
            <div className="mt-6 flex">
              <div className="mr-4">
                <FaUsers className="text-4xl text-blue-200" />
                <p className="mt-2 text-sm">Streamlined Hiring</p>
              </div>
              <div>
                <FaFileAlt className="text-4xl text-blue-200" />
                <p className="mt-2 text-sm">Efficient Management</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBanner;

