import React from "react";
import useAppliedJobs from "./useAppliedJobs";
import NoContent from "../NoContent";
const Applied = () => {
  const [appliedJobs] = useAppliedJobs();
  const filteredJobs = appliedJobs.filter((job) => job.stage === "applied");

  return (
    <div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <div key={job.id}>{job.name}</div>)
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default Applied;
