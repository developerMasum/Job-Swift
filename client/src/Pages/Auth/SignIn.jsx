import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/jobSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../../Auth/AuthProvider";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "South Korea",
  "Russia",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Singapore",
];

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createAuthUser, updateUserProfile } = useContext(authContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
      // navigate(from, { replace: true })
    });
  };

  return (
    <div className="   w-full md:max-w-[700px] border-[1px] bg-neutral-50 rounded-t-lg mx-auto md:p-6">
      <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-primary font-[900] text-2xl text-center">
          See Job Swift in Action
        </h1>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-2">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
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
                className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
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
              className="w-full p-2 placeholder-gray-400 border rounded"
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
              className="w-full p-2 placeholder-gray-400 border rounded"
              placeholder="Company Name"
            />
          )}
        />
        <div className="md:flex space-y-4 md:space-y-0">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone Number is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
                placeholder="Phone Number"
              />
            )}
          />
          <Controller
            name="employeeCount"
            control={control}
            rules={{ required: "Employee Count is required" }}
            render={({ field }) => (
              <select {...field} className="flex-1 p-2 border rounded w-full">
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
            <select {...field} className="w-full p-2 border rounded">
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
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
              className="w-full p-2 placeholder-gray-400 border rounded"
              placeholder="Email Address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "password required",
            pattern: {
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              className="w-full p-2 placeholder-gray-400 border rounded"
              placeholder=" Enter Your Password"
            />
          )}
        />

        <div>
          <p>
            By submitting this information, I consent to receiving marketing
            communications...
          </p>
        </div>
        <button
          type="submit"
          className="w-full p-2  bg-[#00673b] text-white rounded hover:bg-[#00673b]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
