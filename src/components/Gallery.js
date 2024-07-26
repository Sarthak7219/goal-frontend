import React, { useState, useEffect } from "react";
import gallery5Img from "../images/gallery/gallery5.png";
import image1Img from "../images/gallery/image1.jpg";
import image2Img from "../images/gallery/image2.jpg";
import image3Img from "../images/gallery/image3.jpg";
import image4Img from "../images/gallery/image4.jpg";
import image5Img from "../images/gallery/image5.jpg";
import image6Img from "../images/gallery/image6.jpg";
import image7Img from "../images/gallery/image7.jpg";
import image8Img from "../images/gallery/image8.jpg";

import "./global.css";
import "./style.css";

import { scrollSpy } from "./scrollSpy";

function Gallery({ workshops, case_studies, image_workshop }) {
  useEffect(() => {
    console.log("image_workshop Gallery:", image_workshop); // Log the image_workshop prop to inspect its structure
  }, [image_workshop]);

  useEffect(() => {
    const cleanup = scrollSpy();
    return () => {
      cleanup();
    };
  }, []);

  const [activeBox, setActiveBox] = useState(null); // State to track active box
  const [filteredImages, setFilteredImages] = useState([]); // State to track filtered images

  const handleClick = (boxId) => {
    setActiveBox(boxId === activeBox ? null : boxId); // Toggle active state
    console.log("boxId:", boxId);
    // Extract case study ID from boxId
    const parts = boxId.split('-');
    console.log("parts:", parts);
  
    // Extract case study ID from the appropriate part
    const caseStudyId = parseInt(parts[3], 10);
    console.log("Extracted case study ID:", caseStudyId);

    const relevantWorkshops = workshops.filter(
      (workshop) => workshop.case_study === caseStudyId
    );
    console.log('relevantWorkshops:', relevantWorkshops);

    // Extract workshop IDs
    const workshopIds = relevantWorkshops.map((workshop) => workshop.id);
    console.log('workshopIds:', workshopIds);

    // Filter images based on the relevant workshop IDs
    const filtered = image_workshop.filter(
      (img) => workshopIds.includes(img.workshop)
    );

    setFilteredImages(filtered);
    console.log('filtered images:', filtered);
  };

  // Helper function to get the image URL based on image data
  const getImageUrl = (imageName) => {
    switch (imageName) {
      case "gallery5":
        return gallery5Img;
      case "image1":
        return image1Img;
      case "image2":
        return image2Img;
      case "image3":
        return image3Img;
      case "image4":
        return image4Img;
      case "image5":
        return image5Img;
      case "image6":
        return image6Img;
      case "image7":
        return image7Img;
      case "image8":
        return image8Img;
      default:
        return null;
    }
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
              <div
                className="gallery-box"
                style={{ backgroundImage: `url(${gallery5Img})` }}
              ></div>
              <div
                className="gallery-box"
                id="two-col"
                style={{ backgroundImage: `url(${image1Img})` }}
              ></div>
              <div
                className="gallery-box"
                id="onehalf-row"
                style={{ backgroundImage: `url(${image2Img})` }}
              ></div>
              <div
                className="gallery-box"
                style={{ backgroundImage: `url(${image3Img})` }}
              ></div>
              <div
                className="gallery-box"
                style={{ backgroundImage: `url(${image4Img})` }}
              ></div>
              <div
                className="gallery-box"
                style={{ backgroundImage: `url(${image5Img})` }}
              ></div>
              <div
                className="gallery-box"
                id="two-row"
                style={{ backgroundImage: `url(${image6Img})` }}
              ></div>
              <div
                className="gallery-box"
                id="two-col"
                style={{ backgroundImage: `url(${image7Img})` }}
              ></div>
              <div
                className="gallery-box"
                style={{ backgroundImage: `url(${image8Img})` }}
              ></div>
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

            <div className="photo-container gallery-container">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-box"
                  style={{ backgroundImage: `url(${image.image_url})` }}
                ></div>
              ))}
            </div>

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
