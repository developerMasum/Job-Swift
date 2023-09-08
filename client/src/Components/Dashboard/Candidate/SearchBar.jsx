import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="fixed flex items-center space-x-2 w-full px-5 bg-slate-100 py-5 shadow-xl rounded-md">
    <div className="relative w-2/4">
      <input
        type="text"
        className="pl-10 pr-3 py-2 w-full rounded-md placeholder-gray-400 bg-gray-100"
        placeholder="Search candidates..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <FaSearch className="h-5 w-5 text-gray-400" />
      </span>
    </div>

    <button
      className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
  );
};

export default SearchBar;

