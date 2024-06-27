import React, { useState } from "react";
import gallery5Img from "../images/gallery/gallery5.png";
import image1Img from "../images/gallery/image1.jpg";
import image2Img from "../images/gallery/image2.jpg";
import image3Img from "../images/gallery/image3.jpg";
import image4Img from "../images/gallery/image4.jpg";
import image5Img from "../images/gallery/image5.jpg";
import image6Img from "../images/gallery/image6.jpg";
import image7Img from "../images/gallery/image7.jpg";
import image8Img from "../images/gallery/image8.jpg";
import iconImg from "../images/icon.png";
import right_arrow_small from "../images/right-arrow-small.svg";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { scrollSpy } from "./scrollSpy";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    const cleanup = scrollSpy();

    return () => {
      cleanup();
    };
  }, []);

  const [activeBox, setActiveBox] = useState(null); // State to track active box

  const handleClick = (boxId) => {
    setActiveBox(boxId === activeBox ? null : boxId); // Toggle active state
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
          <h2> Sri Lanka</h2>

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
        </div>
        <div
          className={`right ${activeBox === "gal-cs-box-2" ? "active" : ""}`}
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
        </div>
        <div
          className={`right ${activeBox === "gal-cs-box-3" ? "active" : ""}`}
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
        </div>
        <div
          className={`right ${activeBox === "gal-cs-box-4" ? "active" : ""}`}
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
        </div>
        <div
          className={`right ${activeBox === "gal-cs-box-5" ? "active" : ""}`}
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
        </div>
      </div>
    </div>
  );
}

export default Gallery;
