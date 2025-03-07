import React, { useState } from "react";

const ClickCarousel = ({ stories = [] }) => {
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
          src="/static/images/rightarrow.png"
          className="left-arrow"
          alt="Previous"
          onClick={prevSlide}
        />
        <img
          src="/static/images/rightarrow.png"
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
                <a href={story.link ? story.link : "#"}>
                  <img
                    src={story.link && story.thumbnail ? story.thumbnail : null}
                    className="thumbnail"
                    alt="story-thumbnail"
                    style={{
                      border: !story.thumbnail ? "1px solid #252A34" : "none",
                    }}
                  />
                  <img
                    src="/static/images/youtube.svg"
                    className="yt-icon"
                    alt="yt-icon"
                  />
                </a>
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
              src={
                index === currentIndex
                  ? "/static/images/selected_dot.svg"
                  : "/static/images/unselected_dot.svg"
              }
              alt={`Dot ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClickCarousel;
