
// export default Candidates;
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../../Components/Dashboard/Candidate/SearchBar";
import SearchResult from "../../../Components/Dashboard/Candidate/SearchResult";
import CandidateTables from "../../../Components/Dashboard/Candidate/CandidateTables";
import ScanNewCandidate from "../../../Components/Dashboard/Candidate/ScanNewCandidate";
import { getAllCandidates } from "../../../redux/candidates/candidatesOperation";
import { authContext } from "../../../Auth/AuthProvider";

const Candidates = () => {
  const dispatch = useDispatch();
  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
  console.log(candidates);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  // const [sortOrder, setSortOrder] = useState("newest");
  const {user} = useContext(authContext)
  const email  = user?.email;

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchResult(query);
  };

  useEffect(() => {
    // Dispatch the action to fetch candidates based on the selected sorting order
    dispatch(getAllCandidates(email));
  }, [dispatch]);

  return (
    <div className="pt-[68px] flex justify-between items-start gap-6 w-full">
      <div className="w-8/12">
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>

        {searchResult ? (
          <div className="mt-20">
            <SearchResult searchResult={searchResult} />
          </div>
        ) : null}

        <div className="pt-32">
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <div className="w-10 h-10 border-t-4 border-r-4 border-gray-500 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <CandidateTables candidates={candidates}  />
          )}
        </div>
      </div>

      <div className="pt-24 ml-6 w-4/12">
        <ScanNewCandidate />
      </div>
    </div>
  );
};

export default Candidates;
