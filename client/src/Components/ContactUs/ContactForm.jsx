import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const form = useRef();
  console.log(form.current);
  const hiddenSubmitButton = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        hiddenSubmitButton.current.click(); // Trigger form submission
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyxfski",
        "template_pk3511d",
        form.current,
        "KFpl2_TKCnfpdz-y_"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your mail has been sent successfully. Thanks ❤",
              showConfirmButton: false,
              timer: 1500,
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <div className="text-center">
        <h2 className="text-2xl text-swift font-semibold mb-2">Email Us</h2>
        <p className="mb-4 text-second">Just complete the form below</p>
      </div>
      <form className="text-second" ref={form} onSubmit={sendEmail}>
        <div className="md:flex gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobSwiftCustomer" className="block mb-2">
            Are you a Job Swift customer?
          </label>
          <select
            id="jobSwiftCustomer"
            name="jobSwiftCustomer"
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2">
            Subject:
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="inquiry">Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="support">Support</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-primary mt-3 text-white px-4 py-2 rounded-md hover:bg-primary-dark w-full"
            type="submit"
            ref={hiddenSubmitButton} // Hidden submit button
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
