import React, { useState, useEffect } from "react";
import "./global.css";
import "./style.css";
import { scrollSpy } from "./scrollSpy";

//Thumbnail Images
import dumkaTh from "../images/thumbnails/Dumka-cs.jpeg";
import uttarakhandTh from "../images/thumbnails/uttarakhand-cs.jpg";
import bishnupurTh from "../images/thumbnails/Bishnupur-cs.jpeg";
import nepalTh from "../images/thumbnails/Nepal-cs.jpeg";
import SLTh from "../images/thumbnails/Sri Lanka-cs.jpeg";

function Gallery({ case_studies, workshops, image_workshop, image_casestudy }) {
  useEffect(() => {
    handleClick("gal-cs-box-1");
  }, []);

  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup();
    };
  }, []);

  const CaseStudyImageMapping = {
    1: dumkaTh,
    2: uttarakhandTh,
    3: bishnupurTh,
    4: nepalTh,
    6: SLTh,
  };

  const [activeBox, setActiveBox] = useState("gal-cs-box-1");
  const [filteredWorkshopImages, setFilteredWorkshopImages] = useState([]);
  const [filteredCaseStudyImages, setFilteredCaseStudyImages] = useState([]);
  const [current_visit_page, setcurrent_visit_page] = useState(1);
  const [current_workshop_page, setcurrent_workshop_page] = useState(1);
  const imagesperpage = 8;

  const handleClick = (boxId) => {
    setActiveBox(boxId);

    const parts = boxId.split("-");
    const caseStudyId = parseInt(parts[3], 10);

    const relevantWorkshops = workshops.filter(
      (workshop) => workshop.case_study === caseStudyId
    );

    const workshopIds = relevantWorkshops.map((workshop) => workshop.id);

    const filtered_workshop_images = image_workshop.filter((img) =>
      workshopIds.includes(img.workshop)
    );
    const filtered_casestudy_images = image_casestudy.filter(
      (img) => img.case_study === caseStudyId
    );

    setFilteredWorkshopImages(filtered_workshop_images);
    setFilteredCaseStudyImages(filtered_casestudy_images);
  };

  const last_visit_Index = current_visit_page * imagesperpage;
  const first_visit_Index = last_visit_Index - imagesperpage;
  const last_workshop_Index = current_workshop_page * imagesperpage;
  const first_workshop_Index = last_workshop_Index - imagesperpage;
  let current_visit_images = [];
  let current_workshop_images = [];

  if (filteredCaseStudyImages.length > 0)
    current_visit_images = filteredCaseStudyImages.slice(
      first_visit_Index,
      last_visit_Index
    );

  if (filteredWorkshopImages.length > 0)
    current_workshop_images = filteredWorkshopImages.slice(
      first_workshop_Index,
      last_workshop_Index
    );

  let pages_visit = [];
  let pages_workshop = [];

  for (
    let i = 1;
    i <= Math.ceil(filteredCaseStudyImages.length / imagesperpage);
    i++
  )
    pages_visit.push(i);

  for (
    let i = 1;
    i <= Math.ceil(filteredWorkshopImages.length / imagesperpage);
    i++
  )
    pages_workshop.push(i);

  return (
    <div className="gallery-page">
      <h1>See photos from all case studies</h1>
      <div className="gallery-cs-select">
        {case_studies.map((box, index) => (
          <div
            className={`gal-cs-box ${
              activeBox === `gal-cs-box-${index + 1}` ? "active" : ""
            }`}
            id={`gal-cs-box-${index + 1}`}
            onClick={() => handleClick(`gal-cs-box-${index + 1}`)}
            key={box.id}
          >
            <img
              src={CaseStudyImageMapping[box.id] || box.image || ""}
              alt=""
            />
            <h2>{box.country}</h2>
            <p>{box.study_area}</p>
          </div>
        ))}
      </div>
      <div className="container" id="gal-container">
        <div className="quick-link-box" id="gallery-sidebox">
          <a href="#visit-pics" className="quicklink">
            - Visit Photos
          </a>
          <a href="#workshop-pics" className="quicklink">
            - Workshop Photos
          </a>
        </div>

        {activeBox && (
          <div
            className={`right ${activeBox ? "active" : ""}`}
            id="gallery-right"
          >
            {/* Visit Photos Section */}
            <section id="visit-pics" className="gallery">
              <div className="section-head2">
                <h1>Visit Photos</h1>
              </div>
              {current_visit_images.length > 0 ? (
                <div className="photo-container gallery-container">
                  {current_visit_images.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img
                        src={image.image}
                        alt={`Image ${index}`}
                        key={index}
                      />
                      <div className="image-info">
                        <p className="date">Date: {image.date}</p>
                        <p className="location">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No visit photos available for this case study.</p>
              )}

              <div className="page-number-wrapper">
                {pages_visit.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setcurrent_visit_page(page)}
                    className={`page-number-btn ${
                      current_visit_page === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </section>

            {/* Workshop Photos Section */}
            <section id="workshop-pics" className="gallery">
              <div className="section-head2">
                <h1>Workshop Photos</h1>
              </div>
              {current_workshop_images.length > 0 ? (
                <div className="photo-container gallery-container">
                  {current_workshop_images.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img
                        src={image.image}
                        alt={`Image ${index}`}
                        key={index}
                      />
                      <div className="image-info">
                        <p className="date">Date: {image.date}</p>
                        <p className="location">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No workshop photos available for this case study.</p>
              )}
              <div className="page-number-wrapper">
                {pages_workshop.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setcurrent_workshop_page(page)}
                    className={`page-number-btn ${
                      current_workshop_page === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
