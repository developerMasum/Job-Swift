import React, { useState } from "react";

const TestInput = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
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
      <div>
        <h2 className="my-2 overflow-scroll border-dashed border-2 border-[#c4cfde] rounded-lg p-2">
          CC64E678EA@jobs.workablemail.com
        </h2>
      </div>
    </div>
  );
};

export default TestInput;
