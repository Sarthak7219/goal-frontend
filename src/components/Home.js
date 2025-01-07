import React from "react";
import "./global.css";
import "./style.css";
import { useState } from "react";
import oneImg from "../images/1.png";
import twoImg from "../images/2.png";
import threeImg from "../images/3.png";
import videoSrc from "../images/video.mp4";
import img_bg from "../images/img-bg.jpg";
import back_to_top_arrow from "../images/back_to_top_arrow.svg";
import designleftImg from "../images/designleft.png";
import designrightImg from "../images/designright.png";
import line172Img from "../images/Line 172.png";
import apnLogo1Img from "../images/APN Logo-c-v 1 (1).png";
import linkarrowImg from "../images/linkarrow.png";
import verticalineImg from "../images/verticaline.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Click_Carousel from "./click_carousel";
import Workshop_Carousel from "./workshop_carousel";

function Home({ data, homepageData, images }) {
  const [current_page, setcurrent_page] = useState(1);
  const imagesperpage = 8;
  const last_Index = current_page * imagesperpage;
  const first_Index = last_Index - imagesperpage;
  let current_images = [];
  if (images.length > 0) current_images = images.slice(first_Index, last_Index);

  let pages = [];

  for (let i = 1; i <= Math.ceil(images.length / imagesperpage); i++)
    pages.push(i);
  const videoRef = useRef(null);
  const institutes = homepageData?.institutes || [];
  return (
    <div>
      <div className="homepage">
        <div className="header" id="hero">
          <div className="video-container">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="back-video"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="header-content">
              <div className="goal">GoAL project</div>
              <div className="goal-desc">
                <p className="full-form">
                  Gender oriented Adaptive Transformation cross-Learning for
                  Climate Change and Disaster Risk Resilience among India,
                  Nepal, Sri Lanka and Japan
                </p>
                <p className="funder">An APN Funded Project | IIT Roorkee</p>
                <a href="#about-home">
                  <button className="btn" style={{ padding: "9px 44px" }}>
                    <div className="btn-text">
                      <p>Explore</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="collab-container">
              <h5>Collaborating Institutes</h5>
              <div className="collab-box">
                {institutes.length > 0 ? (
                  institutes.map((institute, index) => (
                    <img
                      key={index}
                      src={institute.logo}
                      alt={institute.name}
                    />
                  ))
                ) : (
                  <p>No collaborating institutes found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <a href="#hero">
          <img src={back_to_top_arrow} className="back_to_top_arrow" />
        </a>
        <div className="about-page" id="about-home">
          <div className="about-image">
            {data && data.about_data ? (
              <div className="image-grid">
                <img src={data.about_data.img1} alt="Image 1" />
                <img src={data.about_data.img2} alt="Image 2" />
                <img src={data.about_data.img3} alt="Image 3" />
                <img src={data.about_data.img4} alt="Image 4" />
              </div>
            ) : (
              <div className="image-grid">
                <img src={img_bg} alt="Image 1" />
                <img src={img_bg} alt="Image 2" />
                <img src={img_bg} alt="Image 3" />
                <img src={img_bg} alt="Image 4" />
              </div>
            )}
          </div>
          <div className="about-description">
            <div className="overview">
              <div className="overview-body">
                <div className="headline">
                  <h5>Overview</h5>
                  <img src={line172Img} alt="" />
                </div>
                <h2>Know About Our Project</h2>
                <p>
                  Project GoAL attempts to tap adaptive transformations for
                  Climate Change (CC) & Disaster Risk Reduction (DRR) & enhance
                  research & communication capacities of the men, women, and
                  youths in their context by Training the Community Trainers
                  (ToCT) & developing training resources & community-friendly
                  tools for comprehensive outreach through an innovative
                  approach.
                </p>
              </div>

              <NavLink to="/about">
                <button className="btn">Read more</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="study-area">
          <div className="area-desc">
            <div className="area-head">
              <div className="headline">
                <h3>Study Areas</h3>
                <img src={line172Img} alt="" />
              </div>
              <h1>Case Studies in Spotlight</h1>
              <p>
                The collaborative case studies are based on scientific research
                and will be developed in -
              </p>
            </div>
            <div className="area-cards">
              {data.case_studies && data.case_studies.length > 0 ? (
                data.case_studies.map((case_study, index) => (
                  <div key={index} className="area-card">
                    <div className="card-head">
                      <span>{case_study.country}</span>
                    </div>
                    <p>{case_study.study_area}</p>
                  </div>
                ))
              ) : (
                <p>Add case study in database</p>
              )}
            </div>
            <NavLink to="/casestudy">
              <button className="btn">See case studies</button>
            </NavLink>
          </div>
          <div className="maps">
            <img src={homepageData?.map_image} alt="" />
          </div>
        </div>
        <div className="workshop-page">
          <div className="workshop-content-home">
            <div className="head">
              <div className="headline">
                <h3>Recent workshops</h3>
                <img src={line172Img} alt="" />
              </div>

              <h2>We conduct regular workshops</h2>
            </div>
            <Workshop_Carousel workshops={data.workshops} />
            <NavLink
              to="/workshops"
              style={{ textDecoration: "underline", color: "rgb(23, 47, 92)" }}
            >
              {" "}
              See All Workshops
            </NavLink>
          </div>
        </div>
        <div className="objective-page">
          <img src={designleftImg} alt="" className="designleft" />
          <div className="objective-head">
            <img src={line172Img} alt="" />
            <h5>Objectives</h5>
            <img src={line172Img} alt="" />
          </div>
          <h2>Objectives of the GoAL project</h2>
          <div className="objectives-card">
            <div className="obj-card">
              <img src={oneImg} alt="" />
              <p>
                Co-designing of Case Study Framework & Training of community
                Trainers
              </p>
            </div>
            <div className="obj-card">
              <img src={twoImg} alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
            <div className="obj-card">
              <img src={threeImg} alt="" />
              <p>Knowledge sharing & co-leaming</p>
            </div>
          </div>
          <img src={designrightImg} alt="" className="designright" />
        </div>
        <div className="gallery-home">
          <h2>Our Gallery</h2>
          <div className="image-grid">
            {current_images.map((image, index) => (
              <div className="img-hover-div" key={index}>
                <img src={image.image} alt={`Image ${index + 1}`} />
                <div className="image-info">
                  <p className="date">Date: {image.date}</p>
                  <p className="location">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="page-number-wrapper">
            {pages.map((page, index) => (
              <button key={index} onClick={() => setcurrent_page(page)}>
                {page}
              </button>
            ))}
          </div>
          <NavLink to="/gallery">
            {" "}
            <button className="btn">View Gallery</button>
          </NavLink>
        </div>
        <div className="stories-page">
          <div className="stories-content">
            <div className="head">
              <div className="headline">
                <h3>stories</h3>
                <img src={line172Img} alt="" />
              </div>
              <h2>Hear from the people themselves</h2>
            </div>
            <Click_Carousel stories={data.stories} />
          </div>
        </div>
        <div className="funding-agency">
          <div className="fund-content">
            <h2 className="fund-head">Funding Agency</h2>

            <div className="fund-body">
              <div className="left-image">
                <img src={apnLogo1Img} alt="" />
              </div>
              <div className="right-content">
                <p>
                  APN is an intergovernmental network of 22 countries working
                  towards an Asia-Pacific region that is successfully addressing
                  the challenges of global change and sustainability.
                </p>
                <div className="sites">
                  <a
                    href="https://www.apn-gcr.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    APN Website
                    <img src={linkarrowImg} alt="" />
                  </a>
                  <img src={verticalineImg} alt="" />
                  <a
                    href="https://www.apn-gcr.org/project/goal-gender-orientated-adaptive-transformation-cross-learning-for-climate-change-and-disaster-risk-resilience-among-india-nepal-sri-lanka-and-japan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project Website
                    <img src={linkarrowImg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logos" style={{ margin: "auto", marginTop: "90px" }}>
          <ul>
            {institutes.length > 0 ? (
              institutes.map((institute, index) => (
                <li className="logo" key={index}>
                  <img src={institute.logo} alt={institute.name} />
                  <p>{institute.name}</p>
                </li>
              ))
            ) : (
              <p>No collaborating institutes found.</p>
            )}
            <li className="logo">
              <img src={apnLogo1Img} alt="" />
              <p>APN</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
