import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SliderPreview = ({ data }) => {
  // console.log(data);
  const {
    testimonial,
    avatar,
    name,
    rating,
    titleOfComment,
    umberOfEmployees,
    companyName,
    jobPosition,
  } = data;
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-green-400/50   cursor-pointer">
        <div className="flex justify-start">
          <FaQuoteLeft className="text-green-200 w-12 h-12 flex-shrink-0 ml-2" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={avatar} alt={name} className="w-32 h-32 rounded-full" />
          <p className="text-swift text-xs mt-2 font-bold"> {titleOfComment}</p>
          <div className="  position-absolute bottom-0 end-50 mb-3 mt-2">
            <Rating
              readonly
              className="text-success"
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar> </FaStar>}
              fullSymbol={<FaStar> </FaStar>}
            />
          </div>
        </div>

        <div className="flex flex-col  items-start">
          <p className="text-gray-600 mb-4 flex-grow">“{testimonial}”</p>
          <p className="text-swift text-xl font-bold mb-3">{name}</p>
          <p className="text-gray-800 text-sm font-bold">{jobPosition}</p>
          <p className="text-gray-800 text-sm font-bold">{companyName}</p>
          <p className="text-gray-800 text-sm font-bold">{umberOfEmployees}</p>
        </div>
        <div className="flex justify-end">
          <FaQuoteRight className="text-green-200 w-12 h-12 flex-shrink-0 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default SliderPreview;
