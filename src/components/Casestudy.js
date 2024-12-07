import React, { useEffect } from "react";
import iconImg from "../images/icon.png";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";

function Casestudy({
  case_studies = [],
  workshops = [],
  image_case_study = [],
}) {
  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="casestudy-page">
      <div className="page-hero" id="case_studies-bg">
        <div className="page-head">
          <h1>Case Studies</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /
            <NavLink to="/casestudy" className="hero-link">
              Case Studies
            </NavLink>
          </p>
        </div>
        <img src={iconImg} alt="Icon" />
      </div>

      <div className="container" id="case_study-select">
        {case_studies.length > 0 ? (
          case_studies.map((case_study) => (
            <div
              className="quick-link-box"
              id={`case_study-${case_study.id}`}
              key={case_study.id}
            >
              <a
                href={`#case-study-${case_study.id}`}
                className="quicklink active"
              >
                {case_study.study_area}
              </a>
            </div>
          ))
        ) : (
          <p>No case studies available.</p>
        )}
      </div>

      <div className="right" id="case_studies-right">
        {case_studies.length > 0 &&
          case_studies.map((case_study) => (
            <section
              className="case_studies"
              id={`case-study-${case_study.id}`}
              key={case_study.id}
            >
              <div>
                <p className="small-head">Case Study - {case_study.id}</p>
                <h1 style={{ marginTop: "5px" }}>{case_study.study_area}</h1>
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                Description
              </h3>
              <div className="column">
                <p>{case_study.description}</p>
                <div className="recent-workshops">
                  <h2>Related Workshops</h2>
                  <div className="workshop-cards">
                    {/* Filter workshops based on case study ID */}
                    {workshops.filter(
                      (workshop) => workshop.case_study === case_study.id
                    ).length > 0 ? (
                      // Map over the filtered workshops and render them
                      workshops
                        .filter(
                          (workshop) => workshop.case_study === case_study.id
                        )
                        .map((workshop) => (
                          <NavLink
                            to={`/workshops/workshop-detail/${workshop.id}`}
                          >
                            <div className="card" key={workshop.id}>
                              <img src={workshop.image} alt={workshop.title} />
                              <div className="desc">
                                <h5>
                                  {workshop.title.length > 20
                                    ? workshop.title.substring(0, 20) + ". . ."
                                    : workshop.title}
                                </h5>
                                <p>{workshop.date}</p>
                              </div>
                            </div>
                          </NavLink>
                        ))
                    ) : (
                      <p>No workshops found.</p>
                    )}
                  </div>
                </div>
              </div>
              <h3
                style={{
                  marginTop: "30px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Case Study Photos
              </h3>
              <div className="photos">
                {image_case_study && image_case_study.length > 0 ? (
                  (() => {
                    const filteredImages = image_case_study
                      .filter((image) => image.case_study === case_study.id)
                      .slice(0, 4);

                    return filteredImages.length > 0 ? (
                      filteredImages.map((image, index) => (
                        <div key={index} className="img-hover-div">
                          <img src={image.image} alt={`Image ${index}`} />
                          <div className="image-info">
                            <p className="date">Date: {image.date}</p>
                            <p className="location">{image.caption}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No images available for this case study.</p>
                    );
                  })()
                ) : (
                  <p>No images available.</p>
                )}
              </div>

              <NavLink
                to="/gallery"
                style={{
                  fontSize: "14px",
                  textDecoration: "underline",
                  color: "#172f5c",
                }}
              >
                See All Photos
              </NavLink>
            </section>
          ))}
      </div>
    </div>
  );
}

export default Casestudy;
