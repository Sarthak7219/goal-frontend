import React, { useEffect } from "react";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";

import iconImg from "../images/icon.png";
import resourceImage from "../images/DSC_2080.JPG"; // Import resource image

function Resources({ resources }) {
  useEffect(() => {
    const cleanup = scrollSpy();

    return () => {
      cleanup();
    };
  }, []);

  // const openPDFInNewTab = (pdfUrl) => {
  //   const newWindow = window.open();
  //   console.log(pdfUrl);
  //   newWindow.document.write(
  //     `<iframe src="${pdfUrl}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen />`
  //   );
  //   newWindow.document.title = "PDF Viewer";
  // };

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
              <div>
                <p>Publications</p>
                <div className="line"></div>
              </div>
              <h1>Read Our Publications</h1>
            </div>

            <div className="resources-container">
              {resources.map((resource) => (
                <div className="resource-box" key={resource.id}>
                  <div className="detail">
                    <p>{resource.publisher}</p>
                    <h3>{resource.title}</h3>

                    {/* <button onClick={() => openPDFInNewTab(resource.pdf)}>
                      View PDF
                    </button> */}
                    <a
                      href={resource.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resources" id="training-manuels">
            <div className="section-head">
              <div>
                <p>Training Manuels</p>
                <div className="line"></div>
              </div>

              <h1>Read Our Training Manuels</h1>
            </div>

            <div className="resources-container">
              <div className="resource-box">
                <div className="detail">
                  <p>Publisher</p>
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="date">June27, 2023</p>
                </div>
              </div>
              <div className="resource-box">
                <div className="detail">
                  <p>Publisher</p>
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="date">June27, 2023</p>
                </div>
              </div>
              <div className="resource-box">
                <div className="detail">
                  <p>Publisher</p>
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="date">June27, 2023</p>
                </div>
              </div>
              <div className="resource-box">
                <div className="detail">
                  <p>Publisher</p>
                  <h3>Lorem ipsasjf</h3>
                  <p className="date">June27, 2023</p>
                </div>
              </div>
              <div className="resource-box">
                <div className="detail">
                  <p>Publisher</p>
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="date">June27, 2023</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resources;
