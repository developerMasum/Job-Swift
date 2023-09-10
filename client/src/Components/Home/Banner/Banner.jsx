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
// import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import homeBanner from "../../../assets/Image/homeBanner.webp"
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <section className="bg-[#00756a] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-10">
        <div className="md:w-1/2 md:text-left md:pr-12">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            Welcome to JobSwift ATS
          </h1>

          <p className="lg:md:text-4xl text-2xl text-white font-bold mb-8 mt-10">
            Big ideas. Amazing talent. The recruiting software that brings them together.
          </p>
          <div>
            <TypeAnimation
              sequence={[
                "Find",
                1000,
                "Hire",
                1000,
                "Onboard",
                1000,
                "And Manage the right person for every job.",
                800,
              ]}
              wrapper="p"
              speed={50}
              style={{ fontSize: "1.5rem", marginBottom: "1rem", }}
              className="text-sky-300 font-bold "
              repeat={Infinity}
            />
          </div>
          <div className="flex mt-7 gap-11">
            {/* <a
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
            </a> */}
            <div className="lg:md:flex items-center">
              <div className="flex items-center">
                <div><BsPlayCircleFill className="text-sky-300"></BsPlayCircleFill></div>
                <div>
                  <Link className="text-sm ms-2 hover:underline">SEE WORKABLE IN ACTION</Link> <span className="mx-4">or</span>
                </div>
              </div>

              <div className="lg:md:my-0 my-2">
                <Link><button className=" border py-2 px-4 rounded-lg hover:text-green-900 hover:bg-white flex items-center ">Get stared <MdKeyboardArrowRight className="text-sky-300"></MdKeyboardArrowRight></button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:text-right">
          <img
            className="w-full  mx-auto  lg:md:h-[500px] lg:md:-mt-8 animate-pulse		"
            src={homeBanner}
            alt="ATS App Screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
