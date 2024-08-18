import React, { useState, useEffect } from "react";
import iconImg from "../images/icon.png";
import "./global.css";
import "./style.css";
import img_bg from "../images/img-bg.jpg";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";

function Themes({ themes, case_study_theme_descriptions }) {
  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup();
    };
  }, []);

  const [activeOption, setActiveOption] = useState(0);
  const [activeTheme, setActiveTheme] = useState("theme-1");

  const handleClick = (index) => {
    setActiveOption(index);
  };

  const handleTheme = (themeId) => {
    if (themeId !== activeTheme) {
      setActiveTheme(themeId);
      setActiveOption(0); // Reset active case study to the first one
    }
  };

  //Fetching themes data
  const [Themes, setThemes] = useState([]);
  useEffect(() => {
    const API_URL_THEMES = `${process.env.REACT_APP_API_URL}themes/`;
    fetch(API_URL_THEMES)
      .then((response) => response.json())
      .then((Themes) => {
        setThemes(Themes);
      })
      .catch((error) => console.error("Error fetching themes data:", error));
  }, []);

  return (
    <div className="themes-page">
      <div className="page-hero" id="themes-bg">
        <div className="page-head">
          <h1>Themes</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/themes" className="hero-link">
              Themes
            </NavLink>
          </p>
        </div>
        <img src={iconImg} alt="icon" />
      </div>

      <div className="container" id="themes">
        <div className="quick-link-box" id="themes-sidebox">
          {Themes.length > 0 ? (
            Themes.map((theme) => (
              <div
                className={`theme-quicklink ${
                  activeTheme === `theme-${theme.id}` ? "active" : ""
                }`}
                onClick={() => handleTheme(`theme-${theme.id}`)}
              >
                - Theme-{theme.id}
              </div>
            ))
          ) : (
            <p>No themes found</p> // Display this message if no themes are available
          )}
        </div>

        <div className="right" id="themes-right">
          {Themes.length > 0 ? (
            Themes.map((theme) => (
              <div
                className={`theme-cont ${
                  activeTheme === `theme-${theme.id}` ? "active" : ""
                }`}
              >
                <div className="section-head3">
                  <p>Theme {theme.id}</p>

                  <h1>{theme.title}</h1>
                </div>
                <section className="themes" id="description">
                  <h1>Description</h1>
                  <p>{theme.description}</p>
                </section>
                <section className="themes" id="theme-case-studies">
                  <h1>Examples From Case Studies</h1>
                  <div className="theme-cs-box">
                    <div className="cs-select">
                      {theme.case_studies_description.map(
                        (descriptionItem, index) => (
                          <div
                            key={index}
                            className={`cs ${
                              index === activeOption ? "active" : ""
                            }`}
                            onClick={() => handleClick(index)}
                          >
                            <p>{descriptionItem.case_study_title}</p>{" "}
                            {/* Display case study title */}
                          </div>
                        )
                      )}
                    </div>
                    <div className="theme-cs-desc">
                      <p>
                        {
                          theme.case_studies_description[activeOption]
                            .description
                        }
                      </p>
                    </div>
                  </div>
                </section>
                <section className="themes">
                  <h1>Photos</h1>

                  <div className="photos" style={{ marginTop: "20px" }}>
                    {theme.case_studies_images &&
                    theme.case_studies_images.length > 0 ? (
                      theme.case_studies_images.map((image, index) => (
                        <div className="img-hover-div" key={index}>
                          <img src={image.image} alt={`Image`} />
                          <div className="image-info">
                            <p className="date">{image.date}</p>
                            <p className="location">{image.caption}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Images not available</p>
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
              </div>
            ))
          ) : (
            <p>No themes found</p> // Display this message if no themes are available
          )}
        </div>
      </div>
    </div>
  );
}

export default Themes;
