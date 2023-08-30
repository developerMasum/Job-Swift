import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-2 w-full">
   <div className="w-1/2 flex items-center border border-gray-300 rounded-md">
  <span className="pl-3">
    <FaSearch className="h-5 w-5 text-gray-400" />
  </span>
  <input
    type="text"
    className="pl-2 pr-3 py-2 w-full focus:outline-none placeholder-gray-400 bg-transparent"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>

  
    </div>
  );
};

export default SearchBar;
