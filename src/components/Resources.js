import React, { useEffect } from "react";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";

import iconImg from "../images/icon.png";

function Resources({ resources }) {
  useEffect(() => {
    const cleanup = scrollSpy();

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
        <img src={iconImg} alt="Icon" /> {/* Use imported icon image */}
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
              {/* <div>
                <p>Publications</p>
                <div className="line"></div>
              </div> */}
              <h1>Publications</h1>
            </div>

            <div className="resources-container">
              {publications.length > 0 ? (
                publications.map((publication) => (
                  <div className="resource-box" key={publication.id}>
                    <div className="detail">
                      <div>
                        <p>{publication.publisher}</p>
                        <p className="date">{publication.date_of_publishing}</p>
                      </div>
                      <h3>{publication.title}</h3>

                      <a
                        href={publication.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open PDF
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>Data not found</p> // Display this message if no resources match the filter
              )}
            </div>
          </section>

          <section className="resources" id="training-manuels">
            <div className="section-head">
              {/* <div>
                <p>Training Manuels</p>
                <div className="line"></div>
              </div> */}

              <h1>Training Tools</h1>
            </div>

            <div className="resources-container">
              {training_tools.length > 0 ? (
                training_tools.map((training_tool) => (
                  <div className="resource-box" key={training_tool.id}>
                    <div className="detail">
                      <h3>{training_tool.title}</h3>

                      <a
                        href={training_tool.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open File
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>Data not found</p> // Display this message if no resources match the filter
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resources;
