import React from "react";
import "./global.css";
import "./style.css";
import { NavLink } from "react-router-dom";

import archdeptImg from "../images/archdept.png";
import footerLogo from "../images/footer-logo.svg";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-body">
            <div className="project-name">
              <div className="heading">
                <img src={footerLogo} alt="" />
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
              <NavLink to="team">
                <p>Team</p>
              </NavLink>
              <NavLink to="gallery">
                <p>gallery</p>
              </NavLink>
              <NavLink to="about">
                <p>About</p>
              </NavLink>
              <NavLink to="/casestudy">
                <p>Case Studies</p>
              </NavLink>
            </div>
            <div className="get-in-touch">
              <h4>Get In Touch</h4>
              <p>+91-1332-23124</p>
              <p>example@gmail.com</p>
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
                src={archdeptImg}
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
