import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { search } from "../api/endpoints";
import GoogleTranslate from "../components/GoogleTranslate";

function Base() {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleActiveClass = (e) => {
    e.stopPropagation();
    setIsActive(false);
    setQuery("");
    setResults([]);
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setLoading(true);
        const data = await search(query);
        setResults(data.results);
      } catch (error) {
        alert("Server error");
      } finally {
        setLoading(false);
      }
    };
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src="/static/images/logo (2).png" alt="Logo" />
      </NavLink>
      <ul className="navlist">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/team" className="team">
            Team
            <img src="/static/images/down_arrow.svg" alt="Dropdown Arrow" />
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
                Community Knowledge Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/team#interns">Interns</NavLink>
            </li>
            <li>
              <NavLink to="/team#students">
                Classroom Integration Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/team#icimod_huc_partners">
                HUC–ICIMOD Partners
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/workshops">Workshops</NavLink>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/resources" className="Resources">
            Resources
            <img src="/static/images/down_arrow.svg" alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/resources#publications">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/resources#training_manuels">Training Tools</NavLink>
            </li>
            <li>
              <NavLink to="/resources#flashcards">Flashcards</NavLink>
            </li>
            <li>
              <NavLink to="/resources#maps">Maps</NavLink>
            </li>
          </ul>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/theme/1" id="themes-dropdown">
            Themes
            <img src="/static/images/down_arrow.svg" alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/theme/1">
                Theme 1 - Review of Climate Change and Disaster Risk
              </NavLink>
            </li>
            <li>
              <NavLink to="/theme/2">
                Theme 2 - Review of Gender Inequality
              </NavLink>
            </li>
            <li>
              <NavLink to="/theme/3">
                Theme 3 - Gender-wise Determination of Climate Change Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/theme/4">
                Theme 4 - Gender-wise Determination of Disaster Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/theme/5">
                Theme 5 - Strategies for Climate Change Adaptation
              </NavLink>
            </li>
            <li>
              <NavLink to="/theme/6">
                Theme 6 - Strategies for Disaster Risk Reduction
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="dropdown-menu">
          <NavLink to="/casestudy/1">
            Case Studies
            <img src="/static/images/down_arrow.svg" alt="Dropdown Arrow" />
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/casestudy/1">Dumka, Jharkhand</NavLink>
            </li>
            <li>
              <NavLink to="/casestudy/2">
                Udham Singh Nagar, Uttarakhand
              </NavLink>
            </li>
            <li>
              <NavLink to="/casestudy/3">Bishnupur, Manipur</NavLink>
            </li>
            <li>
              <NavLink to="/casestudy/4">Chitwan, Nepal</NavLink>
            </li>
            <li>
              <NavLink to="/casestudy/6">Gampaha, Sri Lanka</NavLink>
            </li>
            <li>
              <NavLink to="/casestudy/7">Kolapara, Patuakhali</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div className="nav-right">
        <div
          className={`searchbar ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(true)}
        >
          <img src="/static/images/search_icon.svg" alt="Search Icon" />
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {isActive && (
              <img
                src="/static/images/cancel_icon.svg"
                onClick={toggleActiveClass} // Clear search and close on cancel icon click
                alt="Cancel"
              />
            )}
          </form>
          {isActive && query ? (
            <>
              <ul className="dropdown search-results-dropdown">
                {loading ? (
                  <p>Loading...</p>
                ) : results.length > 0 ? (
                  results.map((result, index) => (
                    <li key={index}>
                      <NavLink
                        to={
                          result.type === "workshop"
                            ? `/workshops/workshop-detail/${result.id}`
                            : result.type === "case_study"
                            ? `/casestudy/${result.id}`
                            : result.type === "theme"
                            ? `/theme/${result.id}`
                            : `/${result.type.toLowerCase()}`
                        }
                      >
                        {result.title} ({result.type})
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
        <GoogleTranslate />
      </div>
    </div>
  );
}

export default Base;
