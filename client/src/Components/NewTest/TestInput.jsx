// import React from 'react';

// const TestInput = () => {
//       return (
//             <div>
//                  <h1>URL: </h1>
//                  <input type="text" placeholder='paste a link' />
//                  <button>Shorten</button>
//             </div>
//       );
// };

// export default TestInput;

import React, { useState } from "react";

const TestInput = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
      setInputValue(value)
      setValue('')
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      <h1 className=" mb-4">Shorten URL:</h1>
      <div className="flex max-w-sm items-center">
        <input
          className="flex-grow p-2 border rounded-l-lg"
          type="text"
          value={value}
          placeholder="Paste a link"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Shorten
        </button>
      </div>
    </div>
  );
};

export default TestInput;
