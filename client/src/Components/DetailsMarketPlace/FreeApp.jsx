import React, { useState } from "react";
import { FaMedal, FaAngleRight } from "react-icons/fa";
import eliteImg from "../../../src/assets/Image/elite-badge.svg";
import { Link } from "react-router-dom";

const FreeApp = () => {
  const exclusiveData = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/9Hg20B2/free-App01.webp",
      name: "JobSwift app for Slack",
      title: "Communication",
      description:
        "Employees can use some of BambooHR’s most popular features without leaving Slack",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/G28MdfW/new-Intre04.webp",
      name: "Microsoft Single Sign-On",
      title: "Identity Management",
      description:
        "Allow users to log in to BambooHR using their Microsoft account login.",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/nDLwJcG/free-App03.webp",
      name: "Indeed",
      title: "Job Boards & Sourcing",
      description:
        "Indeed.com is the world's #1 job site*, *comScore, Total Visits",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/sgjHVrP/free-App04.webp",
      name: "SAML",
      title: "Identity Management",
      description:
        "SAML is a standard for logging users into applications based on their sessions",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/HL8ZdD8/free-App05.webp",
      name: "Gifted",
      title: "Recognition & Rewards",
      description:
        "Your dream rewards and recognition platform. Unlimited Users, Gifts, Brands, Automations and more – all for FREE.",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/XFgpsj1/free-App06.webp",
      name: "Truework",
      title: "Employment Verification",
      description:
        "Automate your manual workflows and save your HR team hundreds of hours per year with automated employment verification.",
    },
  ];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Preferred Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {exclusiveData.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-lg  border-[1px] border-green-200 p-6 transition-transform duration-300 transform hover:scale-105 relative overflow-hidden"
            onMouseEnter={() => setHoveredId(offer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`transition-opacity duration-300 ${
                hoveredId === offer.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={offer.imageUrl}
                alt={offer.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {offer.name}
                </h3>
                <img src={eliteImg} alt="Elite Badge" className="w-10 h-10" />
              </div>
            </div>
            <div
              className={`transition-opacity duration-300 ${
                hoveredId === offer.id ? "opacity-100" : "opacity-0"
              } absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-between p-6`}
            >
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {offer.name}
                  </h3>
                  <img src={eliteImg} alt="Elite Badge" className="w-6 h-6" />
                </div>
                <p className="text-gray-600 mb-2">{offer.title}</p>
                <p className="text-gray-700">{offer.description}</p>
              </div>
              <div className="flex justify-end">
                <Link
                  to="/"
                  className="text-green-500 font-semibold flex items-center transition-transform duration-300 hover:translate-x-1"
                >
                  Learn More
                  <FaAngleRight className="ml-1 text-green-500" />
                </Link>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              SPECIAL OFFER
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeApp;
