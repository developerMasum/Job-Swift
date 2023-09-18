// import React from "react";
// import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
// import Rating from "react-rating";

// const SliderPreview = ({ data }) => {
//   // console.log(data);
//   const {
//     testimonial,
//     avatar,
//     name,
//     rating,
//     titleOfComment,
//     umberOfEmployees,
//     companyName,
//     jobPosition,
//   } = data;
//   return (
//     <div>
//       <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-green-400/50   cursor-pointer">
//         <div className="flex justify-start">
//           <FaQuoteLeft className="text-green-200 w-12 h-12 flex-shrink-0 ml-2" />
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <img src={avatar} alt={name} className="w-32 h-32 rounded-full" />
//           <p className="text-swift text-xs mt-2 font-bold"> {titleOfComment}</p>
//           <div className="  position-absolute bottom-0 end-50 mb-3 mt-2">
//             <Rating
//               readonly
//               className="text-success"
//               placeholderRating={rating}
//               emptySymbol={<FaRegStar />}
//               placeholderSymbol={<FaStar> </FaStar>}
//               fullSymbol={<FaStar> </FaStar>}
//             />
//           </div>
//         </div>

//         <div className="flex flex-col  items-start">
//           <p className="text-gray-600 mb-4 flex-grow">“{testimonial}”</p>
//           <p className="text-swift text-xl font-bold mb-3">{name}</p>
//           <p className="text-gray-800 text-sm font-bold">{jobPosition}</p>
//           <p className="text-gray-800 text-sm font-bold">{companyName}</p>
//           <p className="text-gray-800 text-sm font-bold">{umberOfEmployees}</p>
//         </div>
//         <div className="flex justify-end">
//           <FaQuoteRight className="text-green-200 w-12 h-12 flex-shrink-0 ml-2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderPreview;

// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import Rating from "react-rating";

// const SliderPreview = ({ data }) => {
//   const {
//     testimonial,
//     avatar,
//     name,
//     rating,
//     titleOfComment,
//     numberOfEmployees,
//     companyName,
//     jobPosition,
//   } = data;

//   return (
//     <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-green-400/50 cursor-pointer">
//       <div className="text-green-500 text-3xl mb-2">
//         <FaStar />
//       </div>

//       <p className="text-swift text-lg font-semibold mb-2">{titleOfComment}</p>

//       <div className="flex items-center justify-center space-x-2 mb-2">
//         <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
//         <div>
//           <p className="text-swift text-lg font-semibold">{name}</p>
//           <p className="text-gray-600 text-sm font-medium">{jobPosition}</p>
//           <p className="text-gray-600 text-sm font-medium">{companyName}</p>
//           <p className="text-gray-600 text-sm font-medium">
//             {numberOfEmployees}
//           </p>
//         </div>
//       </div>

//       <p className="text-gray-800 text-base mb-2">“{testimonial}”</p>

//       <div className="mt-2">
//         <Rating
//           readonly
//           className="text-success"
//           placeholderRating={rating}
//           emptySymbol={<FaRegStar />}
//           placeholderSymbol={<FaStar />}
//           fullSymbol={<FaStar />}
//         />
//       </div>

//       <div className="text-green-500 text-3xl mt-2">
//         <FaStar />
//       </div>
//     </div>
//   );
// };


import React from "react";
import { FaUserAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating";

const SliderPreview = ({ data }) => {
  const {
  name, rating, feedback, image,email
  } = data;




  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-green-400/50 cursor-pointer">
      <div className="mb-4 text-gray-600 flex items-center">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2 text-sm">{name}</span>
      </div>
      <p>{email}</p>

      <p className="text-lg font-semibold text-gray-800 mb-2">{feedback}</p>

      <Rating
        readonly
        initialRating={rating}
        emptySymbol={<FaStar className="text-gray-400" />}
        fullSymbol={<FaStar className="text-yellow-400" />}
      />

    </div>
  );
};

export default SliderPreview;
