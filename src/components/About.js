import React, { useState, useEffect } from "react";
import iconImg from "../images/icon.png";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";
import AboutShimmer from "./AboutShimmer";

function About({ about_data }) {
  const [isLoading, setIsLoading] = useState(true); // Loading state for shimmer effect

  useEffect(() => {
    const cleanup = scrollSpy();
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="About-page">
      <div className="page-hero" id="about-bg">
        <div className="page-head">
          <h1>
            About The{" "}
            <span
              style={{
                color: "#EC028C",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
            >
              Project
            </span>
          </h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/about" className="hero-link">
              About
            </NavLink>
          </p>
        </div>
        <img src={iconImg} alt="icon" />
      </div>

      <div className="container" id="about">
        <div className="quick-link-box" id="about-sidebox">
          <a href="#abstract" className="quicklink active">
            - Abstract
          </a>
          <a href="#description" className="quicklink">
            - Description
          </a>
        </div>

        <div className="right" id="about-right">
          {isLoading ? (
            <AboutShimmer />
          ) : (
            <>
              <section className="about" id="abstract">
                <h1>Abstract</h1>
                {about_data ? (
                  <div className="about-abs">
                    <div className="content">{about_data.abstract}</div>
                    <div className="about-image">
                      <div className="image-grid">
                        <img src={about_data.img1} alt="Image 1" />
                        <img src={about_data.img2} alt="Image 2" />
                        <img src={about_data.img3} alt="Image 3" />
                        <img src={about_data.img4} alt="Image 4" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Loading...</p> // or display a default message
                )}
              </section>
              <section className="about" id="description">
                <h1>Description</h1>
                {about_data ? (
                  <div className="about-desc">
                    <div className="content">{about_data.description}</div>
                  </div>
                ) : (
                  <p>Loading...</p> // or display a default message
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
