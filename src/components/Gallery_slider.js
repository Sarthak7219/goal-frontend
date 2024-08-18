import React, { useState, useEffect } from "react";
import img_bg from "../images/img-bg.jpg";
import "./style.css";

const Gallery = () => {
  const images = [
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
    img_bg,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerPage = 8; // Number of images to display at a time

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const totalSlides = Math.ceil(images.length / imagesPerPage);
        return (prevSlide + 1) % totalSlides;
      });
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="gallery-container">
      <div
        className="image-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div className="image-item" key={index}>
            <img src={imgSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
