import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CaseStudeyShimmer from "../components/CaseStudeyShimmer";
import Markdown from "react-markdown";
import { get_case_studies, get_case_study_detail } from "../api/endpoints";

function Casestudy() {
  const { itemId } = useParams();
  const [list, setList] = useState([]);
  const [currItem, setCurrItem] = useState("");
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(true);

  const fetchDetails = async (id) => {
    setLoadingDetail(true);
    try {
      const data = await get_case_study_detail(id);
      setCurrItem(data);
    } catch (error) {
      alert("Error fetching case study data");
      // console.log("Error fetching theme:", error.message);
    } finally {
      setLoadingDetail(false);
    }
  };

  useEffect(() => {
    fetchDetails(itemId);
  }, [itemId]);

  useEffect(() => {
    const fetchList = async () => {
      setLoadingList(true);
      try {
        const case_study_list = await get_case_studies();
        setList(case_study_list);
        if (case_study_list.length > 0 && itemId) {
          fetchDetails(itemId);
        }
      } catch (error) {
        console.log("Error fetching themes:", error.message);
      } finally {
        setLoadingList(false);
      }
    };
    fetchList();
    setTimeout(() => setLoadingDetail(false), 2000);
  }, []);

  return (
    <div className="casestudy-page">
      <div className="page-hero" id="case_studies-bg">
        <div className="page-head">
          <h1>Case Studies</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /
            <NavLink to="/casestudy" className="hero-link">
              Case Studies
            </NavLink>
          </p>
        </div>
        <img src="/static/images/icon.png" alt="Icon" />
      </div>

      <div className="container" id="case_study-select">
        {loadingList ? (
          <div className="quick-link-box">Loading...</div>
        ) : list.length > 0 ? (
          list.map((case_study) => (
            <NavLink
              className={`quick-link-box quicklink ${
                currItem.id === case_study.id ? "active" : ""
              }`}
              id={`case_study-${case_study.id}`}
              key={case_study.id}
              to={`/casestudy/${case_study.id}`}
            >
              {case_study.study_area}
            </NavLink>
          ))
        ) : (
          <p>No case studies available.</p>
        )}
      </div>

      <div className="right" id="case_studies-right">
        {loadingDetail ? (
          <CaseStudeyShimmer />
        ) : currItem ? (
          <section className="case_studies" id={`case-study-${currItem.id}`}>
            <div>
              <p className="small-head">Case Study</p>
              <h1 style={{ marginTop: "5px" }}>{currItem.study_area}</h1>
            </div>
            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              Description
            </h3>
            <div className="column">
              <div className="markdown">
                <Markdown className="markdown-text">
                  {currItem.description}
                </Markdown>
              </div>
              <div className="recent-workshops">
                <h2>Relevant Workshops</h2>
                <div className="workshop-cards">
                  {currItem.related_workshops.length > 0 ? (
                    currItem.related_workshops.map((workshop) => (
                      <NavLink
                        to={`/workshops/workshop-detail/${workshop.id}`}
                        key={workshop.id}
                      >
                        <div className="card" key={workshop.id}>
                          <img
                            src={workshop.thumbnail ? workshop.thumbnail : null}
                            alt={workshop.title}
                          />
                          <div className="desc">
                            <h5>
                              {workshop.title.length > 20
                                ? workshop.title.substring(0, 20) + ". . ."
                                : workshop.title}
                            </h5>
                            <p>{workshop.formatted_date}</p>
                          </div>
                        </div>
                      </NavLink>
                    ))
                  ) : (
                    <p>No workshops found.</p>
                  )}
                </div>
              </div>
            </div>
            <h3
              style={{
                marginTop: "30px",
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
            >
              Case Study Photos
            </h3>
            {currItem.photos.length > 0 ? (
              <>
                <div className="photos">
                  {currItem.photos.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img src={image.image} alt={`img-${index}`} />
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
                  }}
                >
                  See All Photos
                </NavLink>
              </>
            ) : (
              <p>No images available for this case study.</p>
            )}
          </section>
        ) : (
          <section className="case_studies">No theme found</section>
        )}
      </div>
    </div>
  );
}

export default Casestudy;
