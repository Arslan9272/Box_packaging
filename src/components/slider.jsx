// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Your images
// import slide_image_1 from "../assets/images/images1.jpeg";
// import slide_image_2 from "../assets/images/img2.jpeg";
// import slide_image_3 from "../assets/images/img3.jpeg";
// import slide_image_4 from "../assets/images/img4.jpeg";

// const Slider = () => {
//   return (
//     <div className="w-full px-4 py-10 bg-gray-100">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//         className="w-full max-w-screen-xl mx-auto"
//       >
//         {[slide_image_1, slide_image_2, slide_image_3, slide_image_4].map((image, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex justify-center items-center max-w-[500px] max-h-[400px] rounded-xl overflow-hidden"
//           >
//             <img
//               src={image}
//               alt={`slide-${index}`}
//               className="w-full h-full object-contain rounded-xl"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Your images
import slide_image_1 from "../assets/images/image1.jpg";
import slide_image_2 from "../assets/images/img2.jpeg";
import slide_image_3 from "../assets/images/img3.jpeg";
import slide_image_4 from "../assets/images/img4.jpeg";

const Slider = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {[slide_image_1, slide_image_2, slide_image_3, slide_image_4].map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
  <div className="w-full h-full">
    <img
      src={image}
      alt={`slide-${index}`}
      className="w-full h-full object-cover"
    />
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
