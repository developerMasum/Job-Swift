import React from 'react';
import NoContent from '../NoContent';
import useAppliedJobs from './useAppliedJobs';
import ShareAppliedDetails from '../ShareAppliedDetails';

const PhoneScreen = () => {
    const [appliedJobs] = useAppliedJobs()
    const filteredJobs = appliedJobs.filter((job) => job.stage === "phone-screen");
    return (
        <div>
           <ShareAppliedDetails stageName={'Assessment'}/>
        </div>
    );
};

export default PhoneScreen;