// import React from "react";

// const LoaderInternal = () => {
//   return (
//     <div className="fixed mt-32 top-0 left-0 w-full h-full flex items-center justify-center z-50">
//       <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600"></div>
//     </div>
//   );
// };

// export default LoaderInternal;

// import React from "react";

// const LoaderInternal = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-white opacity-80">
//       <div className="relative w-10 h-10">
//         <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-blue-500 animate-spin"></div>
//         <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-blue-500 animate-spin-reverse"></div>
//       </div>
//       <div className="ml-4 text-gray-700 text-lg font-semibold">Loading...</div>
//     </div>
//   );
// };

// export default LoaderInternal;

import React from "react";

const LoaderInternal = () => {
  return (
    <div className="fixed mt-40 inset-0 flex items-center justify-center z-50 bg-transparent">
      <div className="w-12 h-12 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
    </div>
  );
};

export default LoaderInternal;


