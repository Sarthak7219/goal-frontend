import React, { useState, useEffect } from "react";
import "./global.css";
import "./style.css";
import { scrollSpy } from "./scrollSpy";

function Gallery({ workshops, case_studies, image_workshop, image_casestudy }) {
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
    setActiveBox(boxId === activeBox ? null : boxId);

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
        <div
          className="gal-cs-box"
          id="gal-cs-box-1"
          onClick={() => handleClick("gal-cs-box-1")}
        >
          <img src="" alt="" />
          <h2>INDIA</h2>
          <p>Udham Singh Nagar District, Uttarakhand</p>
        </div>
        <div
          className="gal-cs-box"
          id="gal-cs-box-2"
          onClick={() => handleClick("gal-cs-box-2")}
        >
          <img src="" alt="" />
          <h2>INDIA</h2>
          <p>Dumka, District Jharkhand</p>
        </div>
        <div
          className="gal-cs-box"
          id="gal-cs-box-3"
          onClick={() => handleClick("gal-cs-box-3")}
        >
          <img src="" alt="" />
          <h2>INDIA</h2>
          <p>Bishnupur District, Manipur</p>
        </div>
        <div
          className="gal-cs-box"
          id="gal-cs-box-4"
          onClick={() => handleClick("gal-cs-box-4")}
        >
          <img src="" alt="" />
          <h2>NEPAL</h2>
          <p>Chitwan District, Bagmati</p>
        </div>
        <div
          className="gal-cs-box"
          id="gal-cs-box-5"
          onClick={() => handleClick("gal-cs-box-5")}
        >
          <img src="" alt="" />
          <h2>Sri Lanka</h2>
          <p>Gampaha District, Western Province</p>
        </div>
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

        <div
          className={`right ${activeBox === "gal-cs-box-1" ? "active" : ""}`}
          id="gallery-right"
        >
          <section id="visit-pics" className="gallery">
            <div className="section-head2">
              <h1>Visit Photos</h1>
              <div></div>
            </div>

            <div className="photo-container gallery-container">
              {filteredCaseStudyImages.map((image, index) => (
                <li
                  key={index}
                  className="worshop-detail-home gallery-box"
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  <div class="detail">
                    <div class="venue">
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
            </div>

            <div className="page-number-wrapper">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </section>
          <section id="workshop-pics" className="gallery">
            <div className="section-head2">
              <h1>Workshop Photos</h1>
              <div></div>
            </div>

            <ul className="photo-container gallery-container">
              {filteredWorkshopImages.map((image, index) => (
                <li
                  key={index}
                  className="worshop-detail-home gallery-box"
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  <div class="detail">
                    <div class="venue">
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

            <div className="page-number-wrapper">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
