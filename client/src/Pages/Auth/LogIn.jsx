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
import login_keyboard from "../../assets/Image/login_keyboard.png";
const LogIn = () => {
  const [isAdmin] = useAdmin();
  const [showPassword, setShowPassword] = useState(false);

  // console.log(isAdmin);

  // const isAdmin = useAdmin();
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
  const location = useLocation();
  const navigate = useNavigate();
  const destination =
    (isAdmin && "/dashboard/admin/users") || "/dashboard/jobs";

  // const [error, setError] = useState(null)

  const onSubmit = (data) => {
    // console.log(data)
    // console.log(data.password)
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    //forget password reset
    resetPassword(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // console.log(user);

        toast.success("Successfully LogIn");
        navigate(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="   lg:md:p-32">
      {/* // <div className="login_container"> */}
      <div className=" lg:md:flex lg:flex-row  lg:w-2/3  mx-auto pb-0 rounded-2xl shadow-lg shadow-black ">
        <div className="rounded-md">
          {/* <img className="h-[380px] rounded-l-2xl" src={login} alt="" /> */}
          <img
            src='https://i.ibb.co/Fqhmwhz/login01.png'
            alt=""
            className="h-[100%]  lg:md:w-[400px] w-[100%] rounded-l-2xl bg-white bg-opacity-40 p-5"
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
              className="rounded-md bg-[#2f5c58]  border-green-800 "
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
            <div className="flex rounded-md px-1 bg-[#2f5c58] border-green-800  border">
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
                className="p-2"
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
                className="underline font-semibold text-sm"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <small className="font-semibold">
            Are you new to Job Swift?{" "}
            <span>
              <Link
                className="ml-1  text-[#2f5c58] underline text-sm font-bold"
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
