import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutShimmer from "../components/AboutShimmer";
import Markdown from "react-markdown";
import { get_about_data } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";
import ZoomImage from "../pages/ZoomImage";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutData, setAboutData] = useState("");
  const [active, setActive] = useState("abstract");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_about_data();
        setAboutData(data);
      } catch (error) {
        alert("Server error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    setTimeout(() => setIsLoading(false), 2000);
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
          <div
            className="quicklink"
            onClick={() => handleScroll("abstract")}
            style={{
              color:
                active === "abstract"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Abstract
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("description")}
            style={{
              color:
                active === "description"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Description
          </div>
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
                        <ZoomImage
                          src={
                            aboutData.img1
                              ? `${SERVER_URL}${aboutData.img1}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-1"
                        />
                        <ZoomImage
                          src={
                            aboutData.img2
                              ? `${SERVER_URL}${aboutData.img2}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-2"
                        />
                        <ZoomImage
                          src={
                            aboutData.img3
                              ? `${SERVER_URL}${aboutData.img3}`
                              : "/static/images/img-bg.jpg"
                          }
                          alt="img-3"
                        />
                        <ZoomImage
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
                  <p>Data not found</p>
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
                  <p>Data not found</p>
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
