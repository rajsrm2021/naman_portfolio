import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Carousel.scss"; // Import SCSS for styling
import viedo from "../assets/viedo.mp4";
import viedo1 from "../assets/video2.mp4";
// import viedo2 from "../assets/viedo3.mp4";

const ViedoComponents = () => {
  return (
    <div id="animations" className="carousel-container">
      <h2 className="title">My Animations</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <video autoPlay loop muted className="video-slide">
            <source src={viedo1} type="video/mp4" />
          </video>
        </SwiperSlide>
        {/* <SwiperSlide>
          <video autoPlay loop muted className="video-slide">
            <source src={viedo2} type="video/mp4" />
          </video>
        </SwiperSlide> */}
        <SwiperSlide>
          <video autoPlay loop muted className="video-slide">
            <source src={viedo} type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ViedoComponents;
