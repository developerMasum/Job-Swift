import React from "react";
import useAppliedJobs from "./useAppliedJobs";
import NoContent from "../NoContent";

const Sourced = () => {
  const [appliedJobs] = useAppliedJobs();
  const filteredJobs = appliedJobs.filter((job) => job.stage === "sourced");
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

export default Sourced;
