import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TeamShimmer from "../components/TeamShimmer";
import { get_team_members } from "../api/endpoints";

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_team_members();
        setTeamMembers(data);
      } catch (error) {
        alert("Error fetching team data");
        // console.log("Error fetching team data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const renderTeamSection = (category, sectionId, title) => {
    const filteredMembers = teamMembers.filter(
      (team_member) => team_member.category === category
    );

    return (
      <section className="team" id={sectionId}>
        <h2>{title}</h2>
        {loading ? (
          <TeamShimmer /> // Show shimmer effect while loading or before data is fetched
        ) : filteredMembers.length === 0 ? (
          <p>Data not found</p> // Show if no data available after loading
        ) : (
          <div className="photo-container">
            {filteredMembers.map((team_member) => (
              <NavLink
                to={`/team/member-detail/${team_member.id}`}
                key={team_member.id}
              >
                <div className="member-card">
                  <img src={team_member.image} className="member-img" alt="" />
                  <img
                    src="/static/images/Rectangle 5995.png"
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
        <img src="/static/images/icon.png" alt="Icon" />
      </div>

      <div className="container">
        <div className="quick-link-box" id="team-sidebox">
          <a href="#collaborators" className="quicklink">
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
          {renderTeamSection(
            "research_associate",
            "research_associates",
            "Research Associates"
          )}
          {renderTeamSection(
            "community_trainer",
            "community_trainers",
            "Community Trainers"
          )}
          {renderTeamSection("intern", "interns", "Interns")}
          {renderTeamSection("student", "students", "Students")}
        </div>
      </div>
    </div>
  );
};

export default Team;
