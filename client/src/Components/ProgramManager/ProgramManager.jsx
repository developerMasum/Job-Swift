import { AiOutlineRight } from "react-icons/ai";

import img1 from "../../assets/Image/programManager1.png";
import img2 from "../../assets/Image/programManager2.png";
import img3 from "../../assets/Image/programManager3.png";
import img4 from "../../assets/Image/programManager4.png";

const ProgramManager = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center line leading-tight">
        Manage your entire process, <br />
        from sourcing to employee onboarding <br />
        and management
      </h1>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 my-8">
        {/* card 01 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105">
          <img className="mx-auto max-w-full h-[500px]" src={img1} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-4xl text-red-400 font-bold mb-2">
              SOURCE & ATTRACT
            </h4>
            <h4 className="text-4xl font-semibold">Find and attract candidates</h4>
            <p className="text-gray-500 font-semibold my-6">
              Fill your pipeline quickly with one-click job posting to 200+
              sites, AI-powered sourcing, employee referrals and more.
            </p>
            <a href="#" className="flex items-center gap-1 justify-center ">
              <span className="text-green-700 hover:underline">LEARN MORE</span>{" "}
              <AiOutlineRight className="text-teal-400" />
            </a>
          </div>
        </div>
        {/* card 02 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105">
          <img className="mx-auto max-w-full h-[500px]" src={img2} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-4xl text-blue-400 font-bold mb-2">
              EVALUATE & COLLABORATE
            </h4>
            <h4 className="text-4xl font-semibold">Move the right applicants forward</h4>
            <p className="text-gray-500 font-semibold my-6">
              Collaborate with hiring teams to evaluate applicants, gather
              feedback and decide who's best, all in one recruiting system.
            </p>
            <a href="#" className="flex items-center gap-1 justify-center ">
              <span className="text-green-700 hover:underline">LEARN MORE</span>{" "}
              <AiOutlineRight className="text-teal-400" />
            </a>
          </div>
        </div>
        {/* card 03 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105">
          <img className="mx-auto max-w-full h-[500px]" src={img3} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-4xl text-indigo-500 font-bold mb-2">
              AUTOMATE & HIRE
            </h4>
            <h4 className="text-4xl font-semibold">Make the best hire, in half the time</h4>
            <p className="text-gray-500 font-semibold my-6">
              Fill your pipeline quickly with one-click job posting to 200+
              sites, AI-powered sourcing, employee referrals and more.
            </p>
            <a href="#" className="flex items-center gap-1 justify-center ">
              <span className="text-green-700 hover:underline">LEARN MORE</span>{" "}
              <AiOutlineRight className="text-teal-400" />
            </a>
          </div>
        </div>
        {/* card 04 */}
        <div className="transition duration-1000 ease-in-out transform hover:scale-105">
          <img className="mx-auto max-w-full md:h-[500px]" src={img4} alt="" />
          <div className="text-center mt-12">
            <h4 className="text-4xl text-teal-400 font-bold mb-2">
              ONBOARD & MANAGE
            </h4>
            <h4 className="text-4xl font-semibold">
              Help great hires become great employees
            </h4>
            <p className="text-gray-500 font-semibold my-6">
              Create custom onboarding experiences, have new hires e-sign
              documents, and store all employee info in one place.
            </p>
            <a href="#" className="flex items-center gap-1 justify-center ">
              <span className="text-green-700 hover:underline">LEARN MORE</span>{" "}
              <AiOutlineRight className="text-teal-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramManager;
