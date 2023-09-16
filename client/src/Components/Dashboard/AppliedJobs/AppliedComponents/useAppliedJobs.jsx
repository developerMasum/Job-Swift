import { useEffect, useState } from "react";

const useAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    fetch(" https://server-wheat-beta.vercel.app/all-post")
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobs(data);
      })
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);
  return [appliedJobs];
};

export default useAppliedJobs;
