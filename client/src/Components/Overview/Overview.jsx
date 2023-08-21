import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { TbRotateRectangle } from "react-icons/tb";

const Overview = () => {
  return (
    <>
      <div className="text-center px-4 sm:px-8 md:px-16">
        <h2 className="uppercase my-6 text-green-800 text-4xl sm:text-5xl">
          Md Masum
        </h2>

        <h5 className="text-xl sm:text-3xl mb-2 sm:mb-4">Web Developer</h5>
        <p className="text-sm sm:text-base mb-2 sm:mb-4">
          Dhaka, Dhaka Division, Bangladesh • Part time
        </p>
        <hr className="mb-2 sm:mb-4 w-full" />
        <div className="shadow-2xl bg-gray-200 py-2 sm:py-4">
          <button className="btn btn-link btn-outline border-none mr-2 sm:mr-4">
            OverView
          </button>
          <button className="btn btn-link btn-outline border-none">
            Application
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 sm:px-8 md:px-16 py-2 sm:py-4">
        <div className="flex justify-between font-semibold">
          <p className="text-xl sm:text-2xl">Description</p>
          <button className="btn btn-link btn-outline border-none">
            Share this job <BiShareAlt size={16} />
          </button>
        </div>
        <p className="text-sm sm:text-base mt-2 sm:mt-4">
          {/* Description content */}
          MD MASUM, a staffing and recruiting company, is seeking a Web
          Developer to join our growing team. In this role, you will be
          responsible for developing, testing, and maintaining our company
          website and enhancing its user interface and experience. You will work
          closely with our marketing and IT teams and be a key player in driving
          website traffic and customer engagement.
        </p>

        {/* Responsibilities */}
        <div className="mt-2 sm:mt-4">
          <h4 className="text-xl sm:text-2xl font-semibold my-2">
            Responsibilities
          </h4>
          <ul className="list-disc space-y-1 sm:space-y-2 px-4 sm:px-8">
            {/* Responsibilities list */}
            <li>
              Develop and maintain the MD MASUM website using various
              programming languages and tools.
            </li>

            <li>
              Collaborate with marketing and IT teams to ensure website content
              is up-to-date and functional.
            </li>

            <li>
              Optimize website loading speeds and ensure compatibility across
              different platforms and browsers.
            </li>

            <li>
              Implement website security measures to protect against cyber
              threats and hacking.
            </li>

            <li>
              Use data analytics to gather insights and make recommendations for
              website improvements.
            </li>

            <li>
              Stay up-to-date with new web development technologies and best
              practices to continuously improve site functionality and
              performance.
            </li>

            <li>Troubleshoot and fix website bugs and compatibility issues.</li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-2 sm:mt-4">
          <h4 className="text-xl sm:text-2xl font-semibold my-2">
            Requirements
          </h4>
          <ul className="list-disc space-y-1 sm:space-y-2 px-4 sm:px-8">
            {/* Requirements list */}
            <li>Bachelor's degree in Computer Science or a related field.</li>

            <li>
              Proven experience as a Web Developer with a strong portfolio of
              websites.
            </li>

            <li>
              Proficiency in programming languages such as HTML, CSS,
              JavaScript, and PHP.
            </li>

            <li>
              Experience with web development tools like WordPress, jQuery, and
              Git.
            </li>
            <li>Knowledge of SEO and Google Analytics.</li>

            <li>
              Ability to identify and troubleshoot website issues and bugs.
            </li>
            <li>Good communication and collaborative skills.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-2 sm:mt-4">
          <h4 className="text-xl sm:text-2xl font-semibold my-2">Benefits</h4>
          <ul className="list-disc space-y-1 sm:space-y-2 px-4 sm:px-8">
            {/* Benefits list */}
            <li>Private Healthcare Plan</li>
            <li>Pension Plans</li>
            <li>Life Assurance</li>
            <li>Training & Development</li>
            <li>Company Vehicle</li>
          </ul>
        </div>

        <button className="btn btn-success w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2 sm:my-4">
          Apply for this job
        </button>
      </div>

      <div className="text-center text-blue-400 px-4 sm:px-8 md:px-16 py-2 sm:py-4">
        <button className="btn btn-link btn-outline border-none mr-2 sm:mr-4">
          View Website.
        </button>
        <button className="btn btn-link btn-outline border-none mr-2 sm:mr-4">
          View All Jobs.
        </button>
        <button className="btn btn-link btn-outline border-none">
          Helps. <TbRotateRectangle size={16} />
        </button>
      </div>
      <hr className="mb-2 sm:mb-4 w-full" />
      <div className="text-center text-blue-400 px-4 sm:px-8 md:px-16 py-2 sm:py-4">
        <span>Powered by</span>
        <button className="btn btn-link btn-outline border-none mr-2 sm:mr-4">
          Workable.
        </button>
        <button className="btn btn-link btn-outline border-none mr-2 sm:mr-4">
          Accessibility <TbRotateRectangle size={16} />
        </button>
      </div>
    </>
  );
};

export default Overview;
