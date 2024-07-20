import React, { useEffect, useState } from "react";

import "./global.css";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";

import workshopImage from "../images/workhopimage.png";
import workshopDetailImage1 from "../images/workshops/workshopdetail1.png";
import iconImg from "../images/icon.png";

function WorkshopDetail({ workshops ,image_workshop}) {
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
          {image_workshop.map((item) => (
          <img
            key={item.id}
            src={`${process.env.REACT_APP_API_URL}${item.image}`}
            alt="Case Study"
            className="gallery-image"
          />
        ))}

            <div>
              <h2>About the workshop</h2>
              <p>{workshop.description}</p>
            </div>
            <div>
              <h2>Speakers</h2>
              <p>
                Dr. Lakra Harshit, Dr. Shobha Poudel, Dr. Surabhi Mehrotra,
                Prof. Deepthi Wickramasinghe
              </p>
            </div>
            <div>
              <h2>Organised by</h2>
              <p>
                Science Hub, Nepal and Indian Institute of Technology Roorkee,
                India
              </p>
            </div>

            <div>
              <h2>Key takeaways</h2>
              <p>
                1. Actively involve women from the community in planning,
                implementation, and monitoring is very crucial as they come
                under the vulnerable section. <br />
                <br /> 2. Need on improving infrastructure, providing financial
                aid to farmers, and creating mental health support. It assigns
                responsibility to specific government departments for effective
                coordination and planning.
                <br />
                <br />
                3. Understanding the challenges faced by the rural areas at the
                time of disasters and highlighting the need for community
                engagement at the local level.
                <br />
                <br /> 4. Need for promoting disaster specific training for the
                youth to make the community prepared for emergencies, cope up
                with the aftermath and build back better.
              </p>
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
                <p>Offline</p>
              </div>
              <div>
                <h4>Venue:</h4>
                <p>{workshop.venue}</p>
              </div>
            </div>
            <div className="recent-workshops">
              <h2>Recent Workshops</h2>
              <div className="workshop-cards">
                <div className="card">
                  <img src={workshopDetailImage1} alt="" />

                  <div className="desc">
                    <h5>Charity, Expectati ons vs. Reality</h5>
                    <p>Homeless</p>
                  </div>
                </div>
                <div className="card">
                  <img src={workshopDetailImage1} alt="" />

                  <div className="desc">
                    <h5>Charity, Expectati ons vs. Reality</h5>
                    <p>Homeless</p>
                  </div>
                </div>
                <div className="card">
                  <img src={workshopDetailImage1} alt="" />

                  <div className="desc">
                    <h5>Charity, Expectati ons vs. Reality</h5>
                    <p>Homeless</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetail;
