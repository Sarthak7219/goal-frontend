import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutShimmer from "../components/AboutShimmer";
import Markdown from "react-markdown";
import { get_about_data } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";

function About() {
  const [isLoading, setIsLoading] = useState(true); // Loading state for shimmer effect
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_about_data();
        setAboutData(data);
      } catch (error) {
        alert("Server error");
        // console.log("Error fetching about data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay
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
        <img src="/static/images/icon.png" alt="icon" />
      </div>

      <div className="container" id="about">
        <div className="quick-link-box" id="about-sidebox">
          <a href="#abstract" className="quicklink">
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
                {aboutData ? (
                  <div className="about-abs">
                    <div className="markdown">
                      <Markdown className="markdown-text">
                        {aboutData.abstract}
                      </Markdown>
                    </div>
                    <div className="about-image">
                      <div className="image-grid">
                        <img
                          src={
                            aboutData.img1
                              ? `${SERVER_URL}${aboutData.img1}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-1"
                        />
                        <img
                          src={
                            aboutData.img2
                              ? `${SERVER_URL}${aboutData.img2}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-2"
                        />
                        <img
                          src={
                            aboutData.img3
                              ? `${SERVER_URL}${aboutData.img3}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-3"
                        />
                        <img
                          src={
                            aboutData.img4
                              ? `${SERVER_URL}${aboutData.img4}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-4"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Data not found</p> // or display a default message
                )}
              </section>
              <section className="about" id="description">
                <h1>Description</h1>
                {aboutData ? (
                  <div className="about-desc">
                    <div className="content">
                      <Markdown className="markdown-text">
                        {aboutData.description}
                      </Markdown>
                    </div>
                  </div>
                ) : (
                  <p>Data not found</p> // or display a default message
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
