import React from "react";

const LoaderInternal = () => {
  return (
    <div className="fixed mt-32 top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#23665e]"></div>
    </div>
  );
};

export default LoaderInternal;
