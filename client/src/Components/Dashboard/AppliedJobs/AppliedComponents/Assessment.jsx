import React, { useContext, useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";


import SourcedDetails from "./Applied/SourcedDetails";
import { authContext } from "../../../../Auth/AuthProvider";
import AssessmentDetails from "./Applied/AssessmentDetails";
import { getAllCandidates } from "../../../../redux/candidates/candidatesOperation";

const Sourced = () => {
  const {user} = useContext(authContext)
  const email = user?.email;
  const dispatch = useDispatch()
  // console.log(id);
  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
  // console.log('from sourced', candidates);

const assessmentCandi = candidates.filter(c=>c.stage ==="Assessment")
console.log(assessmentCandi);

  useEffect(() => {
    // Dispatch the action to fetch candidates based on the selected sorting order
    dispatch(getAllCandidates(email));
  }, [dispatch]);


 
  // const filteredJobs = appliedJobs.filter((job) => job.stage === "sourced");
  return (
  <div>
   <AssessmentDetails assessmentCandi={assessmentCandi} isLoading={isLoading}  stageName={assessmentCandi.length} />


  </div>
  );
};

export default Sourced;
