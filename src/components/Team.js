import React, { useEffect, useState } from "react";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";
import TeamShimmer from "./TeamShimmer";
import iconImg from "../images/icon.png";
import resourceCardBg from "../images/Rectangle 5995.png"; // Import background image for member card

const Team = ({ team_members }) => {
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Stop showing shimmer after the time has passed
      setDataFetched(true); // Data fetch time ended
    }, 5500);  // Shimmer will show for 1500ms (1.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  const renderTeamSection = (category, sectionId, title) => {
    const filteredMembers = team_members.filter(
      (team_member) => team_member.category === category
    );

    return (
      <section className="team" id={sectionId}>
        <h2>{title}</h2>
        {loading || !dataFetched ? (
          <TeamShimmer /> // Show shimmer effect while loading or before data is fetched
        ) : filteredMembers.length === 0 ? (
          <p>Data not found!</p> // Show if no data available after loading
        ) : (
          <div className="photo-container">
            {filteredMembers.map((team_member) => (
              <NavLink
                to={`/team-member-detail/${team_member.id}`}
                key={team_member.id}
              >
                <div className="member-card">
                  <img
                    src={team_member.image}
                    className="member-img"
                    alt=""
                  />
                  <img
                    src={resourceCardBg}
                    className="member-card-bg"
                    alt=""
                  />
                  <div className="member-details">
                    <h3>{team_member.name}</h3>
                    <div className="member-line"></div>
                    <p className="position">{team_member.position}</p>
                    <p className="institute">{team_member.organisation}</p>
                    <div className="social-icons">
                      <i
                        className="fa-regular fa-envelope"
                        style={{ color: "#ec028c" }}
                      ></i>
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ color: "#ec028c" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="team-page">
      <div className="page-hero" id="team-bg">
        <div className="page-head">
          <h1>Our Team</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/team" className="hero-link">
              Team
            </NavLink>
          </p>
        </div>
        <img src={iconImg} alt="Icon" />
      </div>

      <div className="container">
        <div className="quick-link-box" id="team-sidebox">
          <a href="#collaborators" className="quicklink active">
            - Collaborators
          </a>
          <a href="#research_associates" className="quicklink">
            - Research Associates
          </a>
          <a href="#community_trainers" className="quicklink">
            - Community Trainers
          </a>
          <a href="#interns" className="quicklink">
            - Interns
          </a>
          <a href="#students" className="quicklink">
            - Students
          </a>
        </div>

        <div className="right" id="team-right">
          {renderTeamSection("collaborator", "collaborators", "Collaborators")}
          {renderTeamSection("research_associate", "research_associates", "Research Associates")}
          {renderTeamSection("community_trainer", "community_trainers", "Community Trainers")}
          {renderTeamSection("intern", "interns", "Interns")}
          {renderTeamSection("student", "students", "Students")}
        </div>
      </div>
    </div>
  );
};

export default Team;
