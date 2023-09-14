import React, { useContext, useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getAllCandidates } from "../../../../redux/candidates/candidatesOperation";
import { authContext } from "../../../../Auth/AuthProvider";
import HiredDetails from "./Applied/HiredDetails";

const Applied = () => {
  const {user} = useContext(authContext)
  const email = user?.email;
  const dispatch = useDispatch()
  // console.log(id);
  const { candidates, isLoading, error } = useSelector((state) => state.candidates);
  // console.log('from sourced', candidates);

const appliedCandi = candidates.filter(c=>c.stage ==="Hired")
console.log(appliedCandi);

  useEffect(() => {
    // Dispatch the action to fetch candidates based on the selected sorting order
    dispatch(getAllCandidates(email));
  }, [dispatch]);


  return (
    <div>
      <HiredDetails appliedCandi={appliedCandi}  stageName={appliedCandi.length} />
      
    </div>
  );
};

export default Applied;
