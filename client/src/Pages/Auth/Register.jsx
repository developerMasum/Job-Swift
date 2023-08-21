import React, { useContext, useEffect, useState } from "react";
import icon from "../../assets/Register/Asset 1.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Register = () => {
  const [countries, setCountries] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createAuthUser, updateUserProfile } = useContext(authContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await dispatch(createUser(data));
      navigate("/dashboard");
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    const email = data.email;
    const password = data.password;
    createAuthUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(data);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Profile Created !!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      
    });
  };

  return (
    <div className="background md:flex flex-row-reverse items-center justify-between md:pr-5 md:h-screen md:p-10">
      <img
        className="md:w-1/3 w-full style p-10 pb-7 md:pb-0"
        src={icon}
        alt=""
      />
      <div className="md:w-3/5 w-full px-5">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-white pb-5 font-[900] text-2xl text-center">
            See Job Swift in Action
          </h1>
          <div
            className="space-y-3 p-6 w-full md:ml-5 rounded-2xl"
            style={{ backgroundColor: "rgba(10,10,43,0.75)" }}
          >
            <div className="md:flex space-y-4 md:space-y-0 md:space-x-2">
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="flex-1 p-2 focus:outline-none rounded-l-lg placeholder-gray-400  w-full"
                    placeholder="First Name"
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="flex-1 focus:outline-none rounded-r-lg  p-2 placeholder-gray-400 w-full"
                    placeholder="Last Name"
                  />
                )}
              />
            </div>

            <Controller
              name="jobTitle"
              control={control}
              rules={{ required: "Job Title is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full  p-2 placeholder-gray-400 focus:outline-none rounded"
                  placeholder="Job Title"
                />
              )}
            />
            <Controller
              name="companyName"
              control={control}
              rules={{ required: "Company Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 placeholder-gray-400 focus:outline-none rounded"
                  placeholder="Company Name"
                />
              )}
            />
            <div className="md:flex space-y-4 gap-3 md:space-y-0">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    className="flex-1 p-2 placeholder-gray-400 focus:outline-none rounded-l-lg w-full"
                    placeholder="Phone Number"
                  />
                )}
              />
              <Controller
                name="employeeCount"
                control={control}
                rules={{ required: "Employee Count is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="flex-1 focus:outline-none rounded-r-lg p-2   w-full"
                  >
                    <option value="">Employee Count</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101+">101+</option>
                  </select>
                )}
              />
            </div>

            {/* Other fields */}
            {/* ... */}

            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full focus:outline-none p-2  rounded"
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name.common}>
                      {" "}
                      {/* Assuming you want to use the common name of the country */}
                      {country.name.common}
                    </option>
                  ))}
                </select>
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full p-2 placeholder-gray-400 focus:outline-none rounded"
                  placeholder="Email Address"
                />
              )}
            />
            <div className="relative">
              {" "}
              {/* A container to position the show/hide button */}
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "password required",
                  pattern: {
                    message: "Invalid password format", // Adjusted the message as it previously mentioned email.
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 placeholder-gray-400 focus:outline-none rounded"
                    placeholder="Enter Your Password"
                  />
                )}
              />
              <button
                type="button" // Make sure it's type button to not submit the form
                className="absolute right-3 top-1/2 transform -translate-y-1/2" // Position the button
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="h-5 w-5" />
                ) : (
                  <AiFillEye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-5 h-4"
                name="checkbox"
                id="checkbox"
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              />
              <span className="text-white font-medium">
                I agreement your Register
              </span>
            </div>
            <button
              type="submit"
              disabled={!isCheckboxChecked}
              className={`w-full p-2 text-white rounded ${
                isCheckboxChecked
                  ? "bg-[#00673b] hover:bg-[#00572b]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
