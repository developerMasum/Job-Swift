import { useContext } from "react";
import { authContext } from "../../Auth/AuthProvider";
import logo2 from "../../assets/logo/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { user, logout } = useContext(authContext)
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


  const navLink = (
    <>
      <li>
        <Link>Our Platforms</Link>
      </li>
      <li>
        <Link>Solution</Link>
      </li>
      <li>
        <Link>Why Job Swift </Link>
      </li>
      <li>
        <Link>Resources</Link>
      </li>

      <li>
        <Link to='contact-us'>Contact Us</Link>
      </li>
    </>
  );

  // fixed mt-[-20px] lg:md:flex-row bg-base-200 lg:md:mt-[-80px] 

  // lg:md:flex justify-center
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-100 max-w-screen-xl bg-slate-200 text-black">
        <div className="flex justify-around gap-40 lg:md:navbar-start lg:md:gap-10">
          <div className="dropdown bg-green-400">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-box w-80"
            >
              {navLink}

              <div className="input-group my-3 ml-6">
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

              <div className="flex gap-6 justify-center items-center mr-8">
                <Link to={`/login`} className="btn btn-outline text-green-600 font-bold btn-sm my-3 w-1/3">
                  Log In
                </Link>
                <Link to={'/demo-page'} className="btn btn-outline  bg-green-500 btn-sm mt-4 lg:md:mt-0 my-3 w-1/2">
                  Get a Demo
                </Link>
              </div>
            </ul>
          </div>
          <a className=" ">
            <img
              className="h-12 w-32 rounded-lg border border-green-400"
              src={logo2}
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center mr-10 font-bold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="mr-6 flex-col mt-4  lg:md:flex-row lg:md:navbar-end   lg:md:gap-3 lg:md:justify-center lg:md:items-center lg:md:mt-0 ">
          {/* <div>
                        <FaSearch className='w-12 h-6'></FaSearch>
                    </div> */}
          <div className="form-control">
            <div className="flex gap-12">
              <div className="input-group ">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered input-sm px-[-30px] hidden lg:block"
                />
                <button className="btn btn-square btn-sm hidden lg:block">
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
            </div>
          </div>





          {
            user ? <>


              <small>
                <img style={{ height: "30px", width: "30px", borderRadius: "10px" }} className=' rounded-4  ' src={user?.photoURL} alt="user image" />
              </small>


              {/* 
              <li onClick={handleLogOut} className='btn btn-outline btn-sm btn-error'>
                Log-out
              </li> */}

            </> : <>
              {/* <li><Link to='/login'>LogIn</Link></li> */}
              <Link to={'/login'}>
                <button className="  btn btn-outline text-green-600 font-bold btn-sm hidden md:block">
                  Log In
                </button>
              </Link>
            </>
          }
          {/* <Link to={'/login'}>
            <button className="  btn btn-outline text-green-600 font-bold btn-sm hidden md:block">
              Log In
            </button>
          </Link> */}
          {
            user ? <>
              <Link to={'/dashboard/jobs'}>
                <button className="btn btn-outline  bg-green-500 btn-sm mt-4 lg:md:mt-0 hidden md:block">
                  Dashboard
                </button>
              </Link> </> : <>
              <Link to={'/demo-page'}>
                <button className="btn btn-outline  bg-green-500 btn-sm mt-4 lg:md:mt-0 hidden md:block">
                  Get a Demo
                </button>
              </Link></>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
