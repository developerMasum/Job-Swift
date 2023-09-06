import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";

const CandidateTable = ({
  individualCheckboxes,
  onIndividualCheckboxChange,
}) => {
  const [candidates, setCandidates] = useState([]);

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
          isChecked={individualCheckboxes[index]}
          onCheckboxChange={() => onIndividualCheckboxChange(index)}
        />
      ))}
    </div>
  );
};

export default CandidateTable;
