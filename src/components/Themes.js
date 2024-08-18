import React, { useState, useEffect } from "react";
import iconImg from "../images/icon.png";
import "./global.css";
import "./style.css";
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
  const [activeTheme, setActiveTheme] = useState(themes[0]?.id || "theme-1");

  const handleClick = (index) => {
    setActiveOption(index);
  };

  const handleTheme = (themeId) => {
    if (themeId !== activeTheme) {
      setActiveTheme(themeId);
      setActiveOption(0); // Reset active case study to the first one
    }
  };

  // Find the theme data based on the active theme
  const currentTheme = themes.find(theme => theme.id === activeTheme);
  
  // Filter case studies for the active theme
  const filteredCaseStudies = case_study_theme_descriptions.filter(cs => cs.theme === activeTheme);

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
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`theme-quicklink ${
                activeTheme === theme.id ? "active" : ""
              }`}
              onClick={() => handleTheme(theme.id)}
            >
              - {theme.title}
            </div>
          ))}
        </div>

        <div className="right" id="themes-right">
          {currentTheme && (
            <div
              className={`theme-cont ${
                activeTheme === currentTheme.id ? "active" : ""
              }`}
            >
              <div className="section-head3">
                <p>Theme</p>
                <h1>{currentTheme.title}</h1>
              </div>
              <section className="themes" id="description">
                <h1>Description</h1>
                <p>{currentTheme.description}</p>
              </section>
              <section className="themes" id="theme-case-studies">
                <div className="theme-cs-box">
                  <div className="cs-select">
                    {filteredCaseStudies.map((cs, index) => (
                      <div
                        key={cs.id}
                        className={`cs ${index === activeOption ? "active" : ""}`}
                        onClick={() => handleClick(index)}
                      >
                        <p>CaseStudy-{cs.case_study}</p>
                      </div>
                    ))}
                  </div>
                  <div className="theme-cs-desc">
                    {filteredCaseStudies.length > 0 && (
                      <p>{filteredCaseStudies[activeOption]?.description}</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Themes;
