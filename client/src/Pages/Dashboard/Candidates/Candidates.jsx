import React, { useEffect, useState } from 'react'; // Import useState
import SearchBar from '../../../Components/Dashboard/Candidate/SearchBar';
import SearchResult from '../../../Components/Dashboard/Candidate/SearchResult';
import CandidateTables from '../../../Components/Dashboard/Candidate/CandidateTables';

const Candidates = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query); // Store the search query
    // Perform your search logic here with the 'query' parameter
    // For now, let's just set the query as the result
    setSearchResult(query);
  };



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/candidatesData.json");
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);



  return (
    <div className="pt-24">
      <SearchBar onSearch={handleSearch} />

      <div className="mt-4">
        <SearchResult searchResult={searchResult} />
       
      </div>

<div>
    <CandidateTables candidates={candidates} />
</div>

    </div>
  );
};

export default Candidates;
