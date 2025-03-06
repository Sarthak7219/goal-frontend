import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-body">
            <div className="project-name">
              <div className="heading">
                <img src="/static/images/footer-logo.svg" alt="" />
                <p>An initiative by IIT Roorkee</p>
              </div>
              <h3>APN funded project IIT Roorkee</h3>
              <a
                href="https://www.apn-gcr.org/"
                target="_blank"
                rel="noreferrer"
              >
                <p>APN</p>
              </a>
              <a
                href="https://www.iitr.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                <p>IIT Roorkee</p>
              </a>
            </div>
            <div className="quicklinks">
              <h4>Quick Link</h4>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/workshops">
                <p>Workshops</p>
              </NavLink>
              <NavLink to="/theme/1">
                <p>Themes</p>
              </NavLink>
              <NavLink to="/casestudy/1">
                <p>Case Studies</p>
              </NavLink>
              <NavLink to="team">
                <p>Team</p>
              </NavLink>
              <NavLink to="gallery">
                <p>Gallery</p>
              </NavLink>
              <NavLink to="about">
                <p>About</p>
              </NavLink>
            </div>
            <div className="get-in-touch">
              <h4>Get In Touch</h4>
              <p>---</p>
              <p>---</p>
            </div>
            <div className="address">
              <h4>Address</h4>
              <p>
                Department of Architecture and Planning, Indian Institute of
                Technology (IIT), Roorkee Uttarakhand- 247667, India
              </p>
            </div>
            <div className="dept-img">
              <h2>
                Department Of Architecture and Planning,
                <span>IIT Roorkee</span>
              </h2>
              <img
                src="/static/images/archdept.png"
                alt=""
                width="216.21px"
                height="193.21px"
              />
            </div>
          </div>

          <p>Website credits-@Tinky&@Sarthak</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
