import { useContext, useRef, useState } from "react";

import login from "../../assets/login/login.png";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";

import SocialLogIn from "./SocialLogIn";
import { toast } from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";
import useAdmin from "../../Hooks/AdminHook/useAdmin";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./LogIn.css";
import axios from "axios";
import useAxiosSecure from "../../Hooks/AdminHook/useAxiosSecure";

const LogIn = () => {
  // const [isAdmin, isAdminLoading] = useAdmin();
  // console.log("isadmin", isAdmin);
  const [showPassword, setShowPassword] = useState(false);

  // console.log('at login page',isAdmin);

  // const [isAdmin] = useAdmin();
  //   console.log(isAdmin);
  const emailRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { logIn, resetPassword, loading, userUpdatePassword } =
    useContext(authContext);
  const navigate = useNavigate();
  // const destination = isAdmin
  //   ? "/dashboard/admin/dashboard"
  //   : "/dashboard/jobs";
  const [axiosSecure] = useAxiosSecure();

  // const [error, setError] = useState(null)

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  const onSubmit = async ({ email, password }) => {
    try {
      // setLoading(true);
      const { user } = await logIn(email, password);
      const { data: dataToken } = await axios.post(
        " https://server-job-swift.vercel.app/jwt",
        {
          email: email,
        }
      );
      //  console.log(dataToken.token);
      console.log("from error", user);
      const { data } = await axios.get(
        `https://server-job-swift.vercel.app/users/admin/${user?.email}`,
        { headers: { Authorization: `Bearer ${dataToken.token}` } }
      );
      //  console.log('isadmin error',isAdmin);
      toast.success("Successfully LogIn");
      //  setLoading(false);
      if (data.admin) {
        navigate("/dashboard/admin/dashboard");
      } else {
        navigate("/dashboard/jobs");
      }
    } catch (error) {
      //  setLoading(false);
      console.error(error);
      // toast.error(errorMessage);
    }
  };

  return (
    <div className="pt-20 pb-1 lg:md:p-40 bg-gradient-to-r from-indigo-700 from-10% via-sky-800 via-30% to-emerald-500 to-90% ">
      {/* // <div className="login_container"> */}
      <div className=" lg:md:flex lg:flex-row  lg:w-2/3  mx-auto pb-0 lg:md:rounded-2xl shadow-lg shadow-black ">
        <div className="">
          {/* <img className="h-[380px] rounded-l-2xl" src={login} alt="" /> */}
          <img
            src="https://i.ibb.co/Fqhmwhz/login01.png"
            alt=""
            className="h-[100%] lg:md:w-[400px] w-[100%] lg:md:rounded-l-2xl bg-white bg-opacity-40 p-5"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body lg:md:my-0  lg:md:w-[420px] bg-[#00756a] bg-opacity-40 rounded-r-2xl "
        >
          {/* <div className=' font-bold  '>
            <h1 className='text-center font-serif text-xl'>Log In Now</h1>
          </div> */}

          <div className="form-control">
            <label className="label ">
              <span className="label-text  text-white">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              {...register("email", { required: true })}
              placeholder="email"
              className="rounded-md bg-[#2f5c58]  border-green-800 bg-opacity-0"
            />
            {errors.email && (
              <span className="text-orange-800">This field is required</span>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-green-100">Password</span>
            </label>
            {/* <div className="flex border-2 border-gray-400">
              <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              })}
              placeholder="password"
              className="rounded-md border-none focus:border-none"
              
            />

            </div> */}
            <div className="flex rounded-md  px-1 bg-white border-green-800  border">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="password"
                className="focus:border-none focus:ring-0 flex-grow bg-green-200 bg-opacity-0 border-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" bg-white"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="" />
                ) : (
                  <AiFillEye className="" />
                )}
              </button>
            </div>

            {errors.password && (
              <span className="text-orange-800">This field is required</span>
            )}

            {errors.password?.type === "minLength" && (
              <span className="text-orange-800">
                Password Must be Six Character
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-orange-800">
                At least one uppercase letter, one lowercase letter, one number
                and one special character
              </span>
            )}

            <label className="label">
              <Link
                to={"forgotPassword"}
                className="underline font-semibold text-sm text-gray-100"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <small className="font-semibold text-gray-100">
            Are you new to Job Swift?{" "}
            <span>
              <Link
                className="ml-1  text-cyan-200 underline text-sm font-bold"
                to="/register"
              >
                Register Now
              </Link>
            </span>
          </small>
          <div className="form-control lg:md:px-20">
            <input
              type="submit"
              placeholder=""
              value="Login"
              className="border  bg-[#2f5c58] hover:bg-lime-600    rounded-lg py-1 font-medium text-white"
            />
          </div>

          <div className="ms-16 md:lg:">
            <SocialLogIn></SocialLogIn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
