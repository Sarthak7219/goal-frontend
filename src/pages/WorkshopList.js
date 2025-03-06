import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { get_workshops } from "../api/endpoints";

function WorkshopList() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await get_workshops();
        setWorkshops(data);
      } catch (error) {
        alert("Error fetching workshops");
        // console.log("Error fetching workshops:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="workshops-page">
      <div className="page-hero" id="team-bg">
        <div className="page-head">
          <h1>Workshops</h1>
          <p>
            <NavLink to="/" className="hero-link">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink to="/workshops" className="hero-link">
              Workshops
            </NavLink>
          </p>
        </div>
        <img src="/static/images/icon.png" alt="Icon" />
      </div>

      <div className="workshops-list">
        <h1>See All Workshops</h1>

        <div className="workshops-list-wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : workshops.length === 0 ? (
            <p>No workshops found</p>
          ) : (
            workshops.map((workshop, index) => (
              <div key={index}>
                <div className="line"></div>
                <div className="box">
                  {/* <img src={workshop.image} alt="" /> */}
                  <div>
                    <div className="flex">
                      <p>Workshop</p>
                      <p className="pink-date">{workshop.date}</p>
                    </div>
                    <NavLink to={`/workshops/workshop-detail/${workshop.id}`}>
                      <h1>{workshop.title}</h1>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkshopList;
