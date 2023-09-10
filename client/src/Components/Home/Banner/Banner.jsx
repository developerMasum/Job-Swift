// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Typed from "react-typed";

// const Banner = () => {
//   return (
//     <div className="bg-[#00756a] text-white">
//       <div className="container mx-auto md:flex justify-between p-20 md:items-center">
//         <div className="md:w-1/2 md:text-left md:pr-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-4">
//             Welcome to JobSwift ATS
//           </h1>
//           <Typed
//             className="text-xl sm:text-2xl md:text-4xl font-bold"
//             strings={[
//               "Advanced ATS Solutions",
//               "Streamlined Recruitment Tools",
//               "Efficient Hiring Solutions",
//             ]}
//             typeSpeed={120}
//             backSpeed={140}
//             loop
//           />
//           <p className="text-lg text-gray-300 mt-6 mb-8">
//             Discover the power of our Applicant Tracking System (ATS). Effortlessly
//             manage job listings, track applicants, schedule interviews, and make
//             data-driven hiring decisions with JobSwift ATS.
//           </p>
//           <div className="flex space-x-4 mt-16">
//             <button className="border-[2px] border-white text-white font-semibold hover:bg-white hover:text-[#00756a] py-2 px-4 rounded-lg text-lg flex items-center justify-center transition-transform transform hover:scale-105">
//               Get Free Demo <FaArrowRight className="ml-2" />
//             </button>
//             <button className="border-b-[2px] border-white text-white font-semibold hover:bg-white hover:text-[#00756a] py-2 px-4 rounded-lg text-lg flex items-center justify-center transition-transform transform hover:scale-105">
//               Learn More <FaArrowRight className="ml-2" />
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2 md:text-right">
//           <img
//             className="w-full max-w-sm mx-auto md:w-auto"
//             src="https://i.ibb.co/pxXPCBf/finalbanner03.png"
//             alt="ATS App Screenshot"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="bg-[#00756a] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-10">
        <div className="md:w-1/2 md:text-left md:pr-12">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            Welcome to JobSwift ATS
          </h1>
          <TypeAnimation
            sequence={[
              "Advanced ATS Solutions",
              1000,
              "Streamlined Recruitment Tools",
              1000,
              "Efficient Hiring Solutions",
              1000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
            repeat={Infinity}
          />
          <p className="text-lg text-gray-300 mb-8">
            Discover the power of our Applicant Tracking System (ATS).
            Effortlessly manage job listings, track applicants, schedule
            interviews, and make data-driven hiring decisions with JobSwift ATS.
            Effortlessly manage job listings, track applicants, schedule
          </p>
          <div className="flex space-x-4 mt-20">
            <a
              href="#"
              className=" border-[1px] hover:bg-white hover:text-gray-500  py-2 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 flex items-center"
            >
              Get Free Demo <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="border-b-2 border-white text-white font-semibold hover:bg-white hover:text-gray-500 py-2 px-6 rounded-full text-lg transition-transform transform hover:scale-105 flex items-center"
            >
              Learn More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:text-right">
          <img
            className="w-full max-w-md mx-auto md:w-auto"
            src="https://i.ibb.co/pxXPCBf/finalbanner03.png"
            alt="ATS App Screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
