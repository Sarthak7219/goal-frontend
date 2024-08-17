import React, { useEffect, useState } from "react";

import "./global.css";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";

import iconImg from "../images/icon.png";

function WorkshopDetail({ workshops, image_workshop }) {
  useEffect(() => {
    console.log("image_workshop Data:", image_workshop); // Log the case_studies prop to inspect its structure
  }, [image_workshop]);
  const { id } = useParams();
  const [workshop, setWorkshop] = useState(null);

  useEffect(() => {
    const selectedWorkshop = workshops.find(
      (workshop) => workshop.id === parseInt(id)
    );
    setWorkshop(selectedWorkshop);
  }, [id, workshops]);
  if (!workshop) {
    return <div>Workshop not found</div>;
  }
  const workshopImage = image_workshop.find(
    (image) => image.workshop === parseInt(id)
  );

  const filteredWorkshops = workshops.filter(
    (r_workshop) => r_workshop.id !== workshop.id
  );

  return (
    <div className="workshop-detail-page">
      <div className="page-hero" id="gallery-bg">
        <div className="page-head">
          <h1>Workshop</h1>
          <p>
            {" "}
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/workshops" className="hero-link">
              Workshops
            </NavLink>{" "}
            /{" "}
            <NavLink
              to={`/workshops/workshop-detail/${workshop.id}`}
              className="hero-link"
            >
              {workshop.title.slice(0, 40)}
            </NavLink>
          </p>
        </div>
        <img src={iconImg} alt="" />
      </div>

      <div className="workshop-content">
        <div className="section-head">
          <div>
            <p>Workshop #1</p>
            <div className="line"></div>
          </div>
          <h1>{workshop.title}</h1>
        </div>
        <div className="workshop-container">
          <div className="left-container">
            {workshop.link ? (
              <iframe
                width="700"
                height="298"
                src={workshop.link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Workshop Video"
              ></iframe>
            ) : (
              <img src={workshopImage} alt="Workshop" />
            )}

            <div>
              <h2>About the workshop</h2>
              <p>{workshop.description}</p>
            </div>
            <div>
              <h2>Speakers</h2>
              <p>{workshop.speakers}</p>
            </div>
            <div>
              <h2>Organised by</h2>
              <p>{workshop.organised_by}</p>
            </div>

            <div>
              <h2>Key takeaways</h2>
              <p>{workshop.key_takeaways}</p>
            </div>
          </div>
          <div className="right-container">
            <div className="workshop-detail">
              <h2>Workshop Details</h2>
              <div>
                <h4>Date:</h4>
                <p>{workshop.date}</p>
              </div>
              <div>
                <h4>Mode:</h4>
                <p>{workshop.mode}</p>
              </div>
              <div>
                <h4>Venue:</h4>
                <p>{workshop.venue}</p>
              </div>
            </div>
            <div className="recent-workshops">
              <h2>Recent Workshops</h2>
              <div className="workshop-cards">
                {filteredWorkshops.length > 0 ? (
                  filteredWorkshops.map((r_workshop) => (
                    <NavLink to={`/workshops/workshop-detail/${r_workshop.id}`}>
                      <div className="card" key={r_workshop.id}>
                        <img src={r_workshop.image} />
                        <div className="desc">
                          <h5>
                            {r_workshop.title.length > 20
                              ? r_workshop.title.substring(0, 20) + ". . ."
                              : r_workshop.title}
                          </h5>
                          <p>{r_workshop.date}</p>
                        </div>
                      </div>
                    </NavLink>
                  ))
                ) : (
                  <p>No workshops available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetail;
