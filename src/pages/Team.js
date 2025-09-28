import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TeamShimmer from "../components/TeamShimmer";
import { get_team_members } from "../api/endpoints";

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const [active, setActive] = useState("collaborators");

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
        const data = await get_team_members();
        setTeamMembers(data);
      } catch (error) {
        alert("Error fetching team data");
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
          <TeamShimmer />
        ) : filteredMembers.length === 0 ? (
          <p>Data not found</p>
        ) : (
          <div className="photo-container">
            {filteredMembers.map((team_member) => (
              <NavLink
                to={`/team/member-detail/${team_member.id}`}
                key={team_member.id}
              >
                <div className="member-card">
                  <img
                    src={team_member.image}
                    className="member-img"
                    alt=""
                    loading="lazy"
                  />
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
          <div
            className="quicklink"
            onClick={() => handleScroll("collaborators")}
            style={{
              color:
                active === "collaborators"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Collaborators
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("research_associates")}
            style={{
              color:
                active === "research_associates"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Research Associates
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("community_trainers")}
            style={{
              color:
                active === "community_trainers"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Community Knowledge Partners
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("interns")}
            style={{
              color:
                active === "interns" ? "var(--text-pink)" : "var(--text-black)",
            }}
          >
            - Interns
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("students")}
            style={{
              color:
                active === "students"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Classroom Integration Partners
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("icimod_huc_partners")}
            style={{
              color:
                active === "icimod_huc_partners"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - HUC–ICIMOD Partners
          </div>
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
            "Community Knowledge Partners"
          )}
          {renderTeamSection("intern", "interns", "Interns")}
          {renderTeamSection(
            "student",
            "students",
            "Classroom Integration Partners"
          )}
          {renderTeamSection(
            "icimod_huc_partners",
            "icimod_huc_partners",
            "HUC–ICIMOD Partners"
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
