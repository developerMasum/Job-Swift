import React, { useState } from "react";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === "applicant tracking software") {
      console.log("Searching for Applicant Tracking Software...");
    } else {
      console.log("Search query does not match.");
    }
  };

  return (
    <div className="w-full p-10 flex flex-col items-center justify-center">
      <h2 className="mb-4 text-gray-600 font-extrabold text-2xl md:text-4xl">
        Search by Integration
      </h2>
      <div className="w-full space-y-6 max-w-md flex flex-col items-center">
        <input
          type="text"
          id="searchInput"
          className="w-full border border-gray-300 rounded-full py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-text-primary"
          placeholder='Try Searching "Applicant Tracking Software"'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchField;
