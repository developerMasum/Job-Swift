import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Integration = () => {
  const informations = [
    {
      id: 1,
      name: "Need a Custom Integration?",
      icon: "https://i.ibb.co/y8qzxLn/icon01.webp",
      description:
        "Do you need a custom integration with your BambooHR account? Extend the power of the #1 HR software for small and medium businesses by connecting with a developer who can bring your idea to life.",
      link: "Learn More",
    },
    {
      id: 2,
      name: "Suggest an App",
      icon: "https://i.ibb.co/GTPyJ2z/icon02.webp",
      description:
        "Don’t see your favorite app? Let us know, and we’ll see if we can work our magic.",
      link: "Suggest an App",
    },
  ];

  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row gap-6">
        {informations.map((info) => (
          <div
            key={info.id}
            className="flex-1 bg-white border-[1px] border-green-200 rounded-lg p-6 "
          >
            <div className="flex items-center justify-center">
              <img src={info.icon} alt={info.name} className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">{info.name}</h3>
            <p className="text-gray-600">{info.description}</p>
            <div className="mt-4">
              <Link
                to="/"
                className="text-swift font-medium hover:underline transition duration-300 transform hover:translate-x-1"
              >
                {info.link}{" "}
                <FaExternalLinkAlt className="inline ml-1 text-swift" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
