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

      <div className="overflow-x-auto">
        <div className="md:w-3/4 md:mx-auto overflow-x-scroll">
          <div className="w-full md:overflow-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left text-2xl font-medium text-gray-800">
                    Serial No
                  </th>
                  <th className="py-3 px-6 text-left text-2xl font-medium text-gray-800">
                    Candidate Name
                  </th>
                  <th className="py-3 px-6 text-left text-2xl font-medium text-gray-800">
                    Company Name
                  </th>
                  <th className="py-3 px-6 text-left text-2xl font-medium text-gray-800">
                    Job Title
                  </th>
                  <th className="py-3 px-6 text-left text-2xl font-medium text-gray-800">
                    Hiring Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {certificationData.map((certification) => (
                  <tr
                    key={certification.id}
                    className="border-t border-gray-200 hover:bg-blue-100 hover:opacity-75"
                  >
                    <td className="py-4 px-6 whitespace-no-wrap">
                      {certification.id}.
                    </td>
                    <td className="py-4 px-6 whitespace-no-wrap">
                      {certification.userName}
                    </td>
                    <td className="py-4 px-6 whitespace-no-wrap">
                      {certification.companyName}
                    </td>
                    <td className="py-4 px-6 whitespace-no-wrap">
                      {certification.jobTitle}
                    </td>
                    <td className="py-4 px-6 whitespace-no-wrap">
                      {certification.hiringDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationList;
