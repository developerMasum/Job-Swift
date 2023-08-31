import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 border rounded-md shadow-md"
    >
      <div className="text-center">
        <h2 className="text-2xl text-green-600 font-semibold mb-2">Email Us</h2>
        <p className="mb-4">Just complete the form below</p>
      </div>
      <div className="md:flex gap-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className={`w-full border rounded-md p-2 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <span className="text-red-500">First Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className={`w-full border rounded-md p-2 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.lastName && (
            <span className="text-red-500">Last Name is required</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className={`w-full border rounded-md p-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-red-500">Invalid email address</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block font-medium">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          {...register("company", { required: true })}
          className={`w-full border rounded-md p-2 ${
            errors.company ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.company && (
          <span className="text-red-500">Company Name is required</span>
        )}
      </div>
      <div className="md:flex gap-4">
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            {...register("phone", { required: true })}
            className={`w-full border rounded-md p-2 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <span className="text-red-500">Phone Number is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="employeeCount" className="block font-medium">
            Employee Count
          </label>
          <select
            id="employeeCount"
            {...register("employeeCount", { required: true })}
            className={`w-full border rounded-md p-2 ${
              errors.employeeCount ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101+">101+</option>
          </select>
          {errors.employeeCount && (
            <span className="text-red-500">Employee Count is required</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="isBambooHrCustomer" className="block font-medium">
          Are you a JobSwift Customer?
        </label>
        <select
          id="isBambooHrCustomer"
          {...register("isBambooHrCustomer", { required: true })}
          className={`w-full border rounded-md p-2 ${
            errors.isBambooHrCustomer ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.isBambooHrCustomer && (
          <span className="text-red-500">Please select an option</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-medium">
          Subject
        </label>
        <select
          id="subject"
          {...register("subject", { required: true })}
          className={`w-full border rounded-md p-2 ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select</option>
          <option value="billing">Billing Question</option>
          <option value="sales">Sales Question</option>
          <option value="support">Support Question</option>
          <option value="feature-request">Feature Request</option>
          <option value="partnership-information">
            Partnership Information
          </option>
          <option value="Careers">Careers</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <span className="text-red-500">Please select a subject</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className={`w-full border rounded-md p-2 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <span className="text-red-500">Message is required</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
