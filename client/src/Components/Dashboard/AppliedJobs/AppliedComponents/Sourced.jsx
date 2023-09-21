import React, { useContext, useEffect } from "react";

import NoContent from "../NoContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllCandidates } from "../../../../redux/candidates/candidatesOperation";
import { authContext } from "../../../../Auth/AuthProvider";
import SourcedDetails from "./Applied/SourcedDetails";

const Sourced = ({id}) => {
  const {user} = useContext(authContext)
  const email = user?.email;
  const dispatch = useDispatch()
  // console.log(id);
  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
  // console.log('from sourced', candidates);

  const sourcedCandi = candidates.filter((c) => c.jobId === id && c.stage === "Sourced");
  console.log(sourcedCandi);
  

  useEffect(() => {
    // Dispatch the action to fetch candidates based on the selected sorting order
    dispatch(getAllCandidates(email));
  }, [dispatch]);


 
  // const filteredJobs = appliedJobs.filter((job) => job.stage === "sourced");
  return (
  <div>
   <SourcedDetails sourcedCandi={sourcedCandi} isLoading={isLoading}  stageName={sourcedCandi.length} />


  </div>
  );
};

export default Sourced;
