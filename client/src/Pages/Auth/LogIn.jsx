import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";
import logo from "../../assets/logo/logo3.png";
import SocialLogIn from "./SocialLogIn";
import { toast } from "react-hot-toast";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { logIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard/jobs";
  // console.log(from);

  // const [error, setError] = useState(null)

  const onSubmit = (data) => {
    // console.log(data)
    // console.log(data.password)

    const email = data.email;
    const password = data.password;
    console.log(email, password);
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
       
        toast.success("Successfully LogIn")
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="px-4 md:px-5 lg:px-2 w-full max-w-md mx-auto mt-20 mb-0">
      <div className=" ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body rounded-xl shadow-lg  border border-green-600"
        >
          <div className="text-center text-2xl font-bold flex justify-center items-center ">
            <img src={logo} alt="" className="w-40" />

            <p>Login Now !!</p>
          </div>
          <hr className="bg-green-500 w-full h-px my-4" />

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              })}
              placeholder="password"
              className="input input-bordered"
            />

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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <small className="text-left text-blue-800 my-3">
            Are you new to the website
            <span>
              <Link
                className="ml-3 underline text-green-900 font-semibold"
                to="/register"
              >
                Register Now
              </Link>
            </span>
          </small>
          <div className="form-control mt-6">
            <input
              type="submit"
              placeholder=""
              value="Login"
              className="input input-bordered btn btn-outline"
            />
          </div>
          <SocialLogIn></SocialLogIn>
        </form>
      </div>
      <div className="flex  items-center text-xs mt-0 ml-3  ">
        <Link to={'/'} className="flex justify-center items-center gap-1 font-bold">
          <FaArrowLeft />
          Home
        </Link>
        <span className="text-2xl mr-2 ml-2">·</span>
        <span className="font-bold" >  Term and Conditions </span>
      </div>
    </div>
  );
};

export default LogIn;
