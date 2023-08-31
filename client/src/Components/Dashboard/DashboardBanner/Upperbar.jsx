import logo2 from "../../../assets/login/swift__1_-removebg-preview (1).png";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { CgMenuGridR } from "react-icons/cg";
import { FaToolbox, FaUserPlus } from "react-icons/fa";
import { BiSolidCalendar } from "react-icons/bi";
import { RiUserSearchFill } from "react-icons/ri";
import { BsPieChart, BsGraphUp } from "react-icons/bs";
import userBackupImage from "../../../assets/Image/userImage.jpeg";
import { useContext } from "react";
import { authContext } from "../../../Auth/AuthProvider";
import { toast } from "react-hot-toast";

const UpperBar = () => {
  const { user, logout } = useContext(authContext);

  const name = user?.displayName || "Mr X man";
  const userName = user?.email || "mm123";
  const userImage = user?.photoURL || userBackupImage;
  const navigate = useNavigate();

  // console.log(user);
  // console.log(cart);
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("log out successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <div className="flex justify-between navbar rounded-xl shadow-xl bg-slate-100 fixed z-10  md:flex-row  max-w-7xl mx-auto ">
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
              {/* search field mobile*/}
              <div className="input-group my-3 ml-6 text-black">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered input-sm px-[-10px]"
                />
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </ul>
          </div>

          <Link to={`/`}>
            <img
              className="h-10 w-24  "
              src={logo2}
              alt=""
            />
          </Link>
        </div>
        {/* ---------------------------------------------------- end mobile view */}

        {/* large screen view start------------------------------------- */}

        <div className="font-bold hidden lg:md:flex ">
          <ul className="menu menu-horizontal  ">
            <li>
              <Link to={"jobs"}>JOBS</Link>
            </li>
            <li>
              <Link to={'candidate'}>CANDIDATES</Link>
            </li>
            <li>
              <Link to={"peopleSearch"}>PEOPLE SEARCH</Link>
            </li>

            <li >
              <Link to='company'>COMPANY</Link>
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
        <div className=" flex justify-between gap-4  lg:md:gap-2">
          <div className="form-control">
            <div className="flex gap-12">
              {/* input */}
              <div className="input-group ">
                <input
                  type="text"
                  placeholder="Search for candidates..."
                  className="input  input-sm px-[-30px] hidden lg:block text-white border-2 border-cyan-800"
                />
                <button className="btn btn-outline btn-sm hidden lg:block border-2 border-cyan-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-6  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* inbox .................................. */}

          <div className="relative group">
            <div className="rounded-full transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-100 opacity-80">
              <Link>
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
              <CgMenuGridR className="text-3xl"></CgMenuGridR>
            </label>
            <ul
              tabIndex={0}
              className="-ms-20 menu menu-sm dropdown-content mt-7  p-1 shadow-xl bg-white rounded-box w-max"
            >
              <div className="text-black">
                <li>
                  <Link>Workable</Link>
                </li>
                <li>
                  <Link>Workable Referrals</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* ------------- */}

          <div>
            {/* hover/Click User image ..............................................*/}
            {/* dropdown */}
            <div className="dropdown  pr-12">
              <label tabIndex={0} className="ease-in-out">
                <div className="relative group ">
                  <div className="rounded-full transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-100 opacity-80">
                    <img className=" border border-cyan-700 h-10 w-12 rounded-xl" src={userImage} alt="" />
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
                <div className="">
                  <li>
                    <div className="border-b-4">
                      <Link>
                        <img
                          className="h-8 w-10  mask mask-hexagon"
                          src={userImage}
                          alt=""
                        />
                      </Link>
                      <h2>
                        <span className="font-bold">{name}</span>
                        <br />
                        <span>{userName}</span>
                      </h2>
                    </div>
                  </li>

                  <li className="mt-4">
                    <Link>Setting</Link>
                  </li>
                  <li>
                    <Link>Help</Link>
                  </li>
                  <li>
                    <Link>Add Company</Link>
                  </li>
                  {user && (
                    <>
                      <div className="text-center">
                        <li
                          onClick={handleLogOut}
                          className="btn btn-outline btn-xs text-xs btn-error mx-auto my-3 "
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
    </>
  );
};

export default UpperBar;
