import React from 'react';
import NoContent from '../NoContent';
import useAppliedJobs from './useAppliedJobs';

const Hired = () => {
    const [appliedJobs] = useAppliedJobs()
    const filteredJobs = appliedJobs.filter((job) => job.stage === "hired");
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

export default Hired;