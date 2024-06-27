import React, { useState } from "react";
import leftArrowImg from "../images/rightarrow.png";
import rightArrowImg from "../images/rightarrow.png";
import story1Img from "../images/story1 (2).png";
import story2Img from "../images/story2 (2).png";
import story3Img from "../images/story3 (2).png";
import selected_dot from "../images/selected_dot.svg";
import unselected_dot from "../images/unselected_dot.svg";
import "./style.css";

const Click_Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    story1Img,
    story2Img,
    story3Img,
    story1Img,
    story2Img,
    story3Img,
  ];
  const totalStories = stories.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalStories);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalStories) % totalStories
    );
  };

  return (
    <div className="stories-body">
      <div className="left-right-icons">
        <img
          src={leftArrowImg}
          className="left-arrow"
          alt="Previous"
          onClick={prevSlide}
        />
        <img
          src={rightArrowImg}
          className="right-arrow"
          alt="Next"
          onClick={nextSlide}
        />
      </div>
      <div className="stories">
        <ul
          className="stories-list"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {stories.map((story, index) => (
            <li key={index} className="story">
              <img src={story} alt={`Story ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="dots">
        {stories.map((_, index) => (
          <img
            key={index}
            src={index === currentIndex ? selected_dot : unselected_dot}
            alt={`Dot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Click_Carousel;
