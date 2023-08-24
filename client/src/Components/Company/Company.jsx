import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <>
      <nav className="font-bold px-4 sm:px-8 md:px-16 py-2 sm:py-4">
        <Link to="/people-directory" className="mr-4 hover:underline">
          People Directory
        </Link>
        <Link to="/org-chart" className="mr-4 hover:underline">
          ORG Chart
        </Link>
        <Link to="/files" className="mr-4 hover:underline">
          Files
        </Link>
        <Link to="/onboarding" className="mr-4 hover:underline">
          Onboarding
        </Link>
      </nav>
    </>
  );
};

export default Company;
