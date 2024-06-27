import React from "react";
import iconImg from "../images/icon.png";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";
import { useEffect } from "react";

function Themes() {
  useEffect(() => {
    const cleanup = scrollSpy();

    return () => {
      cleanup();
    };
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
          <a href="#theme-1" className="quicklink active">
            - Theme-1
          </a>
          <a href="#theme-2" className="quicklink">
            - Theme-2
          </a>
          <a href="#theme-3" className="quicklink">
            - Theme-3
          </a>
          <a href="#theme-4" className="quicklink">
            - Theme-4
          </a>
          <a href="#theme-5" className="quicklink">
            - Theme-5
          </a>
        </div>

        <div className="right" id="themes-right">
          <div className="section-head3">
            <p>Theme</p>

            <h1>Theme 1- Review of Climate Change and Disaster Risk </h1>
          </div>
          <section className="themes" id="description">
            <h1>Description</h1>
            <p>
              Project Goal attempts to tap adaptive transformations
              (collaborative learning) for Climate Change (CC1& Disaster Risk
              Reduction (DRR) & enhance research & communication capacities of
              the men, women, and youths in their context by Training the
              Community Trainers (ToCT) & developing training resources &
              community-friendly tools for comprehensive outreach through an
              innovative approach.
              <br></br>
              The collaborative case studies are based on scientific research
              and will be developed in- 1. India-Udham Singh Nagar District,
              Uttarakhand. Dumka, Aspirant District harkhand and Bishnupur
              District, Manipur
              <br></br>
              2. Nepal-Chitwan District, Bagmati Province
              <br></br>
              3. Sri Lanka- Gampaha District. Western Province
              <br></br>
              4. Japan- literature-based case study and expert, stakeholders,
              and community inputs through hybrid mode
            </p>
          </section>
          <section className="themes" id="theme-case-studies">
            <div className="theme-cs-box">
              <div className="cs-select">
                <div className="cs active">
                  <p>Case-study-1</p>
                </div>
                <div className="cs">
                  <p>Case-study-2</p>
                </div>
                <div className="cs">
                  <p>Case-study-3</p>
                </div>
                <div className="cs">
                  <p>Case-study-4</p>
                </div>
                <div className="cs">
                  <p>Case-study-5</p>
                </div>
              </div>
              <div className="theme-cs-desc">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Themes;
