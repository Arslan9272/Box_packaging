import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Your images
import slide_image_1 from "../assets/images/slider/slider_img1.jpg";
import slide_image_2 from "../assets/images/slider/slider_img2.jpg";
import slide_image_3 from "../assets/images/slider/slider_img3.jpg";
import slide_image_4 from "../assets/images/slider/slider_img4.jpg";

const Slider = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-screen" // Set full height of the screen
      >
        {[slide_image_4, slide_image_2, slide_image_3, slide_image_1].map(
          (image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full">
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover object-center" // Ensure full cover
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
