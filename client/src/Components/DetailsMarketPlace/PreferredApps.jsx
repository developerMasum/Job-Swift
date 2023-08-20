import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import eliteImg from "../../../src/assets/Image/elite-badge.svg";
import { Link } from "react-router-dom";

const PreferredApps = () => {
  const appsData = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/6r2f1wz/apps-Img01.webp",
      name: "Checkr",
      title: "Background Checks",
      description:
        "Checkr powers the fastest, fairest background checks for businesses of all sizes",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/Dt160p6/apps-Img02.webp",
      name: "Lattice",
      title: "Performance",
      description: "Develop engaged and high-performing teams with Lattice",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/34jz0my/apps-Img03.webp",
      name: "15Five",
      title: "Performance",
      description: "Explore the platform transforming performance management.",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/TLkXqYX/apps-Img04.webp",
      name: "Leapsome",
      title: "Performance",
      description: "Develop your people, scale your business.",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/gdYkm7h/apps-Img05.webp",
      name: "Merge",
      title: "Integration Platform",
      description:
        "Developers integrate once with Merge to offer a full category of integrations to their customers.",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/rFkpJxN/apps-Img06.webp",
      name: "Nivati",
      title: "Health & Wellness",
      description:
        "A mental health and wellness platform for every employee, designed for the whole employee.",
    },
  ];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Preferred Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {appsData.map((offer) => (
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

export default PreferredApps;
