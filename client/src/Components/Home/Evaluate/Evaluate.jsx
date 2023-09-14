import React from "react";
import {
  FaGlobe,
  FaBolt,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaBullhorn,
  FaHandHoldingHeart,
} from "react-icons/fa";

const reasonsToChooseJobSwift = [
  {
    title: "World-class partners",
    description:
      "Collaborate with industry-leading partners for top-notch solutions.",
    iconColor: "#00756a",
    icon: <FaGlobe size={48} color="#00756a" />,
  },
  {
    title: "Fast, global support",
    description: "Get quick and responsive support anytime, anywhere.",
    iconColor: "#00756a",
    icon: <FaBolt size={48} color="#00756a" />,
  },
  {
    title: "Trusted security",
    description:
      "Protect your data and candidates with industry-standard security.",
    iconColor: "#00756a",
    icon: <FaShieldAlt size={48} color="#00756a" />,
  },
  {
    title: "Anywhere recruiting",
    description:
      "Recruit from anywhere in the world with JobSwift's flexibility.",
    iconColor: "#00756a",
    icon: <FaMapMarkedAlt size={48} color="#00756a" />,
  },
  {
    title: "Expert advice",
    description:
      "Access industry insights and advice to optimize your recruitment.",
    iconColor: "#00756a",
    icon: <FaBullhorn size={48} color="#00756a" />,
  },
  {
    title: "Assisted onboarding",
    description:
      "Get guided support during your onboarding process for a smooth start.",
    iconColor: "#00756a",
    icon: <FaHandHoldingHeart size={48} color="#00756a" />,
  },
];

const Evaluate = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center  text-gray-600 mb-12">
          More reasons companies around the <br /> world choose JobSwift
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {reasonsToChooseJobSwift.map((reason, index) => (
            <div
              key={index}
              className="border-[1px]  rounded-lg md:p-6  hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center text-gray-600">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-center mb-4">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
