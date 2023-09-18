import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderPreview from "./SliderPreview";


const Slider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-feedback")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);

  const chunkArray = (arr, size) => {
    return arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );
  };

  const testimonialChunks = chunkArray(testimonials, 3);

  return (
    <div className="mySwiper">
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} 
      
      breakpoints={{
        640: {
          slidesPerView: 1, // Display one slide per view on devices with width 640px or less
        },
        // Add more breakpoints as needed
      }}
      >
        {testimonialChunks.map((chunk,index) => (
          <SwiperSlide key={index}>
            <div className="py-0 md:py-10 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chunk.map((data) => (
                  <SliderPreview key={data.id} data={data} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
