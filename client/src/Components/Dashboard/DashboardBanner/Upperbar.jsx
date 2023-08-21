import logo2 from "../../../assets/logo/newlogo1.png";
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

const UpperBar = () => {

  const { user,logout } = useContext(authContext);



  const name = user?.displayName || "Mr X man";
  const userName = user?.email || "mm123";
  const userImage = user?.photoURL || userBackupImage;
  const navigate = useNavigate();



  // console.log(user);
  // console.log(cart);
  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("Successfully LogOut")
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <div className="flex md:justify-around justify-between navbar rounded-xl shadow-lg bg-[#333e49]  fixed  md:flex-row  max-w-7xl ">
        <div className="flex  lg:md:gap-10">
          {/* responsive Mobile view----------------------- */}
          <div className="dropdown text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#333e49] rounded-box w-72"
            >
              <div className="">
                <li>
                  <Link>
                    <FaToolbox></FaToolbox>JOBS
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaUserPlus></FaUserPlus>Candidates
                  </Link>
                </li>
                <li>
                  <Link to={'peopleSearch'}>
                    <RiUserSearchFill></RiUserSearchFill>People Search
                  </Link>
                </li>

                <li>
                  <Link>
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

          <Link>
            <img
              className="h-8 w-20  border border-green-700"
              src={logo2}
              alt=""
            />
          </Link>
        </div>
        {/* ---------------------------------------------------- end mobile view */}

        {/* large screen view start------------------------------------- */}

        <div className="font-bold hidden lg:md:flex ">
          <ul className="menu menu-horizontal px-1  text-white">
            <li>
              <Link to={'jobs'}>JOBS</Link>
            </li>
            <li>
              <Link>CANDIDATES</Link>
            </li>
            <li>
              <Link to={'peopleSearch'}>PEOPLE SEARCH</Link>
            </li>

            {/* icons */}
            <li className="relative group">
              <Link>
                <BiSolidCalendar className="text-[18px]"></BiSolidCalendar>
              </Link>
              <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                <h2 className=" text-[10px] w-max ">Agenda</h2>
              </div>
            </li>
            <li className="relative group">
              <Link to={'report-center'}>
                <BsPieChart className="text-[17px]"></BsPieChart>
              </Link>
              <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                <h2 className=" text-[10px] w-max ">Reports</h2>
              </div>
            </li>
            <li className="relative group">
              <Link>
                <BiSolidCalendar className="text-[18px]"></BiSolidCalendar>
              </Link>
              <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                <h2 className=" text-[10px] w-max ">Activity</h2>
              </div>
            </li>
          </ul>
        </div>

        {/* large screen right side-------------- */}
        <div className=" flex lg:md:pe-6 pe-4 gap-2 lg:md:navbar-end lg:md:gap-3">
          <div className="form-control">
            <div className="flex gap-12">
              {/* input */}
              <div className="input-group ">
                <input
                  type="text"
                  placeholder="Search for candidates..."
                  className="input  input-sm px-[-30px] hidden lg:block bg-[#333e49] text-white border-slate-600"
                />
                <button className="btn btn-outline btn-sm hidden lg:block bg-[#333e49] border-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-6 text-white "
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
                  <GrMail className="text-white text-2xl"></GrMail>
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
              <CgMenuGridR className="text-white text-2xl"></CgMenuGridR>
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
            <div className="dropdown  text-white">
              <label tabIndex={0} className="ease-in-out">
                <div className="relative group">
                  <div className="bg-gray-300 rounded-full transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-100 opacity-80">
                    <img className="rounded-full h-8" src={userImage} alt="" />
                  </div>
                  <div className="opacity-0 rounded-md absolute top-14 right-0 bg-slate-600 text-white  pointer-events-none group-hover:opacity-100">
                    <h2 className="px-2 py-2 text-[10px] w-max ">{name}</h2>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className=" -ms-32 menu menu-sm dropdown-content mt-7  p-1 shadow-xl bg-white rounded-box w-max"
              >
                <div className="text-black">
                  <li>
                    <div className="border-b-4">
                      <Link>
                        <img
                          className="h-10 rounded-full"
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

                  <li>
                    <Link>Setting</Link>
                  </li>
                  <li>
                    <Link>Help</Link>
                  </li>
                  <li>
                    <Link>Add Company</Link>
                  </li>
                  {
                    user &&
                    <>
                      <li onClick={handleLogOut} className='btn btn-outline btn-sm btn-error ml-3'>
                        Log-out
                      </li>

                    </>

                    // <>
                    //   {/* <li><Link to='/login'>LogIn</Link></li> */}
                    //   <Link to={'/login'}>
                    //     <button className="  btn btn-outline text-green-600 font-bold btn-sm hidden md:block">
                    //       Log In
                    //     </button>
                    //   </Link>
                    // </>
                  }
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
