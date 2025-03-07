import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { get_themes, get_theme_detail } from "../api/endpoints";

function Themes() {
  const { itemId } = useParams();
  const [list, setList] = useState([]);
  const [currItem, setCurrItem] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(true);

  const fetchDetails = async (id) => {
    setLoadingDetail(true);
    try {
      const data = await get_theme_detail(id);
      setCurrItem(data);
    } catch (error) {
      console.log("Error fetching theme:", error.message);
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
        const theme_list = await get_themes();
        setList(theme_list);
        if (theme_list.length > 0 && itemId) {
          fetchDetails(itemId);
        }
      } catch (error) {
        alert("Error fetching theme data");
        // console.log("Error fetching themes:", error.message);
      } finally {
        setLoadingList(false);
      }
    };
    fetchList();
  }, []);

  return (
    <div className="themes-page">
      <div className="page-hero" id="themes-bg">
        <div className="page-head">
          <h1>Themes</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/themes" className="hero-link">
              Themes
            </NavLink>
          </p>
        </div>
        <img src="/static/images/icon.png" alt="icon" />
      </div>

      <div className="container" id="themes">
        <div className="quick-link-box" id="themes-sidebox">
          {loadingList ? (
            <div className="theme-quicklink">Loading...</div>
          ) : list && list.length > 0 ? (
            list.map((theme, index) => (
              <NavLink
                key={index}
                className={`theme-quicklink ${
                  currItem.id === theme.id ? "active" : ""
                }`}
                to={`/theme/${theme.id}`}
              >
                - Theme-{theme.id}
              </NavLink>
            ))
          ) : (
            <div>No themes found</div>
          )}
        </div>

        <div className="right" id="themes-right">
          {loadingDetail ? (
            <div>Loading...</div>
          ) : currItem ? (
            <div className="theme-cont active">
              <div className="section-head3">
                <p>Theme {currItem.id}</p>

                <h1>{currItem.title}</h1>
              </div>
              <section className="themes" id="description">
                <h1>Description</h1>
                <div className="markdown">
                  {" "}
                  <Markdown className="markdown-text">
                    {currItem.description}
                  </Markdown>
                </div>
              </section>
              <section className="themes" id="theme-case-studies">
                <h1>Examples From Case Studies</h1>
                {currItem.case_studies ? (
                  <div className="theme-cs-box">
                    <div className="cs-select">
                      {currItem.case_studies &&
                        currItem.case_studies.map((item, index) => (
                          <div
                            key={index}
                            className={`cs ${
                              index === activeOption ? "active" : ""
                            }`}
                            onClick={() => setActiveOption(index)}
                          >
                            <p>{item.case_study}</p>{" "}
                          </div>
                        ))}
                    </div>
                    <div className="theme-cs-desc">
                      <div className="markdown">
                        {" "}
                        <Markdown className="markdown-text">
                          {currItem.case_studies[activeOption].description}
                        </Markdown>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>No case studies found</p>
                )}
              </section>
              <section className="themes">
                <h1>Photos</h1>

                <div className="photos" style={{ marginTop: "20px" }}>
                  {currItem.case_studies[activeOption].images &&
                  currItem.case_studies[activeOption].images.length > 0 ? (
                    currItem.case_studies[activeOption].images.map(
                      (image, index) => (
                        <div className="img-hover-div" key={index}>
                          <img src={image.image} alt={`img`} />
                          <div className="image-info">
                            <p className="date">{image.formatted_date}</p>
                            <p className="location">{image.caption}</p>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <div>Images not available</div>
                  )}
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
              </section>
            </div>
          ) : (
            <div>No themes found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Themes;
