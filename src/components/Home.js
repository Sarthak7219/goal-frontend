import React from "react";
import "./global.css";
import "./style.css";
import nitbhopal_logo from "../images/logo/bhopal.png";
import science_hub_logo from "../images/logo/science_hub_png.png";
import rika_logo from "../images/logo/rika_logo.png";
import colombo_logo from "../images/logo/colombo.png";
import JNUImg from "../images/logo/JNU.png";
import IITRImg from "../images/logo/IITR.png";
import oneImg from "../images/1.png";
import twoImg from "../images/2.png";
import threeImg from "../images/3.png";
import videoSrc from "../images/video.mp4";
import frame38517Img from "../images/Frame 38517.png";
import frame38516Img from "../images/Frame 38516.png";
import small1Img from "../images/small1.png";
import small2Img from "../images/small2.png";
import small3Img from "../images/small3.png";
import small4Img from "../images/small4.png";
import back_to_top_arrow from "../images/back_to_top_arrow.svg";
import gallery1Img from "../images/gallery/image1.jpg";
import gallery2Img from "../images/gallery/image2.jpg";
import gallery3Img from "../images/gallery/image3.jpg";
import gallery4Img from "../images/gallery/image4.jpg";
import gallery5Img from "../images/gallery/image5.jpg";
import gallery6Img from "../images/gallery/image6.jpg";
import gallery7Img from "../images/gallery/image7.jpg";
import designleftImg from "../images/designleft.png";
import designrightImg from "../images/designright.png";
import line172Img from "../images/Line 172.png";
import apnLogo1Img from "../images/APN Logo-c-v 1 (1).png";
import linkarrowImg from "../images/linkarrow.png";
import verticalineImg from "../images/verticaline.png";

import mapImg from "../images/map.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

import Click_Carousel from "./click_carousel";
import Workshop_Carousel from "./workshop_carousel";

function Home({ data, image_workshop, image_casestudy }) {
  const videoRef = useRef(null);
  return (
    <div>
      <div class="homepage">
        <div class="header" id="hero">
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
            <div class="header-content">
              <div class="goal">GoAL project</div>
              <div class="goal-desc">
                <p class="full-form">
                  Gender oriented Adaptive Transformation cross-Learning for
                  Climate Change and Disaster Risk Resilience among India,
                  Nepal, Sri Lanka and Japan
                </p>
                <p class="funder">An APN Funded Project | IIT Roorkee</p>
                <a href="#about-home">
                  <button class="btn">
                    <div class="btn-text">
                      <p>Explore</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="collab-container">
              <h5>Collaborating Institutes</h5>
              <div className="collab-box">
                <img src={nitbhopal_logo} alt="" />
                <img src={science_hub_logo} alt="" />
                <img src={rika_logo} alt="" style={{ margin: "auto 0" }} />
                <img src={colombo_logo} alt="" />
                <img src={JNUImg} alt="" />
                <img src={IITRImg} alt="" />
                <img src={apnLogo1Img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <a href="#hero">
          <img src={back_to_top_arrow} class="back_to_top_arrow" />
        </a>
        <div class="about-page" id="about-home">
          <div class="about-image">
            <img src={frame38517Img} alt="about" class="img1" />
            <img src={frame38516Img} alt="about" class="img2" />
          </div>
          <div class="about-description">
            <div class="overview">
              <div class="overview-body">
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
                <button class="btn">Read more</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="study-area">
          <div class="area-desc">
            <div class="area-head">
              <div class="headline">
                <h3>Study Areas</h3>
                <img src={line172Img} alt="" />
              </div>
              <h1>Let Us Come Together To Make a Difference</h1>
              <p>
                The collaborative case studies are based on scientific research
                and will be developed in -
              </p>
            </div>
            <div class="area-cards">
              <div class="area-card">
                <div class="card-head">
                  <img src={small1Img} alt="" />
                  <span>India</span>
                </div>
                <p>
                  Udham Singh Nagar District, Uttarakhand, Dumka, Aspirant
                  District Jharkhand and Bishnupur District, Manipur
                </p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small2Img} alt="" />
                  <span>Nepal</span>
                </div>
                <p>Chitwan District, Bagmati Province</p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small3Img} alt="" />
                  <span>Sri Lanka</span>
                </div>
                <p>Gampaha District, Western Province</p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small4Img} alt="" />
                  <span>Japan</span>
                </div>

                <p>
                  literature-based case study and expert, stakeholders, and
                  community inputs through hybrid mode
                </p>
              </div>
            </div>
            <NavLink to="/casestudy">
              <button class="btn">See case studies</button>
            </NavLink>
          </div>
          <div class="maps">
            <img src={mapImg} alt="" />
          </div>
        </div>
        <div class="workshop-page">
          <div class="workshop-content-home">
            <div class="head">
              <div class="headline">
                <h3>Recent workshops</h3>
                <img src="./images/Line 172.png" alt="" />
              </div>

              <h2>We conduct regular workshops</h2>
            </div>
            <Workshop_Carousel workshops={data.workshops} />
          </div>
        </div>
        <div class="objective-page">
          <img src={designleftImg} alt="" class="designleft" />
          <div class="objective-head">
            <img src={line172Img} alt="" />
            <h5>Objectives</h5>
            <img src={line172Img} alt="" />
          </div>
          <h2>Objectives of the GoAL project</h2>
          <div class="objectives-card">
            <div class="obj-card">
              <img src={oneImg} alt="" />
              <p>
                Co-designing of Case Study Framework & Training of community
                Trainers
              </p>
            </div>
            <div class="obj-card">
              <img src={twoImg} alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
            <div class="obj-card">
              <img src={threeImg} alt="" />
              <p>Knowledge sharing & co-leaming</p>
            </div>
          </div>
          <img src={designrightImg} alt="" class="designright" />
        </div>
        <div class="gallery-home">
          <h2>Our Gallery</h2>
          <div class="images">
            <div class="row1">
              <ul>
              {image_casestudy.map((image, index) => (
                 <li 
                 key={index}
                 className="worshop-detail-home gallery-box"
                 style={{ backgroundImage: `url(${image.image_url})` }}>
               
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
            </div>
            <div class="row2">
              <ul>
              {image_workshop.map((image, index) => (
                 <li 
                 key={index}
                 className="worshop-detail-home gallery-box"
                 style={{ backgroundImage: `url(${image.image_url})` }}>
               
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
            </div>
          </div>
          <NavLink to="/gallery">
            {" "}
            <button class="btn">View Gallery</button>
          </NavLink>
        </div>
        <div class="stories-page">
          <div class="stories-content">
            <div class="head">
              <div class="headline">
                <h3>stories</h3>
                <img src={line172Img} alt="" />
              </div>
              <h2>Hear from the people themselves</h2>
            </div>
            <Click_Carousel stories={data.stories} />
          </div>
        </div>
        <div class="funding-agency">
          <div class="fund-content">
            <h2 class="fund-head">Funding Agency</h2>

            <div class="fund-body">
              <div class="left-image">
                <img src={apnLogo1Img} alt="" />
              </div>
              <div class="right-content">
                <p>
                  APN is an intergovernmental network of 22 countries working
                  towards an Asia-Pacific region that is successfully addressing
                  the challenges of global change and sustainability.
                </p>
                <div class="sites">
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
        <div class="logos" style={{ margin: "auto", marginTop: "90px" }}>
          <ul>
            <li class="logo">
              <img src={colombo_logo} alt="" />
              <p>university of colombo</p>
            </li>
            <li class="logo">
              <img src={nitbhopal_logo} alt="" />
              <p>NIT Bhopal</p>
            </li>
            <li class="logo">
              <img src={science_hub_logo} alt="" />
              <p>Science Hub</p>
            </li>
            <li class="logo">
              <img src={rika_logo} alt="" />
              <p>Rika</p>
            </li>
            <li class="logo">
              <img src={apnLogo1Img} alt="" />
              <p>APN</p>
            </li>
            <li class="logo">
              <img src={IITRImg} alt="" />
              <p>IIT Roorkee</p>
            </li>
            <li class="logo">
              <img src={JNUImg} alt="" />
              <p>Jawaharlal Nehru University</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
