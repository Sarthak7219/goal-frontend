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

  useEffect(() => {
    console.log("Case Studies Data:", case_studies); // Log the case_studies prop to inspect its structure
  }, [case_studies]);

  useEffect(() => {
    console.log("Images Data:", image_case_study); // Log the image_case_study prop to inspect its structure
  }, [image_case_study]);

  useEffect(() => {
    console.log("Workshops Data:", workshops); // Log the workshops prop to inspect its structure
  }, [workshops]);

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

      <div className="container" id="case_studies">
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
              <p>Case Study</p>
              <h1>{case_study.study_area}</h1>
              <h5>Description</h5>
              <div className="column">
                <p>{case_study.description}</p>
                <div className="recent-workshops">
                  <h2>Workshops</h2>
                  <div className="workshop-cards">
                    {workshops && workshops.length > 0 ? (
                      workshops
                        .filter(
                          (workshop) => workshop.case_study === case_study.id
                        )
                        .map((workshop) => (
                          <div className="card" key={workshop.id}>
                            <img src={workshop.image} />
                            <div className="desc">
                              <h5>{workshop.title}</h5>
                              <p>Homeless</p>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p>No workshops available.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="photos">
                {image_case_study && image_case_study.length > 0 ? (
                  image_case_study
                    .filter((image) => image.case_study === case_study.id)
                    .map((image, index) => (
                      <img
                        src={image.image}
                        alt={`Image ${index}`}
                        key={index}
                      />
                    ))
                ) : (
                  <p>No images available.</p>
                )}
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}

export default Casestudy;
