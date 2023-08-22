import { useContext, useRef } from 'react';


import login from '../../assets/login/login.png'


import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";

import SocialLogIn from "./SocialLogIn";
import { toast } from "react-hot-toast";

const LogIn = () => {

 
  // console.log(from);
  const emailRef = useRef();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { logIn, resetPassword, userUpdatePassword } = useContext(authContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/dashboard/jobs";


  // const [error, setError] = useState(null)

  const onSubmit = (data) => {
    console.log(data)
    console.log(data.password)
    const email = data.email;
    const password = data.password;
    console.log(email, password);
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
        console.log(user);
       
        toast.success("Successfully LogIn")
        navigate(from, { replace: true });
      

      })
      .catch((error) => {

        const errorMessage = error.message;
        toast.error(errorMessage);
      });

  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-400 p-28  mt-5 p-auto lg:md:rounded-tl-[100px] lg:md:rounded-br-[100px]">

      <div className="card flex lg:flex-row  md:lg:w-2/3  mx-auto  border pb-0 rounded-2xl shadow-lg shadow-black h-[380px]">
        <div className='lg:md:w-2/3 '>
          <img className='h-[380px] rounded-l-2xl' src={login} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body h-[380px] lg:md:w-[420px] bg-white  rounded-r-2xl ">
          {/* <div className=' font-bold  '>
            <h1 className='text-center font-serif text-xl'>Log In Now</h1>
          </div> */}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" ref={emailRef}  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type="password"  {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
              placeholder="password" className="input input-bordered " />

            {errors.password && <span className='text-red-500'>This field is required</span>}

            {errors.password?.type === "minLength" && <span className='text-red-500'>Password Must be Six Character</span>}
            {errors.password?.type === "pattern" && <span
              className='text-red-500'>At least one uppercase letter, one lowercase letter, one number and one special character</span>}

            {/* <label className="label"> */}
              {/* <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a> */}
              {/* <Link  className="label-text-alt link link-hover">Forgot password?</Link> */}
            <label className="label">
              <Link to={'forgotPassword'}  className="label-text-alt link link-hover font-semibold">Forgot password?</Link>
            </label>
          </div>
          <small className=''>Are you new to the website <span><Link className='ml-4  text-fuchsia-700  underline' to="/register">Register Now</Link></span></small>
          <div className="form-control px-16">
            <input type="submit" placeholder="" value="Login" className="input input-bordered btn btn-outline btn-sm " />
          </div>


          <SocialLogIn></SocialLogIn>
        </form>

      </div>
    </div>

  );
};

export default LogIn;