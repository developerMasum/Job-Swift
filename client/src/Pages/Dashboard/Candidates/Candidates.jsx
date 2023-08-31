import React, { useEffect, useState } from 'react'; // Import useState
import SearchBar from '../../../Components/Dashboard/Candidate/SearchBar';
import SearchResult from '../../../Components/Dashboard/Candidate/SearchResult';
import CandidateTables from '../../../Components/Dashboard/Candidate/CandidateTables';
import ScanNewCandidate from '../../../Components/Dashboard/Candidate/ScanNewCandidate';
// import CandidateActionFootNav from '../../../Components/Dashboard/Candidate/CandidateActionFootNav';

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
        const response = await fetch("http://localhost:5000/all-applications");
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);



  return (
    <div className="pt-[68px] flex justify-between items-start gap-6 w-full">
      <div className='w-8/12'>
      <div>
      <SearchBar onSearch={handleSearch} />
      </div>

      {
        searchResult? <div className="mt-20">
        <SearchResult searchResult={searchResult} />
       
      </div> : ''
      }

<div className='pt-20'>
    <CandidateTables candidates={candidates} />
</div>
      </div>


{/* flex */}
<div className="pt-24 ml-6 w-4/12">
<ScanNewCandidate />
</div>


{/* <div className=''>
  <CandidateActionFootNav />
</div> */}

    </div>
  );
};

export default Candidates;
