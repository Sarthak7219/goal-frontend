import React, { useState } from "react";
import "./style.css";
import "./global.css";
import { NavLink } from "react-router-dom";
import logoImg from "../images/logo (2).png";
import downArrowImg from "../images/down_arrow.svg";
import searchImg from "../images/search_icon.svg";
import cancelIcon from "../images/cancel_icon.svg";

function Base({ case_studies, workshops }) {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getCombinedData = () => [
    ...workshops.map((item) => ({ ...item, type: "workshops" })),
    ...case_studies.map((item) => ({ ...item, type: "casestudy" })),
  ];

  // Activate searchbar when clicked
  const handleSearchClick = () => {
    setIsActive(true);
  };

  // Deactivate search and reset inputs
  const toggleActiveClass = (e) => {
    e.stopPropagation();
    setIsActive(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query

    // Filter results based on the search query
    const combinedData = getCombinedData();
    const filteredResults = combinedData.filter((result) =>
      result.description?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logoImg} alt="Logo" />
      </NavLink>
      <ul className="navlist">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/team" className="team">
            Team
            <img src={downArrowImg} alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/team#collaborators">Collaborators</NavLink>
            </li>
            <li>
              <NavLink to="/team#research_associates">
                Research Associates
              </NavLink>
            </li>
            <li>
              <NavLink to="/team#community_trainers">
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
        <li className="dropdown-menu">
          <NavLink to="/resources" className="Resources">
            Resources
            <img src={downArrowImg} alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/resources#publications">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/resources#training_manuals">
                Training Manuals
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/themes" id="themes-dropdown">
            Themes
            <img src={downArrowImg} alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/themes">
                Theme 1 - Review of Climate Change and Disaster Risk
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 2 - Review of Gender Inequality
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 3 - Gender-wise Determination of CC Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 4 - Gender-wise Determination of Disaster Risk
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 5 - Strategies for CC Adaptation
              </NavLink>
            </li>
            <li>
              <NavLink to="/themes">
                Theme 6 - Strategies for Disaster Risk Reduction
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/casestudy">
            Case Studies
            <img src={downArrowImg} alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
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
      <div className="nav-right">
        <div className="dropdown-menu">
          <NavLink to="#" className="language">
            English
            <img src={downArrowImg} alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="#">Hindi</NavLink>
            </li>
            <li>
              <NavLink to="#">Sinhali</NavLink>
            </li>
            <li>
              <NavLink to="#">Nepali</NavLink>
            </li>
            <li>
              <NavLink to="#">Japanese</NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`searchbar ${isActive ? "active" : ""}`}
          onClick={handleSearchClick}
        >
          <img src={searchImg} alt="Search Icon" />
          <form>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch} // Update search query on input change
            />
            {isActive && (
              <img
                src={cancelIcon}
                onClick={toggleActiveClass} // Clear search and close on cancel icon click
                alt="Cancel"
              />
            )}
          </form>
          {isActive && searchQuery ? (
            <>
              <ul className="dropdown search-results-dropdown">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <li key={index}>
                      <NavLink
                        to={
                          result.type.toLowerCase() === "workshops"
                            ? `/workshops/workshop-detail/${result.id}`
                            : `/${result.type.toLowerCase()}`
                        }
                      >
                        {result.title || result.study_area} ({result.type})
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li>No results found</li>
                )}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Base;
