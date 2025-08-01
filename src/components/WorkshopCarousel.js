import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const WorkshopCarousel = ({ workshops = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const workshopsPerPage = 3;
  const totalWorkshops = workshops.length;
  const totalDots = Math.ceil(totalWorkshops / workshopsPerPage);

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
      <div className="workshops">
        {totalWorkshops === 0 ? (
          <p>Workshops not found!</p>
        ) : (
          <ul
            className="stories-list"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {workshops.map((workshop, index) => (
              <li className="worshop-detail-home" key={index}>
                <img
                  src={
                    workshop.thumbnail
                      ? workshop.thumbnail
                      : "/static/images/workshop-thumbnail.jpg"
                  }
                  className="thumbnail-img"
                />
                <div className="title">Workshop #{workshop.id}</div>
                <div className="detail">
                  <h2>{workshop.title}</h2>
                  <div className="venue">
                    <div>
                      <img src="/static/images/location_icon.svg" alt="icon" />
                      <p>{workshop.venue}</p>
                    </div>
                    <div>
                      <img src="/static/images/calendar.svg" alt="icon" />
                      <p>
                        {workshop.formatted_date} -{" "}
                        {workshop.formatted_end_date}
                      </p>
                    </div>
                  </div>
                  <NavLink to={`/workshops/workshop-detail/${workshop.id}`}>
                    {" "}
                    <button className="btn">View Details</button>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {totalWorkshops > 0 && (
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

export default WorkshopCarousel;
