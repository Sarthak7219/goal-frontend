import React, { useState, useEffect } from "react";
import "./global.css";
import "./style.css";
import { scrollSpy } from "./scrollSpy";
import GalleryShimmer from "./GalleryShimmer";

//Thumbnail Images
import dumkaTh from "../images/thumbnails/Dumka-cs.jpeg";
import uttarakhandTh from "../images/thumbnails/uttarakhand-cs.jpg";
import bishnupurTh from "../images/thumbnails/Bishnupur-cs.jpeg";
import nepalTh from "../images/thumbnails/Nepal-cs.jpeg";
import SLTh from "../images/thumbnails/Sri Lanka-cs.jpeg";

function Gallery({ case_studies, workshops, image_workshop, image_casestudy }) {
  const [activeBox, setActiveBox] = useState("gal-cs-box-1");
  const [filteredWorkshopImages, setFilteredWorkshopImages] = useState([]);
  const [filteredCaseStudyImages, setFilteredCaseStudyImages] = useState([]);
  const [currentVisitPage, setCurrentVisitPage] = useState(1);
  const [currentWorkshopPage, setCurrentWorkshopPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false); // To track if data is fetched
  const imagesPerPage = 8;

  useEffect(() => {
    handleClick("gal-cs-box-1"); // Trigger initial box selection
  }, []);

  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup(); // Clean up scroll spy on component unmount
    };
  }, []);

  const CaseStudyImageMapping = {
    1: dumkaTh,
    2: uttarakhandTh,
    3: bishnupurTh,
    4: nepalTh,
    6: SLTh,
  };

  useEffect(() => {
    // Simulate data fetching for a set period (5500ms)
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop shimmer effect after 5500ms
      setDataFetched(true); // Mark data as fetched
    }, 5500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleClick = (boxId) => {
    setActiveBox(boxId);

    const parts = boxId.split("-");
    const caseStudyId = parseInt(parts[3], 10);

    const relevantWorkshops = workshops.filter(
      (workshop) => workshop.case_study === caseStudyId
    );

    const workshopIds = relevantWorkshops.map((workshop) => workshop.id);

    const filteredWorkshopImages = image_workshop.filter((img) =>
      workshopIds.includes(img.workshop)
    );
    const filteredCaseStudyImages = image_casestudy.filter(
      (img) => img.case_study === caseStudyId
    );

    setFilteredWorkshopImages(filteredWorkshopImages);
    setFilteredCaseStudyImages(filteredCaseStudyImages);
  };

  const lastVisitIndex = currentVisitPage * imagesPerPage;
  const firstVisitIndex = lastVisitIndex - imagesPerPage;
  const lastWorkshopIndex = currentWorkshopPage * imagesPerPage;
  const firstWorkshopIndex = lastWorkshopIndex - imagesPerPage;
  let currentVisitImages = [];
  let currentWorkshopImages = [];

  if (filteredCaseStudyImages.length > 0)
    currentVisitImages = filteredCaseStudyImages.slice(
      firstVisitIndex,
      lastVisitIndex
    );

  if (filteredWorkshopImages.length > 0)
    currentWorkshopImages = filteredWorkshopImages.slice(
      firstWorkshopIndex,
      lastWorkshopIndex
    );

  let pagesVisit = [];
  let pagesWorkshop = [];

  for (
    let i = 1;
    i <= Math.ceil(filteredCaseStudyImages.length / imagesPerPage);
    i++
  )
    pagesVisit.push(i);

  for (
    let i = 1;
    i <= Math.ceil(filteredWorkshopImages.length / imagesPerPage);
    i++
  )
    pagesWorkshop.push(i);

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

        {isLoading ? (
          <GalleryShimmer />
        ) : (
          <div
            className={`right ${activeBox ? "active" : ""}`}
            id="gallery-right"
          >
            {/* Visit Photos Section */}
            <section id="visit-pics" className="gallery">
              <div className="section-head2">
                <h1>Visit Photos</h1>
              </div>
              {currentVisitImages.length > 0 ? (
                <div className="photo-container gallery-container">
                  {currentVisitImages.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img src={image.image} alt={`Image ${index}`} />
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
                {pagesVisit.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVisitPage(page)}
                    className={`page-number-btn ${
                      currentVisitPage === page ? "active" : ""
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
              {currentWorkshopImages.length > 0 ? (
                <div className="photo-container gallery-container">
                  {currentWorkshopImages.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img src={image.image} alt={`Image ${index}`} />
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
                {pagesWorkshop.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWorkshopPage(page)}
                    className={`page-number-btn ${
                      currentWorkshopPage === page ? "active" : ""
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
