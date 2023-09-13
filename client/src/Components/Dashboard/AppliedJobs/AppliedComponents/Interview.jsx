import React, { useContext, useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getAllCandidates } from "../../../../redux/candidates/candidatesOperation";
import { authContext } from "../../../../Auth/AuthProvider";
import InterviewDetails from "./Applied/InterviewDetails";




const Sourced = () => {
  const {user} = useContext(authContext)
  const email = user?.email;
  const dispatch = useDispatch()
  // console.log(id);
  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
  // console.log('from sourced', candidates);

const interviewCandi = candidates.filter(c=>c.stage ==="Interview")
console.log(interviewCandi);

  useEffect(() => {
    // Dispatch the action to fetch candidates based on the selected sorting order
    dispatch(getAllCandidates(email));
  }, [dispatch]);


 
  // const filteredJobs = appliedJobs.filter((job) => job.stage === "sourced");
  return (
  <div>
   <InterviewDetails interviewCandi={interviewCandi} isLoading={isLoading}  stageName={interviewCandi.length} />


  </div>
  );
};

export default Sourced;
