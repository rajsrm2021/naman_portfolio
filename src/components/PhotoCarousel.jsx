import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PhotoCarousel.scss";
import photo1 from "../assets/pic2.jpg";
import photo2 from "../assets/pic3.jpg";
import photo3 from "../assets/pic1.jpg";

const photos = [
  { id: 1, src: photo1, alt: "Photo 1" },
  { id: 2, src: photo2, alt: "Photo 2" },
  { id: 3, src: photo3, alt: "Photo 3" },
];

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <h2 className="title">My Gallary</h2>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="carousel-slide">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
