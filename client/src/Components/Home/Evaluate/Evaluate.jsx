// import React from "react";
// import {
//   FaGlobe,
//   FaBolt,
//   FaShieldAlt,
//   FaMapMarkedAlt,
//   FaBullhorn,
//   FaHandHoldingHeart,
// } from "react-icons/fa";

// const reasonsToChooseJobSwift = [
//   {
//     title: "World-class partners",
//     description:
//       "Collaborate with industry-leading partners for top-notch solutions.",
//     iconColor: "#00756a",
//     icon: 'https://i.ibb.co/NZL8ybW/startup.png',
//   },
//   {
//     title: "Fast, global support",
//     description: "Get quick and responsive support anytime, anywhere.",
//     iconColor: "#00756a",
//     icon: 'https://i.ibb.co/3S7Mn6J/earth.png',
//   },
//   {
//     title: "Trusted security",
//     description:
//       "Protect your data and candidates with industry-standard security.",
//     iconColor: "#00756a",
//     icon: 'https://i.ibb.co/HNhtRBX/trust.png',
//   },
//   {
//     title: "Anywhere recruiting",
//     description:
//       "Recruit from anywhere in the world with JobSwift's flexibility.",
//     iconColor: "#00756a",
//     icon:'https://i.ibb.co/51VVrpZ/recruitment.png',
//   },
//   {
//     title: "Expert advice",
//     description:
//       "Access industry insights and advice to optimize your recruitment.",
//     iconColor: "#00756a",
//     icon: 'https://i.ibb.co/mvQYPhj/advice.png',
//   },
//   {
//     title: "Assisted onboarding",
//     description:
//       "Get guided support during your onboarding process for a smooth start.",
//     iconColor: "#00756a",
//     icon: 'https://i.ibb.co/bdJTFf0/onboarding.png',
//   },
// ];

// const Evaluate = () => {
//   return (
//     <div className=" py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center  text-teal-800 mb-12">
//           More reasons companies around the <br /> world choose JobSwift
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {reasonsToChooseJobSwift.map((reason, index) => (
//             <div
//               key={index}
//               className="border-[1px]  rounded-lg md:p-6  hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <div className="flex w-[100px] justify-center mb-4">
//                <img className="w-full" src={reason.icon} alt="" />
//               </div>
//               <h3 className="text-2xl font-semibold mb-2 text-center text-gray-600">
//                 {reason.title}
//               </h3>
//               <p className="text-gray-500 text-center mb-4">{reason.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Evaluate;

// import React from "react";

// const reasonsToChooseJobSwift = [
//   {
//     title: "World-class partners",
//     description:
//       "Collaborate with industry-leading partners for top-notch solutions.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/NZL8ybW/startup.png",
//   },
//   {
//     title: "Fast, global support",
//     description: "Get quick and responsive support anytime, anywhere.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/3S7Mn6J/earth.png",
//   },
//   {
//     title: "Trusted security",
//     description:
//       "Protect your data and candidates with industry-standard security.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/HNhtRBX/trust.png",
//   },
//   {
//     title: "Anywhere recruiting",
//     description:
//       "Recruit from anywhere in the world with JobSwift's flexibility.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/51VVrpZ/recruitment.png",
//   },
//   {
//     title: "Expert advice",
//     description:
//       "Access industry insights and advice to optimize your recruitment.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/mvQYPhj/advice.png",
//   },
//   {
//     title: "Assisted onboarding",
//     description:
//       "Get guided support during your onboarding process for a smooth start.",
//     iconColor: "#00756a",
//     icon: "https://i.ibb.co/bdJTFf0/onboarding.png",
//   },
// ];

// const Evaluate = () => {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-8">
//           More Reasons to Choose JobSwift
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {reasonsToChooseJobSwift.map((reason, index) => (
//             <div
//               key={index}
//               className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex"
//             >
//               <div className="w-16 h-16 mr-4">
//                 <img className="w-full h-full" src={reason.icon} alt="" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {reason.title}
//                 </h3>
//                 <p className="text-gray-600">{reason.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Evaluate;

import React from "react";

const reasonsToChooseJobSwift = [
  {
    title: "World-class partners",
    description:
      "Collaborate with industry-leading partners for top-notch solutions.",
    icon: "https://i.ibb.co/NZL8ybW/startup.png",
  },
  {
    title: "Fast, global support",
    description: "Get quick and responsive support anytime, anywhere.",
    icon: "https://i.ibb.co/3S7Mn6J/earth.png",
  },
  {
    title: "Trusted security",
    description:
      "Protect your data and candidates with industry-standard security.",
    icon: "https://i.ibb.co/HNhtRBX/trust.png",
  },
  {
    title: "Anywhere recruiting",
    description:
      "Recruit from anywhere in the world with JobSwift's flexibility.",
    icon: "https://i.ibb.co/51VVrpZ/recruitment.png",
  },
  {
    title: "Expert advice",
    description:
      "Access industry insights and advice to optimize your recruitment.",
    icon: "https://i.ibb.co/mvQYPhj/advice.png",
  },
  {
    title: "Assisted onboarding",
    description:
      "Get guided support during your onboarding process for a smooth start.",
    icon: "https://i.ibb.co/bdJTFf0/onboarding.png",
  },
];

const Evaluate = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
          Why Choose JobSwift?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasonsToChooseJobSwift.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer flex items-center"
            >
              <div className="w-16 h-16 mr-4">
                <img
                  className="w-full h-full object-contain"
                  src={reason.icon}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
