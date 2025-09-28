import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResourcesShimmer from "../components/ResourcesShimmer";
import { get_resources } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";

function Resources() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [active, setActive] = useState("publications");

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
      setIsLoading(true);
      try {
        const data = await get_resources();
        setResources(data);
      } catch (error) {
        alert("Error fetching resources");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const renderResourceList = (resourceArray, type) => {
    return (
      <div className="resources-container">
        {resourceArray && resourceArray.length > 0 ? (
          type !== "flashcards" && type !== "maps" ? (
            resourceArray.map((resource) => (
              <div className="resource-box" key={resource.id}>
                <div className="detail">
                  <div>
                    <p>{resource.publisher || ""}</p>
                    <p className="date">{resource.date_of_publishing || ""}</p>
                  </div>
                  <h3>{resource.title}</h3>

                  {resource.pdf && (
                    <a
                      href={resource.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF
                    </a>
                  )}

                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Link
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            resourceArray.map(
              (resource) =>
                resource.image && (
                  <div className="resource-img-box">
                    <img src={resource.image} />
                    <p>{resource.title}</p>
                  </div>
                )
            )
          )
        ) : (
          <p>No {type} found</p>
        )}
      </div>
    );
  };

  return (
    <div className="resources-page">
      <div className="page-hero" id="resources-bg">
        <div className="page-head">
          <h1>Resources</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/resources" className="hero-link">
              Resources
            </NavLink>
          </p>
        </div>
        <img src="/static/images/icon.png" alt="Icon" />
      </div>

      <div className="container">
        <div className="quick-link-box" id="resources-sidebox">
          <div
            className="quicklink"
            onClick={() => handleScroll("publications")}
            style={{
              color:
                active === "publications"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Publications
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("training_manuels")}
            style={{
              color:
                active === "training_manuels"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Training Tools
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("flashcards")}
            style={{
              color:
                active === "flashcards"
                  ? "var(--text-pink)"
                  : "var(--text-black)",
            }}
          >
            - Flashcards
          </div>
          <div
            className="quicklink"
            onClick={() => handleScroll("maps")}
            style={{
              color:
                active === "maps" ? "var(--text-pink)" : "var(--text-black)",
            }}
          >
            - Maps
          </div>
        </div>

        <div className="right" id="resources-right">
          <section className="resources" id="publications">
            <div className="section-head">
              <h1>Publications</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer />
            ) : (
              renderResourceList(resources.publication, "publications")
            )}
          </section>

          <section className="resources" id="training_manuels">
            <div className="section-head">
              <h1>Training Tools</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer />
            ) : (
              renderResourceList(resources.training_manual, "training tools")
            )}
          </section>

          <section className="resources" id="flashcards">
            <div className="section-head">
              <h1>Flashcards</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer />
            ) : (
              renderResourceList(resources.flashcard, "flashcards")
            )}
          </section>

          <section className="resources" id="maps">
            <div className="section-head">
              <h1>Maps</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer />
            ) : (
              renderResourceList(resources.map, "maps")
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resources;
