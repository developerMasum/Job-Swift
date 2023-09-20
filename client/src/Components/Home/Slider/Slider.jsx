import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getFeedback } from "../../../redux/feedback/feedbackAPI";

const SliderNew = () => {
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const {feedbacks, isLoading}  = useSelector(state => state.feedbacks)
 console.log(feedbacks);

  useEffect(() => {
    dispatch(getFeedback())
  }, []);

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // Number of testimonials shown on a larger screen (md)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for smaller screens (sm)
        settings: {
          slidesToShow: 1, // Number of testimonials shown on smaller screens
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings} className="">
        {feedbacks?.map((data, index) => (
          // <div key={index} className="border-teal-200 border   p-4 rounded-lg shadow-md">
          //   <div>
          //     <div className="flex justify-between items-center">
          //      <div>
          //      <FaQuoteLeft className="text-teal-600"></FaQuoteLeft>
          //      </div>
          //       <div className="flex items-center justify-center mt-4">
          //     <Rating
          //       readonly
          //       initialRating={data?.rating}
          //       emptySymbol={<FaStar className="text-gray-400" />}
          //       fullSymbol={<FaStar className="text-teal-600" />}
          //     />
          //   </div>

          //     </div>
          //   </div>

          //   <p className="text-gray-700 mt-4 text-lg">
          //     {data.feedback.slice(0, 80)}
          //   </p>

          //   <div className="flex items-center">
          //     <img
          //       src={data.image}
          //       alt={data.name}
          //       className="w-16 h-16 rounded-full"
          //     />
          //     <div className="ml-4">
          //       <h3 className="text-lg font-semibold text-gray-800">
          //         {data.name}
          //       </h3>
          //       <p className="text-gray-600">{data.email}</p>
          //     </div>
          //   </div>
          // </div>
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md border border-gray-300"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg text-yellow-600">
                <FaQuoteLeft />
              </div>
              <div className="flex items-center justify-center mt-4">
                <Rating
                  readonly
                  initialRating={data?.rating}
                  emptySymbol={<FaStar className="text-gray-400 text-lg" />}
                  fullSymbol={<FaStar className="text-yellow-600 text-lg" />}
                />
              </div>
            </div>

            <p className="text-gray-700 mt-4 text-lg">
              {data?.feedback?.slice(0, 100)}
            </p>

            <div className="flex items-center mt-4">
              <img
                src={data.image}
                alt={data.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {data.name}
                </h3>
                <p className="text-gray-600">{data.email}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderNew;
