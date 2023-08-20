import React from "react";
import "./FreeDemo.css";
import DemoForm from "../../components/DemoForm/DemoForm";

const FreeDemo = () => {
  return (
    <div className="bg-image -rounded-b-xl p-20 flex justify-between items-center">
      <div className="space-y-5">
        <h1 className="font-extrabold text-4xl text-[#00673b]">
          Get a demo of Job Swift .
        </h1>
        <p>
          Job Swift is an easy-to-use platform of people-centered solutions to{" "}
          <br />
          help you hire, onboard, run payroll, and develop your culture.
        </p>
        <h2 className="font-semibold text-xl text-[#348562]">
          Schedule a free demo now to:
        </h2>
        <ul className="text-gray-600">
          <li>Learn about the Job Swift platform from a product expert.</li>
          <li>Discuss your specific HR goals and pain points.</li>
          <li>Explore how our tools can help you succeed.</li>
          <li>See pricing options.</li>
        </ul>
      </div>
      <div>
        <DemoForm></DemoForm>
      </div>
    </div>
  );
};

export default FreeDemo;
