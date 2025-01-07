import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";
import iconImg from "../images/icon.png";
import ResourcesShimmer from "./ResourcesShimmer";

function Resources({ resources }) {
  const [isLoading, setIsLoading] = useState(true); // Loading state for shimmer effect
  
  useEffect(() => {
    const cleanup = scrollSpy();
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay

    return () => {
      cleanup();
    };
  }, []);

  const publications = resources.filter(
    (resource) => resource.category === "publication"
  );
  const training_tools = resources.filter(
    (resource) => resource.category === "training_tool"
  );

  // Reusable function for rendering resource lists
  const renderResourceList = (resourceArray, type) => {
    return (
      <div className="resources-container">
        {resourceArray.length > 0 ? (
          resourceArray.map((resource) => (
            <div className="resource-box" key={resource.id}>
              <div className="detail">
                <div>
                  <p>{resource.publisher || ""}</p>
                  <p className="date">{resource.date_of_publishing || ""}</p>
                </div>
                <h3>{resource.title}</h3>
                {resource.pdf && (
                  <a href={resource.pdf} target="_blank" rel="noopener noreferrer">
                    Open PDF
                  </a>
                )}
                {resource.link && (
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Open Link
                  </a>
                )}
              </div>
            </div>
          ))
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
        <img src={iconImg} alt="Icon" />
      </div>

      <div className="container">
        <div className="quick-link-box" id="resources-sidebox">
          <a href="#publications" className="quicklink active">
            - Publications
          </a>
          <a href="#training-manuels" className="quicklink">
            - Training Manuels
          </a>
        </div>

        <div className="right" id="resources-right">
          <section className="resources" id="publications">
            <div className="section-head">
              <h1>Publications</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer/> // Shimmer effect while loading
            ) : (
              renderResourceList(publications, "publications") // Render publications
            )}
          </section>

          <section className="resources" id="training-manuels">
            <div className="section-head">
              <h1>Training Tools</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer/> // Shimmer effect while loading
            ) : (
              renderResourceList(training_tools, "training tools") // Render training tools
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resources;
