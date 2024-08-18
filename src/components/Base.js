import React from "react";
import "./style.css";
import "./global.css";
import { NavLink } from "react-router-dom";
import logoImg from "../images/logo (2).png";
import downArrowImg from "../images/down_arrow.svg";
import searchImg from "../images/search_icon.svg";
import cancelIcon from "../images/cancel_icon.svg";
import { useState } from "react";

function Base({ case_studies }) {
  const [isActive, setIsActive] = useState(false);

  const handleSearchClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div class="navbar">
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
      <ul class="navlist">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li class="dropdown-menu">
          <NavLink to="/team" class="/team">
            Team
            <img src={downArrowImg} alt="" />
          </NavLink>
          <ul class="dropdown">
            <li>
              <NavLink to="/team#collabarotors">Collabarotors</NavLink>
            </li>
            <li>
              <NavLink to="/team#research_associates">
                Research associates
              </NavLink>
            </li>
            <li>
              <NavLink to="/team#community_trainers">
                {" "}
                Community Trainers
              </NavLink>
            </li>
            <li>
              <NavLink to="/team#intern">Interns</NavLink>
            </li>
            <li>
              <NavLink to="/team#students">Students</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/workshops">Workshops</NavLink>
        </li>

        <li class="dropdown-menu">
          <NavLink to="/resources" class="Resources">
            Resources
            <img src={downArrowImg} alt="" />
          </NavLink>
          <ul class="dropdown">
            <li>
              <NavLink to="/resources#publications">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/resources#training_manuals">
                Training manuals
              </NavLink>
            </li>
          </ul>
        </li>
        <li class="dropdown-menu">
          <NavLink to="/themes" id="themes-dropdown">
            Themes
            <img src={downArrowImg} alt="" />
          </NavLink>
          <ul class="dropdown">
            <li>
              <NavLink to="/themes">
                Theme 1- Review of Climate Change and Disaster Risk
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 2- Review of Gender Inequality
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 3- Gender wise determination of CC Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 4- Gender wise determination of Disaster Risk
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 5- Development of Strategies for CC adaptation
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 6- Development of Strategies for Disaster Risk Reduction
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li class="dropdown-menu">
          <NavLink to="/casestudy">
            Case Studies
            <img src={downArrowImg} alt="" />
          </NavLink>
          <ul class="dropdown">
            {case_studies && case_studies.length > 0 ? (
              case_studies.map((case_study, index) => (
                <li key={index}>
                  <NavLink to="/casestudy">
                    {case_study.study_area}, {case_study.country}
                  </NavLink>
                </li>
              ))
            ) : (
              <p>No case studies found</p>
            )}
          </ul>
        </li>
      </ul>
      <div class="nav-right">
        <div class="dropdown-menu">
          <NavLink to="#" class="language">
            English
            <img src={downArrowImg} alt="" />
          </NavLink>
          <ul class="dropdown">
            <li class="case1">
              <NavLink to="#">Hindi</NavLink>
            </li>
            <li class="case2">
              <NavLink to="#">Sinhali</NavLink>
            </li>
            <li class="case2">
              <NavLink to="#">Nepali</NavLink>
            </li>
            <li class="case2">
              <NavLink to="#">Japanese</NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`searchbar ${isActive ? "active" : ""}`}
          onClick={handleSearchClick}
        >
          <img src={searchImg} alt="search_icon" />
          <form>
            <input type="text" placeholder="Search" />
            <img src={cancelIcon} onClick={toggleActiveClass} alt="" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Base;
