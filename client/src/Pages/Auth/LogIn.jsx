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
  const from =
    location.state?.from?.pathname ||
    (isAdmin && "/dashboard/admin/dashboard") ||
    (!isAdmin && "/dashboard/jobs");

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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  // if (loading) {
  //   return <Loader />
  // }

  return (
    <div className="lg:md:bg-gradient-to-r lg:md:from-indigo-900 lg:md:via-indigo-800 lg:md:to-indigo-500 lg:md:p-32 lg:md:rounded-tl-[100px] lg:md:rounded-br-[100px] mt-2">
      <div className="card flex lg:flex-row  lg:w-2/3  mx-auto  border pb-0 rounded-2xl shadow-lg shadow-black h-[380px]">
        <div className="lg:md:w-2/3 hidden md:block">
          <img className="h-[380px] rounded-l-2xl" src={login} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body my-24 lg:md:my-0 h-[380px] lg:md:w-[420px] bg-white  rounded-r-2xl "
        >
          {/* <div className=' font-bold  '>
            <h1 className='text-center font-serif text-xl'>Log In Now</h1>
          </div> */}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              {...register("email", { required: true })}
              placeholder="email"
              className="rounded-md "
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
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
            <div className="flex rounded-md px-1 border-black border">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="password"
                className="outline-none border-none focus:border-none focus:ring-0 flex-grow"
              />
              <button
                className="cursor-pointer p-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}

            {errors.password?.type === "minLength" && (
              <span className="text-red-500">
                Password Must be Six Character
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500">
                At least one uppercase letter, one lowercase letter, one number
                and one special character
              </span>
            )}

            <label className="label">
              <Link
                to={"forgotPassword"}
                className="label-text-alt link link-hover font-semibold"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <small className="font-semibold">
            Are you new to Job Swift?{" "}
            <span>
              <Link className="ml-1  text-swift underline" to="/register">
                Register Now
              </Link>
            </span>
          </small>
          <div className="form-control lg:md:px-20">
            <input
              type="submit"
              placeholder=""
              value="Login"
              className="border-2 border-cyan-500 hover:bg-cyan-500 rounded-lg py-1 font-medium hover:text-white"
            />
          </div>

          <SocialLogIn></SocialLogIn>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
