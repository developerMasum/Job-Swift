import { RiImageAddLine } from "react-icons/ri";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TimezoneSelect from "react-timezone-select";

const ProfileSettings = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <>
      <div className="shadow-md h-20 flex items-center justify-center mb-6">
        <h2 className="text-center text-5xl font-bold">Workable</h2>
      </div>
      <div>
        <div className="bg-slate-100  max-w-2xl container mx-auto">
          <h3 className="text-3xl font-semibold text-center text-gray-600 font-serif">
            Profile
          </h3>
          <form
            className="bg-white text-gray-500 p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <div className="md:flex gap-3">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-lg font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={`border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">First Name is required</span>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-lg font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={`border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">Last Name is required</span>
                  )}
                </div>
              </div>
              <div className="md:flex gap-3">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="jobTitle"
                    className="block text-lg font-semibold mb-2"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    className={`border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-2 hover:ring-blue-300 transition duration-300 ${
                      errors.jobTitle ? "border-red-500" : ""
                    }`}
                    {...register("jobTitle", { required: true })}
                  />
                  {errors.jobTitle && (
                    <span className="text-red-500">Job Title is required</span>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="timeZone"
                    className="block text-lg font-semibold mb-2"
                  >
                    Time Zone
                  </label>
                  <div className="select-wrapper w-full">
                    <Controller
                      name="timeZone"
                      control={control}
                      defaultValue={
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                      }
                      render={({ field }) => (
                        <TimezoneSelect {...field} value={field.value} />
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block mb-1 text-lg font-semibold  "
                >
                  Photo
                </label>
                <div className="flex flex-col items-center border-dashed p-8 border-[1px] border-gray-500 rounded-lg shadow-md">
                  <div className="flex items-center border-[2px]  hover:shadow-xl rounded-md border-gray-400 bg-gray-100 h-20 px-2">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept=".jpg, .png"
                      {...register("image")}
                    />

                    <label
                      htmlFor="image"
                      className="cursor-pointer flex items-center space-x-2 p-2 text-gray-500 rounded-md border-[1px]"
                    >
                      <RiImageAddLine className="text-2xl" />{" "}
                      <span>Choose JPG, PNG</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 w-48 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
