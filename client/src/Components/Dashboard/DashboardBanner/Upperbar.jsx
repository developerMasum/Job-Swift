import logo2 from "../../../assets/Image/logo_js.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout, GrMail } from "react-icons/gr";
import { CgMenuGridR } from "react-icons/cg";
import { FaToolbox, FaUserAlt, FaUserPlus, FaUserCircle } from "react-icons/fa";
import { BiSolidCalendar } from "react-icons/bi";
import { RiUserSearchFill } from "react-icons/ri";
import {
  BsPieChart,
  BsGraphUp,
  BsFillHouseAddFill,
  BsSearch,
} from "react-icons/bs";
import userBackupImage from "../../../assets/Image/userImage.jpeg";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Auth/AuthProvider";
import { toast } from "react-hot-toast";
// import { GrLogout } from 'react-icons/gr'
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import useAdmin from "../../../Hooks/AdminHook/useAdmin";
import { useRef } from "react";
import axios from "axios";

const UpperBar = () => {
  const { user, logout } = useContext(authContext);
  const [isAdmin] = useAdmin();
  console.log("isadmin", isAdmin);
  // const [isAdmin,setIsAdmin] = useState(false)

  const name = user?.displayName || "Mr X man";
  const userEmail = user?.email || "mm123";
  const userImage = user?.photoURL || userBackupImage;
  const navigate = useNavigate();

  // console.log(user);
  // console.log(cart);
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("log out successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  // set Admin
  // useEffect(() => {
  //   // Set isAdmin within the useEffect to ensure it's updated when user changes.
  //   const adminEmail = "admin@gmail.com";
  //   const originEmail = user?.email;

  //   if (adminEmail === originEmail) {
  //     setIsAdmin(true);
  //   } else {
  //     setIsAdmin(false);
  //   }
  // }, [user]);
  // console.log(origin);
  // const isAdmin = true;
  const [toggle, setToggle] = useState(false);

  const [isActive, setActive] = useState("false");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // search candidates_________________

  const [searchData, setSearchData] = useState("");
  const [search, setSearch] = useState([]);
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value);
    setSearch(inputRef.current.value);
    // inputRef.current.focus();
  }

  // useEffect(()=> {
  //   const fetchUsers = async () => {
  //     const res = await axios.get('https://server-job-swift.vercel.app/all-applications');
  //     setSearch(res.data);
  //   }
  //   fetchUsers();
  // },[])

  useEffect(() => {
    fetch(
      `https://server-job-swift.vercel.app/candidateSearch?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  }, [search]);

  console.log(searchData);
  console.log(search);
  // _________________________________

  return (
    <>
      {isAdmin && (
        <>
          {/* Small Screen Navbar */}
          <div className="bg-gray-200  flex justify-between md:hidden">
            <div>
              <div className="block cursor-pointer p-4 font-semibold">
                {/* <Logo /> */}
                <p>Admin Dashboard</p>
              </div>
            </div>

            <button
              onClick={handleToggle}
              className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
            >
              <AiOutlineBars className="h-5 w-5" />
            </button>
          </div>
          {/* Sidebar */}
          <div
            className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-44 space-y-6 px-2  py-4 absolute inset-y-0 left-0 transform ${
              isActive && "-translate-x-full"
            }  md:translate-x-0  transition duration-200 ease-in-out`}
          >
            <div>
              {/* Branding & Profile Info */}

              <div>
                <div className="mx-auto text-center">
                  {/* <Logo /> */}
                  <img
                    src="https://i.ibb.co/FJ9Y0FF/logo-js.png"
                    alt=""
                    className="w-8 inline-block"
                  />
                  <p className="uppercase text-sm semi-bold mt-5">
                    Admin Dashboard
                  </p>
                </div>
                {/* <div className="flex flex-col items-center mt-6 -mx-2">
                  <Link to="/dashboard">
                    <img
                      className="object-cover w-24 h-24 mx-2 rounded-full"
                      src={user?.photoURL}
                      alt="avatar"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <Link to="/dashboard">
                    <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                      {user?.displayName}
                    </h4>
                  </Link>
                  <Link to="/dashboard">
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                      {user?.email}
                    </p>
                  </Link>
                </div> */}
              </div>

              {/* Nav Items */}
              <div className="flex flex-col justify-between flex-1 mt-6 text-black">
                <nav>
                  <>
                    {/* Menu Links */}
                    <NavLink
                      to="admin/dashboard"
                      className={({ isActive }) =>
                        `flex items-center jus px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                          isActive ? " text-cyan-500" : "text-gray-600"
                        }`
                      }
                    >
                      <AiOutlineHome className="w-5 h-5" />

                      <span className="mx-4 font-medium">Home</span>
                    </NavLink>
                    <NavLink
                      to="admin/users"
                      className={({ isActive }) =>
                        `flex items-center jus px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                          isActive ? " text-cyan-500" : "text-gray-600"
                        }`
                      }
                    >
                      <FaUserAlt className="w-5 h-5" />

                      <span className="mx-4 font-medium">Users</span>
                    </NavLink>
                  </>
                </nav>
              </div>
            </div>

            <div>
              <hr />
              {/* <NavLink 
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcSettings className="w-5 h-5" />

                <span className="mx-4 font-medium cursor-not-allowed">Profile</span>
              </NavLink> */}
              <button
                onClick={handleLogOut}
                className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
              >
                <GrLogout className="w-5 h-5" />

                <span className="mx-4 font-medium ">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      {!isAdmin && (
        <div className="flex justify-between font-bold navbar rounded-sm text-black shadow-md bg-slate-100  fixed z-10  md:flex-row  mx-auto ">
          <div className="flex  lg:md:gap-10  ">
            {/* responsive Mobile view----------------------- */}
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-72"
              >
                <div className="">
                  <li>
                    <Link>
                      <FaToolbox></FaToolbox>JOBS
                    </Link>
                  </li>
                  <li>
                    <Link to="./candidate">
                      <FaUserPlus></FaUserPlus>Candidates
                    </Link>
                  </li>
                  <li>
                    <Link to={"peopleSearch"}>
                      <RiUserSearchFill></RiUserSearchFill>People Search
                    </Link>
                  </li>
                  {/* <li>
                  <Link to="/company">
                    <RiUserSearchFill></RiUserSearchFill>COMPANY
                  </Link>
                </li> */}

                  <li>
                    <Link to="agenda">
                      <BiSolidCalendar className="text-[18px]"></BiSolidCalendar>
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <BsPieChart className="text-[17px]"></BsPieChart>Reports
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <BsGraphUp className="text-[15px] ps-[2px]"></BsGraphUp>
                      Activity
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <Link to={`/`}>
              <img className="h-10 w-10  " src={logo2} alt="" />
            </Link>
          </div>
          {/* ---------------------------------------------------- end mobile view */}

          {/* large screen view start------------------------------------- */}

          <div className="hidden lg:md:flex ">
            <ul className="menu menu-horizontal  ">
              <li>
                <Link to={"jobs"}>JOBS</Link>
              </li>
              <li>
                <Link to={"candidate"}>CANDIDATES</Link>
              </li>
              <li>
                <Link to={"peopleSearch"}>PEOPLE SEARCH</Link>
              </li>

              <li>
                <Link to="company">COMPANY</Link>
              </li>

              {/* icons */}
              <li className="relative group">
                <Link to="agenda">
                  <BiSolidCalendar className="text-[18px]"></BiSolidCalendar>
                </Link>
                <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                  <h2 className=" text-[10px] w-max ">Agenda</h2>
                </div>
              </li>
              <li className="relative group">
                <Link to={"report-center"}>
                  <BsPieChart className="text-[17px]"></BsPieChart>
                </Link>
                <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                  <h2 className=" text-[10px] w-max ">Reports</h2>
                </div>
              </li>
              {/* <li className="relative group">
              <Link>
                <BiSolidCalendar className="text-[18px]"></BiSolidCalendar>
              </Link>
              <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                <h2 className=" text-[10px] w-max ">Activity</h2>
              </div>
            </li> */}
            </ul>
          </div>

          {/* large screen right side-------------- */}
          <div className=" flex justify-between gap-1 lg:md:gap-3">
            <div className="form-control">
              <div className="flex gap-12">
                {/* search dropdown____________________________ */}

                <div className="dropdown relative group">
                  <label
                    tabIndex={0}
                    className="rounded-full transition duration-300 ease-in-out transform hover:scale-125 group-hover:opacity-100 opacity-70"
                  >
                    <div className=" flex justify-center items-center">
                      <input
                        type="text"
                        ref={inputRef}
                        placeholder="Search for candidates..."
                        className="w-24 lg:md:w-full rounded-lg input-sm   lg:md:pe-16 pe-4  bg-slate-500 bg-opacity-0 border-[0.1] hover:border-2"
                      />
                      {/* <button onChange={(e) => setQuery(e.target.value)}><BsSearch className="-mx-7"></BsSearch></button> */}
                      <button onClick={handleClick}>
                        <BsSearch className="lg:md:-mx-7 -mx-4 hover:text-emerald-600 hover:text-xl "></BsSearch>
                      </button>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="-ms-20 menu menu-sm dropdown-content mt-7  p-1 shadow-xl bg-white rounded-lg w-max"
                  >
                    <div className="text-black">
                      <h2 className="p-2">Search Candidate</h2>
                      <div>
                        {searchData ? (
                          <>
                            {searchData.map((singleData) => (
                              <Link
                                to={`candidate/profile/${singleData?._id}`}
                                key={singleData?._id}
                              >
                                {" "}
                                <div className="flex gap-4 items-center rounded-lg p-2 mb-1 bg-slate-200 md:lg:w-96 w-60 overflow-hidden">
                                  <img
                                    className=" bg-slate-100 h-8 w-8 rounded-full"
                                    src={
                                      singleData.image ? (
                                        singleData.image
                                      ) : (
                                        <FaUserCircle></FaUserCircle>
                                      )
                                    }
                                    alt=""
                                  />
                                  <div>
                                    <h2>
                                      {"Name:" + " " + singleData.firstName}
                                    </h2>
                                    <h2>
                                      {"Job:" + " " + singleData.jobTitle}
                                    </h2>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </>
                        ) : (
                          <h2 className="flex justify-center">
                            <span className="loading loading-spinner loading-md "></span>{" "}
                          </h2>
                        )}
                      </div>
                    </div>
                  </ul>
                </div>
                {/* _____________________________ */}
              </div>
            </div>

            {/* inbox .................................. */}

            <div className="relative group">
              <div className="rounded-full transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-100 opacity-80">
                <Link to="inbox-email">
                  <button className="">
                    <GrMail className=" text-3xl"></GrMail>
                  </button>
                </Link>
              </div>
              <div className="opacity-0 rounded-md absolute top-12 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                <Link to={"/inbox"}>
                  <h2 className="px-2 py-2 text-[10px] w-max ">Inbox</h2>
                </Link>
              </div>
            </div>
            {/* ----------------------------------- */}

            {/*Workable menuGrid.............. */}

            {/* dropdown */}
            <div className="dropdown relative group">
              <label
                tabIndex={0}
                className="rounded-full transition duration-300 ease-in-out transform hover:scale-125 group-hover:opacity-100 opacity-70"
              >
                <CgMenuGridR className="text-3xl "></CgMenuGridR>
              </label>
              <ul
                tabIndex={0}
                className="-ms-20 menu menu-sm dropdown-content mt-7  p-1 shadow-xl bg-white rounded-box w-max"
              >
                <div className="text-black">
                  <li>
                    <Link to="get-certificate/:id">Get Certificate</Link>
                  </li>
                  <li>
                    <Link to="certification-list">Certification List</Link>
                  </li>
                </div>
              </ul>
            </div>
            {/* ------------- */}

            <div>
              {/* hover/Click User image ..............................................*/}
              {/* dropdown */}
              <div className="dropdown  lg:md:pr-10 pe-5">
                <label tabIndex={0} className="ease-in-out">
                  <div className="relative group ">
                    <div className="rounded-full transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-100 opacity-80">
                      <img
                        className=" border border-cyan-700 h-10 w-12 rounded-xl"
                        src={userImage}
                        alt=""
                      />
                    </div>
                    <div className=" opacity-0 rounded-md absolute top-14 right-0    pointer-events-none group-hover:opacity-100">
                      <h2 className="px-2 py-2 text-[10px] w-max ">{name}</h2>
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className=" -ms-32 menu menu-sm dropdown-content mt-7  p-1 shadow-xl bg-slate-100 border font-semibold  border-black rounded-box w-max"
                >
                  <div className="lg:md:px-1">
                    <li className="border-b-2">
                      <div className="">
                        <div className="flex gap-1 items-center">
                          <Link>
                            <img
                              className="h-8 w-10  mask mask-hexagon"
                              src={userImage}
                              alt=""
                            />
                          </Link>
                          <h2>
                            <span className="semi-bold">{name}</span>
                            <br />
                            {/* <span className="text-[10px]">{userEmail}</span> */}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <span className="lg:md:text-[10px] text-[9px] -mt-2 ms-2">
                          {userEmail}
                        </span>
                      </div>
                    </li>

                    <li className="mt-4">
                      <Link to="settings/profile">Setting</Link>
                    </li>

                    {user && (
                      <>
                        <div className="text-center w-14 mx-auto">
                          <li
                            onClick={handleLogOut}
                            className="border border-teal-700 cursor-pointer hover:text-white rounded-md p-1 hover:bg-red-500 text-xs  mx-auto my-3 "
                          >
                            Log-out
                          </li>
                        </div>
                      </>
                    )}
                  </div>
                </ul>
              </div>
              {/* ------------------------ */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpperBar;
