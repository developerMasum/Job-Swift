import React, { useEffect, useState } from "react";
import SearchBar from "../../../Components/Dashboard/Candidate/SearchBar";
import SearchResult from "../../../Components/Dashboard/Candidate/SearchResult";
import CandidateTables from "../../../Components/Dashboard/Candidate/CandidateTables";
import ScanNewCandidate from "../../../Components/Dashboard/Candidate/ScanNewCandidate";
import axios from "axios";

const Candidates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const handleSearch = (query) => {
    setSearchQuery(query); // Store the search query
    // Perform your search logic here with the 'query' parameter
    // For now, let's just set the query as the result
    setSearchResult(query);
  };

  useEffect(() => {
    // Make an HTTP GET request to fetch candidates based on the selected sorting order
    axios.get(`http://localhost:5000/all-applications?sortOrder=${sortOrder}`)
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error('Error fetching candidates:', error);
      });
  }, [sortOrder]); // Include sortOrder as a dependency

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
        ) : (
          ""
        )}

        <div className="pt-20">
          <CandidateTables candidates={candidates} setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
      </div>

      <div className="pt-24 ml-6 w-4/12">
        <ScanNewCandidate />
      </div>
    </div>
  );
};

export default Candidates;
