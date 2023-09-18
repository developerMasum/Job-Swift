// import React, { useEffect, useState } from "react";

// const CertificationList = () => {
//   const [certificationData, setCertificationData] = useState([]);

//   useEffect(() => {
//     // Fetch the data from certifications.json
//     fetch("/certifications.json")
//       .then((response) => response.json())
//       .then((data) => setCertificationData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
// <div className="pt-8 px-4 md:px-8">
//   <h1 className="text-3xl font-bold mb-4 text-center">Certification List</h1>

//   <div className="overflow-x-auto">
//     <div className="md:w-3/4 md:mx-auto overflow-x-scroll">
//       <div className="w-full md:overflow-auto">
//         <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
//           <thead className="bg-teal-800 text-white">
//             <tr>
//               <th className="py-2 px-4 text-left font-semibold">Serial No</th>
//               <th className="py-2 px-4 text-left font-semibold">Candidate Name</th>
//               <th className="py-2 px-4 text-left font-semibold">Company Name</th>
//               <th className="py-2 px-4 text-left font-semibold">Job Title</th>
//               <th className="py-2 px-4 text-left font-semibold">Hiring Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {certificationData.map((certification) => (
//               <tr
//                 key={certification.id}
//                 className="odd:bg-gray-100 even:bg-gray-50"
//               >
//                 <td className="py-2 px-4">{certification.id}</td>
//                 <td className="py-2 px-4">{certification.userName}</td>
//                 <td className="py-2 px-4">{certification.companyName}</td>
//                 <td className="py-2 px-4">{certification.jobTitle}</td>
//                 <td className="py-2 px-4">{certification.hiringDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>



//   );
// };

// export default CertificationList;
import React, { useEffect, useState } from "react";

const itemsPerPage = 13;

const CertificationList = () => {
  const [certificationData, setCertificationData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch the data from certifications.json
    fetch("/certifications.json")
      .then((response) => response.json())
      .then((data) => setCertificationData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Get the items to display on the current page
  const itemsOnPage = certificationData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(certificationData.length / itemsPerPage);

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Certification List</h1>

      <div className="overflow-x-auto">
        <div className="w-full lg:w-3/4 mx-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left font-semibold">Serial No</th>
                <th className="py-2 px-4 text-left font-semibold">Candidate Name</th>
                <th className="py-2 px-4 text-left font-semibold">Company Name</th>
                <th className="py-2 px-4 text-left font-semibold">Job Title</th>
                <th className="py-2 px-4 text-left font-semibold">Hiring Date</th>
              </tr>
            </thead>
            <tbody>
              {itemsOnPage.map((certification) => (
                <tr
                  key={certification.id}
                  className="odd:bg-gray-100 even:bg-gray-50"
                >
                  <td className="py-2 px-4">{certification.id}</td>
                  <td className="py-2 px-4">{certification.userName}</td>
                  <td className="py-2 px-4">{certification.companyName}</td>
                  <td className="py-2 px-4">{certification.jobTitle}</td>
                  <td className="py-2 px-4">{certification.hiringDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center">
      <div className="flex gap-2 items-center mt-4">
        <button
          className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#8592;
        </button>
        <button
          className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &#8594;
        </button>
      </div>
      </div>
    </div>
  );
};

export default CertificationList;
