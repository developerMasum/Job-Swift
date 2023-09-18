// import React from "react";

// const LoaderInternal = () => {
//   return (
//     <div className="fixed mt-32 top-0 left-0 w-full h-full flex items-center justify-center z-50">
//       <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600"></div>
//     </div>
//   );
// };

// export default LoaderInternal;


import React from "react";

const LoaderInternal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-5 h-5 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      <div className="ml-2 text-gray-700 text-lg font-semibold">Loading...</div>
    </div>
  );
};

export default LoaderInternal;
