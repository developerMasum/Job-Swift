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
import logo_js from "../../assets/Image/logo_js.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Initialize activeLink as null

  const { user, logout } = useContext(authContext);
  console.log(user);

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
      className={`navbar fixed z-10  font-bold flex items-center justify-between flex-wrap px-6 
      ${scrolling ? "lg:md:bg-white text-white lg:md:bg-opacity-90 lg:md:text-[#00756a] lg:md:shadow-lg" : "text-white"}`}
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
        className={`bg-[#00756a] rounded-lg bg-opacity-90 lg:md:bg-opacity-0 ps-4 lg:md:ps-0  pb-5 lg:md:pb-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="text-[13px] lg:flex-grow py-2  lg:md:bg-opacity-0 w-40 lg:md:w-100 ">
          <a
            href="#"
            className={`block mt-4 sm:w-20 lg:inline-block lg:mt-0 text-white-200 mr-4 opacity-80 hover:opacity-100 ${activeLink === 0 ? "active-link" : "" // Apply active style for the first link
              }`}
            onClick={() => handleLinkClick(0)} // Set activeLink to 0 on click
          >
            First Link
          </a>
          <a
            href="#"
            className={`block mt-4 sm:w-20  lg:inline-block lg:mt-0 text-white-200 mr-4 opacity-80 hover:opacity-100 ${activeLink === 1 ? "active-link" : "" // Apply active style for the second link
              }`}
            onClick={() => handleLinkClick(1)} // Set activeLink to 1 on click
          >
            Second Link
          </a>
          <a
            href="#"
            className={` block mt-4 sm:w-20  lg:inline-block lg:mt-0 text-white-200 mr-4 opacity-80 hover:opacity-100 ${activeLink === 2 ? "active-link" : "" // Apply active style for the third link
              }`}
            onClick={() => handleLinkClick(2)} // Set activeLink to 2 on click
          >
            Third Link
          </a>
          <Link
            to={'/'}
            className={`block mt-4 sm:w-20  lg:inline-block lg:mt-0 text-white-200 mr-4 opacity-80 hover:opacity-100 ${activeLink === 3 ? "active-link" : "" // Apply active style for the fourth link
              }`}
            onClick={() => handleLinkClick(3)} // Set activeLink to 3 on click
          >
            Fourth Link
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
                    <button className="px-6 py-1 border-emerald-300 hover:bg-emerald-300  border-b-2 border-t-2 rounded-lg  md:block">
                      Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </>) :
            <div className="flex justify-between  gap-2 items-center">
              <div>
                <Link className="px-5  py-1 rounded-lg border-emerald-300 hover:bg-emerald-300  border-b-2  rounded-b-lg" to={'/login'}>Login</Link>
              </div>
              <div>
                <button className=" hover:bg-opacity-100 rounded-lg px-3 py-1  lg:md:border-t-2 border-b-2 lg:md:border-b-0 border-emerald-300 hover:bg-emerald-300">Get a demo</button>
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
