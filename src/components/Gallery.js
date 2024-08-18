import React, { useState, useEffect } from "react";
import "./global.css";
import "./style.css";
import { scrollSpy } from "./scrollSpy";

function Gallery({ case_studies,workshops, image_workshop, image_casestudy }) {
  useEffect(() => {
    console.log("image_workshop Gallery:", image_workshop);
  }, [image_workshop]);

  useEffect(() => {
    console.log("image_casestudy Gallery:", image_casestudy);
  }, [image_casestudy]);

  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup();
    };
  }, []);

  const [activeBox, setActiveBox] = useState(null);
  const [filteredWorkshopImages, setFilteredWorkshopImages] = useState([]);
  const [filteredCaseStudyImages, setFilteredCaseStudyImages] = useState([]);

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

  return (
    <div className="gallery-page">
      <h1>See photos from all case studies</h1>
      <div className="gallery-cs-select">
      {case_studies.map((box, index) => (
          <div
            className={`gal-cs-box ${activeBox === `gal-cs-box-${index + 1}` ? "active" : ""}`}
            id={`gal-cs-box-${index + 1}`}
            onClick={() => handleClick(`gal-cs-box-${index + 1}`)}
            key={box.id}
          >
            <img src={box.image || ""} alt="" />
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
  <div className={`right ${activeBox ? "active" : ""}`} id="gallery-right">
    {/* Visit Photos Section */}
    <section id="visit-pics" className="gallery">
      <div className="section-head2">
        <h1>Visit Photos</h1>
      </div>
      {filteredCaseStudyImages.length > 0 ? (
        <div className="photo-container gallery-container">
          {filteredCaseStudyImages.map((image, index) => (
            <div key={index} className="img-hover-div">
              <img src={image.image} alt={`Image ${index}`} key={index} />
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>

    {/* Workshop Photos Section */}
    <section id="workshop-pics" className="gallery">
      <div className="section-head2">
        <h1>Workshop Photos</h1>
      </div>
      {filteredWorkshopImages.length > 0 ? (
        <ul className="photo-container gallery-container">
          {filteredWorkshopImages.map((image, index) => (
            <li
              key={index}
              className="img-hover-div"
              style={{ backgroundImage: `url(${image.image})` }}
            >
              <div className="detail">
                <div className="venue">
                  <div>
                    <p>{image.caption}</p>
                  </div>
                  <div>
                    <p>{image.date}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workshop photos available for this case study.</p>
      )}
      <div className="page-number-wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  </div>
)}

      
      </div>
    </div>
  );
}

export default Gallery;
