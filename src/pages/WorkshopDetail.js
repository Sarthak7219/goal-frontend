import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { get_workshops, get_workshop_detail } from "../api/endpoints";
import WorkshopMap from "../components/WorkshopMap";

function WorkshopDetail() {
  const { id } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [recentWorkshops, setRecentWorkshops] = useState([]);
  const [workshopImages, setWorkshopImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const results = await Promise.allSettled([
        get_workshop_detail(id),
        get_workshops(),
      ]);

      if (results[0].status === "fulfilled") {
        setWorkshop(results[0].value);
        setWorkshopImages(results[0].value.workshop_photos);
      } else {
        alert("Error fetching workshop data");
        // console.error("Error fetching workshop data:", results[0].reason);
      }

      if (results[1].status === "fulfilled") {
        setRecentWorkshops(results[1].value);
      } else {
        alert("Error fetching recent workshops");
        // console.error("Error fetching recent workshops:", results[1].reason);
      }
    } catch (error) {
      alert("Error fetching recent workshops");
      // console.log("Error fetching workshops:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="workshop-detail-page">
      <div className="page-hero" id="gallery-bg">
        <div className="page-head">
          <h1>Workshop</h1>
          <p>
            {" "}
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/workshops" className="hero-link">
              Workshops
            </NavLink>{" "}
            /{" "}
            <NavLink
              to={workshop ? `/workshops/workshop-detail/${id}` : "#"}
              className="hero-link"
            >
              {workshop ? workshop.title : "Loading..."}
            </NavLink>
          </p>
        </div>
        <img src="/static/images/icon.png" alt="" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : workshop ? (
        <div className="workshop-content">
          <div className="section-head">
            <div>
              <p>Workshop #{workshop.id}</p>
              <div className="line"></div>
            </div>
            <h1>{workshop.title}</h1>
          </div>
          <div className="workshop-container">
            <div className="left-container">
              {workshop.link ? (
                <iframe
                  width="700"
                  height="298"
                  src={workshop.link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Workshop Video"
                ></iframe>
              ) : workshop.thumbnail ? (
                <img
                  src={workshop.thumbnail}
                  alt="Workshop"
                  loading="lazy"
                  style={{ objectFit: "contain", backgroundColor: "black" }}
                />
              ) : (
                <></>
              )}

              <div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <h2>About the workshop</h2>
                  {workshop.pdf && (
                    <a
                      href={workshop.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "4px 8px",
                        borderRadius: "5px",
                        border: "2px solid #EC028C",
                        backgroundColor: "white",
                        cursor: "pointer",
                        display: "flex",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="/static/images/download_icon.svg"
                        style={{ width: "14px", height: "auto" }}
                      />
                      <div className="btn-text" style={{ margin: "0" }}>
                        <p style={{ color: "#EC028C", margin: "0" }}>
                          Dowload PDF
                        </p>
                      </div>
                    </a>
                  )}
                </div>
                <div className="markdown" style={{ marginTop: "12px" }}>
                  <Markdown className="markdown-text">
                    {workshop.description}
                  </Markdown>
                </div>
              </div>
              <div>
                <h2>Speakers</h2>
                <p>{workshop.speakers}</p>
              </div>
              <div>
                <h2>Lead institution</h2>
                <p>{workshop.lead_institution}</p>
              </div>
              <div>
                <h2>Organised by</h2>
                <p>{workshop.organised_by}</p>
              </div>

              <div>
                <h2>Key takeaways</h2>
                <div className="markdown">
                  <Markdown className="markdown-text">
                    {workshop.key_takeaways}
                  </Markdown>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="workshop-detail">
                <h2>Workshop Details</h2>
                <div>
                  <h4>Date:</h4>
                  <p>
                    {workshop.formatted_date} - {workshop.formatted_end_date}
                  </p>
                </div>
                <div>
                  <h4>Mode:</h4>
                  <p>{workshop.mode}</p>
                </div>
                <div>
                  <h4>Venue:</h4>
                  <p>{workshop.venue}</p>
                </div>
                <div>
                  <h4>Case study:</h4>
                  <p>{workshop.case_study_name}</p>
                </div>
              </div>
              {workshop.latitude && workshop.longitude && (
                <div
                  className="workshop-detail"
                  style={{
                    backgroundColor: "white",
                    padding: 0,
                    height: "fit-content",
                  }}
                >
                  <h2>See on map</h2>
                  <WorkshopMap
                    latitude={workshop?.latitude}
                    longitude={workshop?.longitude}
                  />
                </div>
              )}
              <div className="recent-workshops">
                <h2>Recent Workshops</h2>
                <div className="workshop-cards">
                  {recentWorkshops.length > 0 ? (
                    recentWorkshops.map((r_workshop, index) => (
                      <NavLink
                        key={index}
                        to={`/workshops/workshop-detail/${r_workshop.id}`}
                      >
                        <div className="card" key={r_workshop.id}>
                          <img
                            src={
                              r_workshop.thumbnail
                                ? r_workshop.thumbnail
                                : "/static/images/workshop-thumbnail.jpg"
                            }
                            alt="img"
                          />
                          <div className="desc">
                            <h5>
                              {r_workshop.title.length > 20
                                ? r_workshop.title.substring(0, 20) + ". . ."
                                : r_workshop.title}
                            </h5>
                            <p>
                              {r_workshop.formatted_date} -{" "}
                              {r_workshop.formatted_end_date}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    ))
                  ) : (
                    <p>No workshops available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="workshop-photos-container">
            <h3
              style={{
                marginTop: "30px",
              }}
            >
              Workshop Photos
            </h3>
            {workshop.workshop_photos && workshop.workshop_photos.length > 0 ? (
              <>
                <div className="photos" style={{ marginTop: "12px" }}>
                  {workshop.workshop_photos.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img
                        src={image.image}
                        alt={`img-${index}`}
                        loading="lazy"
                      />
                      <div className="image-info">
                        <p className="date">Date: {image.formatted_date}</p>
                        <p className="location">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <NavLink
                  to="/gallery"
                  style={{
                    fontSize: "14px",
                    textDecoration: "underline",
                    color: "#172f5c",
                    marginTop: "12px",
                  }}
                >
                  See All Photos
                </NavLink>
              </>
            ) : (
              <p>No images available for this workshop.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Workshop data not found</p>
      )}
    </div>
  );
}

export default WorkshopDetail;
