import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ClickCarousel from "../components/ClickCarousel";
import WorkshopCarousel from "../components/WorkshopCarousel";
import { SERVER_URL } from "../constants/constants";
import {
  get_homepage_data,
  get_about_data,
  get_stories,
  get_workshops,
  get_case_studies,
} from "../api/endpoints";

function Home() {
  const videoRef = useRef(null);
  const [institutes, setInstitutes] = useState([]);
  const [mapImage, setMapImage] = useState("");
  const [about, setAbout] = useState("");
  const [caseStudies, setCaseStudies] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [stories, setStories] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loadingHomeData, setLoadingHomeData] = useState(true);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState(true);
  const [loadingWorkshops, setLoadingWorkshops] = useState(true);

  const fetchData = async () => {
    setLoadingHomeData(true);
    setLoadingCaseStudies(true);
    setLoadingWorkshops(true);
    try {
      const results = await Promise.allSettled([
        get_homepage_data(),
        get_about_data(),
        get_case_studies(),
        get_workshops(),
        get_stories(),
      ]);

      if (results[0].status === "fulfilled") {
        setInstitutes(results[0].value.institutes);
        setMapImage(results[0].value.map_image);
        setGalleryPhotos(results[0].value.gallery_photos);
      } else {
        // alert("Error fetching institutes");
        // console.error("Error fetching homepage data:", results[0].reason);
      }

      if (results[1].status === "fulfilled") {
        setAbout(results[1].value);
      } else {
        // alert("Error fetching about");
        // console.error("Error fetching about:", results[1].reason);
      }
      if (results[2].status === "fulfilled") {
        setCaseStudies(results[2].value);
      } else {
        // alert("Error fetching case studies");
        // console.error("Error fetching case studies:", results[2].reason);
      }

      if (results[3].status === "fulfilled") {
        setWorkshops(results[3].value);
      } else {
        // alert("Error fetching workshops");
        // console.error("Error fetching workshops:", results[3].reason);
      }

      if (results[4].status === "fulfilled") {
        setStories(results[4].value);
      } else {
        // alert("Error fetching stories");
        // console.error("Error fetching stories:", results[4].reason);
      }
    } catch (error) {
      alert("Error fetching homepage data");
      console.log("Error fetching homepage data:", error.message);
    } finally {
      setLoadingHomeData(false);
      setLoadingCaseStudies(false);
      setLoadingWorkshops(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <source src="/static/images/video.mp4" type="video/mp4" />
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
                {loadingHomeData ? (
                  <p>Loading...</p>
                ) : institutes && institutes.length > 0 ? (
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
          <img
            src="/static/images/back_to_top_arrow.svg"
            className="back_to_top_arrow"
            alt="arrow-img"
          />
        </a>
        <div className="about-page" id="about-home">
          <div className="about-image">
            {about ? (
              <div className="image-grid">
                <img src={`${SERVER_URL}${about.img1}`} alt="img-1" />
                <img src={`${SERVER_URL}${about.img2}`} alt="img-2" />
                <img src={`${SERVER_URL}${about.img3}`} alt="img-3" />
                <img src={`${SERVER_URL}${about.img4}`} alt="img-4" />
              </div>
            ) : (
              <div className="image-grid">
                <img src="/static/images/img-bg.jpg" alt="img-1" />
                <img src="/static/images/img-bg.jpg" alt="img-2" />
                <img src="/static/images/img-bg.jpg" alt="img-3" />
                <img src="/static/images/img-bg.jpg" alt="img-4" />
              </div>
            )}
          </div>
          <div className="about-description">
            <div className="overview">
              <div className="overview-body">
                <div className="headline">
                  <h5>Overview</h5>
                  <img src="/static/images/Line 172.png" alt="" />
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
                <img src="/static/images/Line 172.png" alt="" />
              </div>
              <h1>Case Studies in Spotlight</h1>
              <p>
                The collaborative case studies are based on scientific research
                and will be developed in -
              </p>
            </div>
            <div className="area-cards">
              {loadingCaseStudies ? (
                <p>Loading...</p>
              ) : caseStudies && caseStudies.length > 0 ? (
                caseStudies.map((case_study, index) => (
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
            <img src={mapImage ? mapImage : null} alt="" />
          </div>
        </div>
        <div className="workshop-page">
          <div className="workshop-content-home">
            <div className="head">
              <div className="headline">
                <h3>Recent workshops</h3>
                <img src="/static/images/Line 172.png" alt="" />
              </div>

              <h2>We conduct regular workshops</h2>
            </div>
            {loadingWorkshops ? (
              <p>Loading...</p>
            ) : (
              <>
                <WorkshopCarousel workshops={workshops} />
                {workshops && workshops.length > 0 && (
                  <NavLink
                    to="/workshops"
                    style={{
                      textDecoration: "underline",
                      color: "rgb(23, 47, 92)",
                    }}
                  >
                    {" "}
                    See All Workshops
                  </NavLink>
                )}
              </>
            )}
          </div>
        </div>
        <div className="objective-page">
          <img
            src="/static/images/designleft.png"
            alt=""
            className="designleft"
          />
          <div className="objective-head">
            <img src="/static/images/Line 172.png" alt="" />
            <h5>Objectives</h5>
            <img src="/static/images/Line 172.png" alt="" />
          </div>
          <h2>Objectives of the GoAL project</h2>
          <div className="objectives-card">
            <div className="obj-card">
              <img src="/static/images/1.png" alt="" />
              <p>
                Co-designing of Case Study Framework & Training of community
                Trainers
              </p>
            </div>
            <div className="obj-card">
              <img src="/static/images/2.png" alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
            <div className="obj-card">
              <img src="/static/images/3.png" alt="" />
              <p>Knowledge sharing & co-leaming</p>
            </div>
          </div>
          <img
            src="/static/images/designright.png"
            alt=""
            className="designright"
          />
        </div>
        <div className="gallery-home">
          <h2>Our Gallery</h2>
          <div className="image-grid">
            {loadingHomeData ? (
              <p>Loading...</p>
            ) : (
              galleryPhotos &&
              galleryPhotos.length > 0 &&
              galleryPhotos.map((image, index) => (
                <div className="img-hover-div" key={index}>
                  <img
                    src={image.image}
                    alt={`img-${index + 1}`}
                    loading="lazy"
                  />
                  <div className="image-info">
                    <p className="date">Date: {image.formatted_date}</p>
                    <p className="location">{image.caption}</p>
                  </div>
                </div>
              ))
            )}
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
                <img src="/static/images/Line 172.png" alt="" />
              </div>
              <h2>Hear from the people themselves</h2>
            </div>
            <ClickCarousel stories={stories} />
          </div>
        </div>
        <div className="funding-agency">
          <div className="fund-content">
            <h2 className="fund-head">Funding Agency</h2>

            <div className="fund-body">
              <div className="left-image">
                <img src="/static/images/APN Logo-c-v 1 (1).png" alt="" />
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
                    <img src="/static/images/linkarrow.png" alt="" />
                  </a>
                  <img src="/static/images/verticaline.png" alt="" />
                  <a
                    href="https://www.apn-gcr.org/project/goal-gender-orientated-adaptive-transformation-cross-learning-for-climate-change-and-disaster-risk-resilience-among-india-nepal-sri-lanka-and-japan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project Website
                    <img src="/static/images/linkarrow.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logos" style={{ margin: "auto", marginTop: "90px" }}>
          <ul>
            {loadingHomeData ? (
              <p>Loading...</p>
            ) : institutes && institutes.length > 0 ? (
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
              <img src="/static/images/APN Logo-c-v 1 (1).png" alt="" />
              <p>APN</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
