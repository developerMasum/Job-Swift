import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CandidateProfile = () => {
  const { id } = useParams();
  console.log("error", id);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch candidate profile data from the server based on the 'id' parameter
    const URL = ` https://server-job-swift.vercel.app/all-applications/${id}`;
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // Set the profile data in the state
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [id]); // Include 'id' as a dependency in the useEffect dependency array

  // Check if profileData is still null or loading, and render accordingly
  if (profileData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-24">
      {/* Render the profile data here */}
      <h1>Candidate Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default CandidateProfile;
