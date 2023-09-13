import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../Auth/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import logo_js from "../../assets/Image/logo_js.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const { user, logout } = useContext(authContext);
  const location = useLocation();

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Call the handleScroll function initially to set the initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`navbar fixed z-10 font-bold flex items-center justify-between flex-wrap px-6 
      ${scrolling ? "bg-white bg-opacity-90 text-white shadow-lg" : "bg-teal-700 text-white"}`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src={logo_js}
          className={`w-12 h-12 mr-2  p-2 rounded-full 
          ${scrolling ? "bg-white bg-opacity-80 lg:md:bg-opacity-0 " : "bg-white bg-opacity-80"}`}
          alt="Logo"
        />{" "}
        {/* Adjust width and height as needed */}
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-9 w-9 p-2 rounded-full bg-emerald-200 bg-opacity-80  ${isOpen ? "hidden" : "block"}`}
            // viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-9 w-9  bg-emerald-200 bg-opacity-80 p-2 rounded-full ${isOpen ? "block" : "hidden"}`}
            // viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
          {/* ... (your button code) */}
        </button>
      </div>
      <div
        className={`md:lg:bg-[#00756a] rounded-lg bg-opacity-90 lg:md:bg-opacity-0 ps-4 lg:md:ps-0  pb-5 lg:md:pb-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="text-[13px] lg:flex-grow py-2  lg:md:bg-opacity-0 w-40 lg:md:w-100 ">
        <Link
            to="/"
            className={`block mt-4 sm:w-11 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 40 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }} // Fix the style property syntax
            onClick={() => handleLinkClick(40)} // Set activeLink to 0 on click
          >
          Home
          </Link>
        <Link
            to="/details-marketplace"
            className={`block mt-4 sm:w-24 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 0 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }} // Fix the style property syntax
            onClick={() => handleLinkClick(0)} // Set activeLink to 0 on click
          >
           Market Place
          </Link>
          <Link
            to="/single-pay"
            className={`block mt-4 sm:w-14 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 8 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }} // Fix the style property syntax
            onClick={() => handleLinkClick(8)} // Set activeLink to 0 on click
          >
           Benefits
          </Link>

          <Link
           to="/hiring"
            className={`block mt-4 sm:w-28 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 2 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(2)} // Set activeLink to 1 on click
          >
            Hiring & Board
          </Link>
          <Link to='/hr-data'
            
            className={`block mt-4 sm:w-24 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 1 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(1)} // Set activeLink to 1 on click
          >
           Hr Reporting
          </Link>
          <Link
            to="blogs"
            className={`block mt-4 sm:w-12 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 3 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(3)} 
              > Blogs
                </Link>

        </div>
        <div className=" flex-col sm:flex-row justify-start md:lg:flex  items-center">



          {user ? (
            <>
              <div className="flex justify-between">
                <div >
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-9 h-9 rounded-full mx-3"
                  />
                </div>
                <div>
                  <Link to={"/dashboard/jobs"}>
                    <button className="px-8 py-2 bg-teal-700 rounded-md hover:bg-teal-700 hover:border border hover:border-cyan-600 text-white hidden md:block">
                      Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </>) :
            <div className="flex justify-between  gap-2 items-center">
             <Link
                className="px-8 py-2 bg-teal-700 rounded-md hover:bg-teal-700 hover:border border hover:border-cyan-600 text-white hidden md:block"
                to={"/login"}
              >
                Login
              </Link>
              <Link to="/demo-page" className="bg-white text-teal-700 rounded-md px-5 py-2">
                Get a demo
              </Link>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;