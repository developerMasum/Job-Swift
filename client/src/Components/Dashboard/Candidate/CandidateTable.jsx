import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard"; // Assuming you have the CandidateCard component imported

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/candidatesData.json"); // Adjust the path to match your actual file location
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {candidates.map((candidate, index) => (
        <CandidateCard
          key={index}
          name={candidate.name}
          education={candidate.education}
          location={candidate.location}
          jobTitle={candidate.jobTitle}
          jobStatus={candidate.jobStatus}
          jobDetails={candidate.jobDetails}
          img={candidate.image}
        />
      ))}
    </div>
  );
};

export default CandidateTable;
