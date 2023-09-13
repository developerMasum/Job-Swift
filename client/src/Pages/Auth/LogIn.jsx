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

  return (
    // <div className="container mx-auto">
    //   <div className="md:flex justify-center items-center p-32 gap-10">
    //   {/* <div>
    //     <img src="https://i.ibb.co/Fqhmwhz/login01.png" alt="" />
    //   </div> */}
    //   <div>
    //     <form
    //       onSubmit={handleSubmit(onSubmit)}
    //       className="card-body my-24 lg:md:my-0 h-[380px] lg:md:w-[500px] border-[1px] bg-gray-200 rounded-md "
    //     >
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text font-semibold">Email</span>
    //         </label>
    //         <input
    //           type="email"
    //           ref={emailRef}
    //           {...register("email", { required: true })}
    //           placeholder="email"
    //           className="rounded-md "
    //         />
    //         {errors.email && (
    //           <span className="text-red-500">This field is required</span>
    //         )}
    //       </div>
    //       <div className="form-control ">
    //         <label className="label">
    //           <span className="label-text font-semibold">Password</span>
    //         </label>

    //         <div className="flex rounded-md px-1 border-black border">
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             {...register("password", {
    //               required: true,
    //               minLength: 6,
    //               pattern:
    //                 /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
    //             })}
    //             placeholder="password"
    //             className="outline-none border-none focus:border-none focus:ring-0 flex-grow"
    //           />
    //           <button
    //             className="cursor-pointer p-2"
    //             onClick={() => setShowPassword(!showPassword)}
    //           >
    //             {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
    //           </button>
    //         </div>

    //         {errors.password && (
    //           <span className="text-red-500">This field is required</span>
    //         )}

    //         {errors.password?.type === "minLength" && (
    //           <span className="text-red-500">
    //             Password Must be Six Character
    //           </span>
    //         )}
    //         {errors.password?.type === "pattern" && (
    //           <span className="text-red-500">
    //             At least one uppercase letter, one lowercase letter, one number
    //             and one special character
    //           </span>
    //         )}

    //         <label className="label">
    //           <Link
    //             to={"forgotPassword"}
    //             className="label-text-alt link link-hover font-semibold"
    //           >
    //             Forgot password?
    //           </Link>
    //         </label>
    //       </div>
    //       <small className="font-semibold">
    //         Are you new to Job Swift?{" "}
    //         <span>
    //           <Link className="ml-1  text-swift underline" to="/register">
    //             Register Now
    //           </Link>
    //         </span>
    //       </small>
    //       <div className="form-control lg:md:px-20">
    //         <input
    //           type="submit"
    //           placeholder=""
    //           value="Login"
    //           className="border-2 border-cyan-500 hover:bg-cyan-500 rounded-lg py-1 font-medium hover:text-white"
    //         />
    //       </div>

    //       <SocialLogIn></SocialLogIn>
    //     </form>
    //   </div>
    // </div>
    // </div>

    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url('https://i.ibb.co/K56y6f8/logigbackground.png')`,
    }}
  >
    <div className="md:flex md:items-center md:space-x-8 shadow-lg rounded-lg w-full md:w-[800px] bg-opacity-80 backdrop-blur p-6 md:p-12 bg-[#1f4440] text-white">
      <div className="md:w-1/2">
        <h2 className="text-4xl text-400 font-semibold mb-4">
          Welcome to Jobs Swift
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Discover a world of jobs and filtering at Jobs Swift. Sign in to your account.
        </p>
      </div>
      <div className="md:w-1/2 border border-[#609794] rounded-lg p-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border bg-[#17403d] text-gray-300 focus:outline-none focus:ring focus:border-[#00756A]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-400">
              Password
            </label>
            <div className="flex rounded-lg border bg-[#17403d] text-gray-300">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg border bg-[#17403d] text-gray-300 focus:outline-none focus:ring focus:border-[#00756A] flex-grow"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-2"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-gray-500" />
                ) : (
                  <AiFillEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div className="text-center">
            <Link to="forgotPassword" className="text-gray-400 hover:underline text-sm">
              Forgot password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#00756A] hover:bg-[#00584E] text-white py-2 rounded-lg font-semibold transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4">
          <small className="block font-semibold text-center text-gray-400">
            New to Jobs Swift?{" "}
            <Link to="/register" className="text-[#15413e] hover:underline">
              Register Now
            </Link>
          </small>
        </div>
        <div className="mt-4 text-white">
          <SocialLogIn />
        </div>
      </div>
    </div>
  </div>

  );
};

export default LogIn;
