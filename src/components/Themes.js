import React, { useState } from "react";
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

  const [activeOption, setActiveOption] = useState(0);
  const [activeTheme, setActiveTheme] = useState("theme-1");

  const options = [
    {
      title: "Case-study-1",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      title: "Case-study-2",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
    },
    {
      title: "Case-study-3",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
    },
    {
      title: "Case-study-4",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
    },
    {
      title: "Case-study-5",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...",
    },
  ];

  const handleClick = (index) => {
    setActiveOption(index);
  };

  const handleTheme = (themeId) => {
    if (themeId !== activeTheme) {
      setActiveTheme(themeId); // Toggle active theme state
    }
  };

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
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-1" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-1")}
          >
            - Theme-1
          </div>
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-2" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-2")}
          >
            - Theme-2
          </div>
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-3" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-3")}
          >
            - Theme-3
          </div>
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-4" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-4")}
          >
            - Theme-4
          </div>
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-5" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-5")}
          >
            - Theme-5
          </div>
          <div
            className={`theme-quicklink ${
              activeTheme === "theme-6" ? "active" : ""
            }`}
            onClick={() => handleTheme("theme-6")}
          >
            - Theme-6
          </div>
        </div>

        <div className="right" id="themes-right">
          <div
            className={`theme-cont ${
              activeTheme === "theme-1" ? "active" : ""
            }`}
          >
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`theme-cont ${
              activeTheme === "theme-2" ? "active" : ""
            }`}
          >
            <div className="section-head3">
              <p>Theme</p>

              <h1>Theme 2- Review of Gender Inequality </h1>
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`theme-cont ${
              activeTheme === "theme-3" ? "active" : ""
            }`}
          >
            <div className="section-head3">
              <p>Theme</p>

              <h1> Theme 3- Gender wise determination of CC Impact</h1>
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`theme-cont ${
              activeTheme === "theme-4" ? "active" : ""
            }`}
          >
            <div className="section-head3">
              <p>Theme</p>

              <h1>Theme 4- Gender wise determination of Disaster Risk</h1>
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`theme-cont ${
              activeTheme === "theme-5" ? "active" : ""
            }`}
          >
            <div className="section-head3">
              <p>Theme</p>

              <h1>Theme 5- Development of Strategies for CC adaptation</h1>
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`theme-cont ${
              activeTheme === "theme-6" ? "active" : ""
            }`}
          >
            <div className="section-head3">
              <p>Theme</p>

              <h1>
                Theme 6- Development of Strategies for Disaster Risk Reduction
              </h1>
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
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`cs ${index === activeOption ? "active" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{option.title}</p>
                    </div>
                  ))}
                </div>
                <div className="theme-cs-desc">
                  <p>{options[activeOption].description}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
