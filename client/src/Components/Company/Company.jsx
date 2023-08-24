import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <>
      <nav className="font-bold px-4 sm:px-8 md:px-16 py-2 sm:py-4">
        <Link to="/people-directory" className="mr-4 hover:underline" href="#">
          People Directory
        </Link>
        <a className="mr-4 hover:underline" href="#">
          ORG Chart
        </a>
        <a className="mr-4 hover:underline" href="#">
          Files
        </a>
        <a className="hover:underline" href="#">
          Onboarding
        </a>
      </nav>
    </>
  );
};

export default Company;
