// import { useContext } from "react";
// import { authContext } from "../../Auth/AuthProvider";
// import logo2 from "../../assets/login/swift__1_-removebg-preview (1).png";
// import { Link } from "react-router-dom";

// const Navbar = () => {

//   const { user, logout } = useContext(authContext)
//   // console.log(user);
//   // console.log(cart);
//   const handleLogOut = () => {
//     logout()
//       .then(() => {
//         alert("Successfully LogOut")
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   const navLink = (
//     <>
//       <li>
//         <Link>Our Platforms</Link>
//       </li>
//       <li>
//         <Link>Solution</Link>
//       </li>
//       <li>
//         <Link>Why Job Swift </Link>
//       </li>
//       <li>
//         <Link>Resources</Link>
//       </li>

//       <li>
//         <Link to='contact-us'>Contact Us</Link>
//       </li>
//     </>
//   );

//   // fixed mt-[-20px] lg:md:flex-row bg-base-200 lg:md:mt-[-80px]

//   // lg:md:flex justify-center
//   return (
//     <>
//       <div className="navbar fixed z-10 bg-opacity-100 max-w-screen-xl bg-slate-200 text-black shadow-lg">
//         <div className="flex justify-around gap-40 lg:md:navbar-start lg:md:gap-10">
//           <div className="dropdown bg-sky-600">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-80"
//             >
//               {navLink}
//               <div className="input-group my-3 ml-6">
//                 <input
//                   type="text"
//                   placeholder="Search…"
//                   className="input input-bordered input-sm px-[-10px]"
//                 />
//                 <button className="btn btn-square btn-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="flex gap-6 justify-center items-center mr-8">
//                 <Link to={`/login`} className="flex btn btn-outline font-bold btn-sm my-3 w-1/3">
//                   Log In
//                 </Link>
//                 <Link to={'/demo-page'} className="btn btn-outline   btn-sm mt-4 lg:md:mt-0 my-3 w-1/2">
//                   Get a Demo
//                 </Link>
//               </div>
//             </ul>
//           </div>
//           <a className=" ">
//             <img
//               className="h-16 w-32 rounded-lg "
//               src={logo2}
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="navbar-center mr-10 font-bold hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navLink}</ul>
//         </div>
//         <div className="mr-6 flex-col mt-4  lg:md:flex-row lg:md:navbar-end   lg:md:gap-3 lg:md:justify-center lg:md:items-center lg:md:mt-0 ">
//           {/* <div>
//                         <FaSearch className='w-12 h-6'></FaSearch>
//                     </div> */}
//           <div className="form-control">
//             <div className="flex gap-12">
//               <div className="input-group ">
//                 <input
//                   type="text"
//                   placeholder="Search…"
//                   className="input input-bordered input-sm px-[-30px] hidden lg:block"
//                 />
//                 <button className="btn btn-square btn-sm hidden lg:block">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {
//             user ? <>

//               <small>
//                 <img style={{ height: "30px", width: "30px", borderRadius: "10px" }} className=' rounded-4  ' src={user?.photoURL} alt="user image" />
//               </small>

//               {/*
//               <li onClick={handleLogOut} className='btn btn-outline btn-sm btn-error'>
//                 Log-out
//               </li> */}

//             </> : <>

//               <Link to={'/login'}>
//                 <button className="px-8 py-2 bg-cyan-500 rounded-md hover:bg-white hover:border border hover:border-cyan-600 text-second hidden md:block ">
//                   Login
//                 </button>
//               </Link>
//             </>
//           }

//           {
//             user ?
//               <Link to={'/dashboard/jobs'}>
//                 <button className="px-8 py-2 bg-cyan-500 rounded-md hover:bg-white hover:border border hover:border-cyan-600 text-second hidden md:block">
//                   Dashboard
//                 </button>
//               </Link> :
//               <Link to="/demo-page">
//                 <button className="py-2.5 px-5 rounded-xl  border border-cyan-600 hover:bg-white hover:text-cyan-700 hidden md:block">
//                   Demo
//                 </button>
//               </Link>

//           }

//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Initialize activeLink as null

  const { user } = useContext(authContext);
  // console.log(user);

  // Function to handle link clicks and set the activeLink
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed z-10 text-white font-bold bg-#00756a flex items-center justify-between flex-wrap px-6 ${
        scrolling ? "bg-white text-black shadow-md" : "bg-#00756a"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src="https://pub-static.fotor.com/assets/projects/pages/5367889ea0f04e499fe8ffea853e2e33/red-fire-football-club-eaf753c529e84e4d8bdf1042c1f18cdc.jpg"
          className="w-12 h-12 mr-2"
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
            className={`fill-current text-black h-3 w-3 ${
              isOpen ? "hidden" : "block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current text-black h-3 w-3 ${
              isOpen ? "block" : "hidden"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm text-slate-400 lg:flex-grow">
          <Link
            to="/"
            className={`block mt-4 sm:w-16 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 0 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "#16887da2" }} // Fix the style property syntax
            onClick={() => handleLinkClick(0)} // Set activeLink to 0 on click
          >
            First Link
          </Link>

          <a
            href="#"
            className={`block mt-4 sm:w-16 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 1 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(1)} // Set activeLink to 1 on click
          >
            Second Link
          </a>
          <Link
            to="blogs"
            className={`block mt-4 sm:w-16 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 2 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(2)} // Set activeLink to 2 on click
          >
            Blogs
          </Link>
          <Link
            to="/contact-us"
            className={`block mt-4 sm:w-16 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 3 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(3)} // Set activeLink to 3 on click
          >
            Contact us
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-start md:lg:flex  items-center">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-full mr-3"
              />
              <Link to={"/dashboard/jobs"}>
                <button className="px-8 py-2 bg-teal-700 rounded-md hover:bg-teal-700 hover:border border hover:border-cyan-600 text-white hidden md:block">
                  Dashboard
                </button>
              </Link>{" "}
            </>
          ) : (
            <div className="flex justify-center gap-2 items-center">
              {" "}
              <Link
                className="px-8 py-2 bg-teal-700 rounded-md hover:bg-teal-700 hover:border border hover:border-cyan-600 text-white hidden md:block"
                to={"/login"}
              >
                Login
              </Link>{" "}
              <button className="bg-white text-teal-700 rounded-md px-5 py-2">
                Get a demo
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
