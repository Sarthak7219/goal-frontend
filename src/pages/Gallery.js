import React, { useState, useEffect } from "react";
import GalleryShimmer from "../components/GalleryShimmer";
import {
  get_case_studies,
  get_visit_photos,
  get_workshop_photos,
} from "../api/endpoints";

function Gallery() {
  const [list, setList] = useState([]);
  const [currItemId, setCurrItemId] = useState("");
  const [loadingList, setLoadingList] = useState(true);
  const [loadingVisitImages, setLoadingVisitImages] = useState(true);
  const [loadingWorkshopImages, setLoadingWorkshopImages] = useState(true);
  const [visitPhotos, setVisitPhotos] = useState([]);
  const [workshopPhotos, setWorkPhotos] = useState([]);
  const [nextVisitPage, setNextVisitPage] = useState(1);
  const [nextWorkshopPage, setNextWorkshopPage] = useState(1);

  const fetchVisitImages = async (id) => {
    if (nextVisitPage === null) return;
    setLoadingVisitImages(true);

    try {
      const data1 = await get_visit_photos(id, nextVisitPage);
      setVisitPhotos((prevPhotos) => [...prevPhotos, ...data1.results]);
      setNextVisitPage(data1.next ? nextVisitPage + 1 : null);
    } catch (error) {
      alert("Error fetching visit images");
      // console.error("Error fetching visit images", error.message);
    } finally {
      setLoadingVisitImages(false);
    }
  };

  const fetchWorkshopImages = async (id) => {
    if (nextWorkshopPage === null) return;
    setLoadingWorkshopImages(true);

    try {
      const data2 = await get_workshop_photos(id, nextWorkshopPage);
      setWorkPhotos((prevPhotos) => [...prevPhotos, ...data2.results]);
      setNextWorkshopPage(data2.next ? nextWorkshopPage + 1 : null);
    } catch (error) {
      alert("Error fetching workshop images");
      // console.error("Error fetching workshop images", error.message);
    } finally {
      setLoadingWorkshopImages(false);
    }
  };

  const loadMoreVisitPhotos = (id) => {
    fetchVisitImages(id);
  };

  const loadMoreWorkshopPhotos = (id) => {
    fetchWorkshopImages(id);
  };

  const fetchImages = async (id) => {
    setCurrItemId(id);
    setLoadingVisitImages(true);
    setLoadingWorkshopImages(true);
    setNextVisitPage(1);
    setNextWorkshopPage(1);

    try {
      const [visitData, workshopData] = await Promise.all([
        get_visit_photos(id, 1),
        get_workshop_photos(id, 1),
      ]);

      setVisitPhotos(visitData.results);
      setNextVisitPage(visitData.next ? 2 : null);

      setWorkPhotos(workshopData.results);
      setNextWorkshopPage(workshopData.next ? 2 : null);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    } finally {
      setLoadingVisitImages(false);
      setLoadingWorkshopImages(false);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      setLoadingList(true);
      try {
        const case_study_list = await get_case_studies();
        setList(case_study_list);
        if (case_study_list.length > 0) {
          setCurrItemId(case_study_list[0].id);
          fetchImages(case_study_list[0].id);
        }
      } catch (error) {
        console.log("Error fetching case studies:", error.message);
      } finally {
        setLoadingList(false);
      }
    };

    fetchList();
  }, []);

  return (
    <div className="gallery-page">
      <h1>See photos from all case studies</h1>
      <div className="gallery-cs-select">
        {loadingList ? (
          <p>Loading...</p>
        ) : list.length > 0 ? (
          list.map((box) => (
            <div
              className={`gal-cs-box ${currItemId === box.id ? "active" : ""}`}
              onClick={() => {
                if (currItemId !== box.id) {
                  fetchImages(box.id);
                }
              }}
              key={box.id}
            >
              <img
                src={box.thumbnail ? box.thumbnail : null}
                alt="case-study-img"
              />
              <h2>{box.country}</h2>
              <p>{box.study_area}</p>
            </div>
          ))
        ) : (
          <p>No case studies found</p>
        )}
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

        <div className="right active" id="gallery-right">
          {/* Visit Photos Section */}
          {loadingVisitImages ? (
            <section id="visit-pics" className="gallery">
              <GalleryShimmer />
            </section>
          ) : (
            <section id="visit-pics" className="gallery">
              <div className="section-head2">
                <h1>Visit Photos</h1>
              </div>
              {visitPhotos.length > 0 ? (
                <div className="photo-container gallery-container">
                  {visitPhotos.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img
                        src={image.image}
                        alt={`img-${index}`}
                        loading="lazy"
                      />
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
              {visitPhotos.length > 0 &&
                nextVisitPage !== null &&
                !loadingVisitImages && (
                  <div className="page-number-wrapper">
                    <button
                      className="btn"
                      onClick={() => loadMoreVisitPhotos(currItemId)}
                    >
                      Show More
                    </button>
                  </div>
                )}
            </section>
          )}

          {/* Workshop Photos Section */}
          {loadingWorkshopImages ? (
            <section id="workshop-pics" className="gallery">
              <GalleryShimmer />
            </section>
          ) : (
            <section id="workshop-pics" className="gallery">
              <div className="section-head2">
                <h1>Workshop Photos</h1>
              </div>
              {workshopPhotos.length > 0 ? (
                <div className="photo-container gallery-container">
                  {workshopPhotos.map((image, index) => (
                    <div key={index} className="img-hover-div">
                      <img
                        src={image.image}
                        alt={`img-${index}`}
                        loading="lazy"
                      />
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
              {workshopPhotos.length > 0 &&
                nextWorkshopPage !== null &&
                !loadingWorkshopImages && (
                  <div className="page-number-wrapper">
                    <button
                      className="btn"
                      onClick={() => loadMoreWorkshopPhotos(currItemId)}
                    >
                      Show More
                    </button>
                  </div>
                )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
