import React, { useEffect, useState } from "react";

const CertificationList = () => {
  const [certificationData, setCertificationData] = useState([]);

  useEffect(() => {
    // Fetch the data from certifications.json
    fetch("/certifications.json")
      .then((response) => response.json())
      .then((data) => setCertificationData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="pt-24 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Certification List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificationData.map((cert, index) => (
          <div key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              <img className="w-full" src={cert.image} alt={cert.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cert.name}</div>
                <p className="text-gray-700 text-base">{cert.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #HTML
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #CSS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #JavaScript
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;
