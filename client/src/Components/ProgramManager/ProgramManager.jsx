import { AiOutlineRight } from "react-icons/ai";

import img1 from "../../assets/Image/programManager1.png";
import img2 from "../../assets/Image/programManager2.png";
import img3 from "../../assets/Image/programManager3.png";
import img4 from "../../assets/Image/programManager4.png";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProgramManager = () => {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-3xl  font-bold text-center text-swift line leading-tight">
        Manage your entire process, <br />
        from sourcing to employee onboarding <br />
        and management
      </h1>
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-5">
        {/* card 01 */}
        <div className=" transition duration-1000 ease-in-out transform hover:scale-105 ps-4 h-[600px]">
          <img className="mx-auto px-4 md:h-[300px]" src={img1} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-xl text-red-400 font-bold mb-2">
              SOURCE & ATTRACT
            </h4>
            <h4 className="text-lg font-semibold text-swift">
              Find and attract candidates
            </h4>
            <p className="text-second font-semibold my-6">
              Fill your pipeline quickly with one-click job posting to 200+
              sites, <br /> AI-powered sourcing, employee referrals and more.
            </p>
            <Link
              to={"/hr-data"}
              className=" md:mt-8 mt-2 md:text-start text-center flex items-center justify-center gap-2 text-teal-700 font-bold"
            >
              Learn More
              <span>
                <FaChevronRight className="inline-block"></FaChevronRight>
              </span>
            </Link>
          </div>
        </div>
        {/* card 02 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105 ps-4 h-[600px]">
          <img className="mx-auto px-4 md:h-[300px]" src={img2} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-xl text-blue-400 font-bold mb-2">
              EVALUATE & COLLABORATE
            </h4>
            <h4 className="text-lg text-swift font-semibold">
              Move the right applicants forward
            </h4>
            <p className="text-second font-semibold my-6">
              Collaborate with hiring teams to evaluate applicants, gather{" "}
              <br />
              feedback and decide who's best, all in one recruiting system.
            </p>
            <Link
              to={"/single-pay"}
              className=" md:mt-8 mt-2 md:text-start text-center flex items-center justify-center gap-2 text-teal-700 font-bold"
            >
              Learn More
              <span>
                <FaChevronRight className="inline-block"></FaChevronRight>
              </span>
            </Link>
          </div>
        </div>
        {/* card 03 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105 ps-4 h-[600px]">
          <img className="mx-auto px-4 md:h-[300px]" src={img3} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-xl text-indigo-500 font-bold mb-2">
              AUTOMATE & HIRE
            </h4>
            <h4 className="text-lg text-swift font-semibold">
              Make the best hire, in half the time
            </h4>
            <p className="text-second font-semibold my-6">
              Fill your pipeline quickly with one-click job posting to <br />{" "}
              200+ sites, AI-powered sourcing, employee referrals and more.
            </p>
            <p className=" md:mt-8 mt-2 md:text-start text-center flex items-center justify-center gap-2 text-teal-700 font-bold">
              Learn More
              <span>
                <FaChevronRight className="inline-block"></FaChevronRight>
              </span>
            </p>
          </div>
        </div>
        {/* card 04 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105 ps-4 h-[600px]">
          <img className="mx-auto px-4 md:h-[300px]" src={img4} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-xl text-teal-400 font-bold mb-2">
              ONBOARD & MANAGE
            </h4>
            <h4 className="text-lg text-swift font-semibold">
              Help great hires become great employees
            </h4>
            <p className="text-second font-semibold my-6">
              Create custom onboarding experiences, have new hires e-sign <br />
              documents, and store all employee info in one place.
            </p>
            <p className=" md:mt-8 mt-2 md:text-start text-center flex items-center justify-center gap-2 text-teal-700 font-bold">
              Learn More
              <span>
                <FaChevronRight className="inline-block"></FaChevronRight>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramManager;
