import React, { useState } from "react";
import leftArrowImg from "../images/rightarrow.png";
import rightArrowImg from "../images/rightarrow.png";
import selected_dot from "../images/selected_dot.svg";
import unselected_dot from "../images/unselected_dot.svg";
import about1 from "../images/about1.jpg";
import "./style.css";

const Click_Carousel = ({ stories = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalStories = stories.length;
  const storiesPerPage = 3;
  const totalDots = Math.ceil(totalStories / storiesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDots);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalDots) % totalDots);
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
        {totalStories === 0 ? (
          <p>Stories not found!</p>
        ) : (
          <ul
            className="stories-list"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {stories.map((story, index) => (
              <li key={index} className="story">
                {story.link ? (
                  <iframe
                    width="310"
                    height="232"
                    src={story.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Workshop Video"
                  ></iframe>
                ) : (
                  <img src={about1} alt="Story" />
                )}
                <p>
                  <b>Date: </b>
                  {story.date}
                </p>
                <p>
                  <b>Location: </b>
                  {story.location}
                </p>
                <p>{story.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {totalStories > 0 && (
        <div className="dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <img
              key={index}
              src={index === currentIndex ? selected_dot : unselected_dot}
              alt={`Dot ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Click_Carousel;
