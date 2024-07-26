import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import leftArrowImg from "../images/rightarrow.png";
import rightArrowImg from "../images/rightarrow.png";
import calendarIcon from "../images/calendar.svg";
import location_icon from "../images/location_icon.svg";
import selected_dot from "../images/selected_dot.svg";
import unselected_dot from "../images/unselected_dot.svg";
import "./style.css";

const Workshop_Carousel = ({ workshops }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const workshopsPerPage = 3;
  const totalDots = Math.ceil(workshops.length / workshopsPerPage);

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
      <div className="workshops">
        <ul
          className="stories-list"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {workshops.map((workshop, index) => (
            <li class="worshop-detail-home" key={index}>
              <div class="detail">
                <h2>{workshop.title}</h2>
                <div class="venue">
                  <div>
                    <img src={location_icon} alt="icon" />
                    <p>{workshop.venue}</p>
                  </div>
                  <div>
                    <img src={calendarIcon} alt="icon" />
                    <p>{workshop.date}</p>
                  </div>
                </div>
                <NavLink to={`/workshops/workshop-detail/${workshop.id}`}>
                  {" "}
                  <button class="btn">View Details</button>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
    </div>
  );
};

export default Workshop_Carousel;
