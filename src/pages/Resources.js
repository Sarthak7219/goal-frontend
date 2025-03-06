import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResourcesShimmer from "../components/ResourcesShimmer";
import { get_resources } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";

function Resources() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await get_resources();
        setResources(data);
      } catch (error) {
        alert("Error fetching resources");
        // console.log("Error fetching resources:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // Reusable function for rendering resource lists
  const renderResourceList = (resourceArray, type) => {
    return (
      <div className="resources-container">
        {resourceArray && resourceArray.length > 0 ? (
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
                    href={`${SERVER_URL}${resource.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF
                  </a>
                )}
                {resource.link && (
                  <a
                    href={`${SERVER_URL}${resource.link}`}
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
          <a href="#publications" className="quicklink">
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
              <ResourcesShimmer /> // Shimmer effect while loading
            ) : (
              renderResourceList(resources.publication, "publications") // Render publications
            )}
          </section>

          <section className="resources" id="training-manuels">
            <div className="section-head">
              <h1>Training Tools</h1>
            </div>
            {isLoading ? (
              <ResourcesShimmer /> // Shimmer effect while loading
            ) : (
              renderResourceList(resources.training_manual, "training tools") // Render training tools
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resources;
