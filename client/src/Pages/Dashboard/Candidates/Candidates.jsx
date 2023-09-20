// import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import CandidateTables from "../../../Components/Dashboard/Candidate/CandidateTables";
// import ScanNewCandidate from "../../../Components/Dashboard/Candidate/ScanNewCandidate";
// import { getAllCandidates } from "../../../redux/candidates/candidatesOperation";
// import { authContext } from "../../../Auth/AuthProvider";
// import LoaderInternal from "../../../Components/LoaderInternal/LoaderInternal";

// const Candidates = () => {
//   const dispatch = useDispatch();
//   const { candidates, isLoading, error } = useSelector(
//     (state) => state.candidates
//   );
//   console.log(candidates);

//   // const [sortOrder, setSortOrder] = useState("newest");
//   const { user } = useContext(authContext);
//   const email = user?.email;

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     setSearchResult(query);
//   };

//   useEffect(() => {
//     // Dispatch the action to fetch candidates based on the selected sorting order
//     dispatch(getAllCandidates(email));
//   }, [dispatch]);

//   if (isLoading) {
//     return <LoaderInternal></LoaderInternal>;
//   }
//   return (
//     <div className=" md:flex justify-between items-start gap-6 w-full">
//       <div className="w-8/12">
//         <div className="pt-4">
//           {<CandidateTables candidates={candidates} />}
//         </div>
//       </div>

//       <div className="pt-24 ml-6 w-4/12">
//         <ScanNewCandidate />
//       </div>
//     </div>
//   );
// };

// export default Candidates;

// import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import CandidateTables from "../../../Components/Dashboard/Candidate/CandidateTables";
// import ScanNewCandidate from "../../../Components/Dashboard/Candidate/ScanNewCandidate";
// import { getAllCandidates } from "../../../redux/candidates/candidatesOperation";
// import { authContext } from "../../../Auth/AuthProvider";
// import LoaderInternal from "../../../Components/LoaderInternal/LoaderInternal";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

// const Candidates = () => {
//   const dispatch = useDispatch();
//   const { candidates, isLoading, error } = useSelector(
//     (state) => state.candidates
//   );
//   const { user } = useContext(authContext);
//   const email = user?.email;

//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     dispatch(getAllCandidates(email));
//   }, [dispatch]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const candidatesToShow = candidates.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(candidates.length / itemsPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   if (isLoading) {
//     return <LoaderInternal></LoaderInternal>;
//   }

//   return (
//    <div className="bg-gray-50">
//      <div className="md:flex container mx-auto justify-between items-start gap-6 w-full">
//       <div className="md:w-8/12">
//         <div className="pt-4">
//           <CandidateTables candidatesData={candidatesToShow} />

//           {/* Pagination */}
//           <div className="flex items-center justify-center">
//       <div className="flex gap-2 items-center mt-4">
//         <button
//           className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
//             currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           &#8592;
//         </button>
//         <button
//           className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
//             currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           &#8594;
//         </button>
//       </div>
//       </div>
//         </div>
//       </div>

//       <div className="pt-24 ml-6 md:w-4/12">
//         <ScanNewCandidate />
//       </div>
//     </div>
//    </div>
//   );
// };

// export default Candidates;


import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CandidateTables from "../../../Components/Dashboard/Candidate/CandidateTables";
import ScanNewCandidate from "../../../Components/Dashboard/Candidate/ScanNewCandidate";
import { getAllCandidates } from "../../../redux/candidates/candidatesOperation";
import { authContext } from "../../../Auth/AuthProvider";
import LoaderInternal from "../../../Components/LoaderInternal/LoaderInternal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const Candidates = () => {
  const dispatch = useDispatch();
  const { candidates, isLoading, error } = useSelector(
    (state) => state.candidates
  );
  const { user } = useContext(authContext);
  const email = user?.email;

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCandidates(email));
  }, [dispatch]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const candidatesToShow = candidates.slice(startIndex, endIndex);

  const totalPages = Math.ceil(candidates.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (isLoading) {
    return <LoaderInternal></LoaderInternal>;
  }

  return (
    <div className="bg-gray-50">
      <div className="md:flex container mx-auto justify-between items-start gap-6 w-full">
        <div className="md:w-8/12">
          <div className="pt-4">
            <CandidateTables candidatesData={candidatesToShow} />

            {/* Pagination */}
            <div className="flex items-center justify-center">
              <div className="flex gap-2 items-center mt-4">
                <button
                  className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
                    currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                >
                  &#8592;
                </button>
                <button
                  className={`bg-teal-800 text-white py-0 px-6  rounded-sm  ${
                    currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 ml-6 md:w-4/12">
          <ScanNewCandidate />
        </div>
      </div>
    </div>
  );
};

export default Candidates;

