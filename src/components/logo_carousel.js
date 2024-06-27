import React, { useEffect, useRef, useState } from "react";
import nitbhopal_logo from "../images/logo/bhopal.png";
import science_hub_logo from "../images/logo/science_hub_logo.png";
import rika_logo from "../images/logo/rika_logo.png";
import colombo_logo from "../images/logo/colombo.png";
import JNUImg from "../images/logo/JNU.png";
import IITRImg from "../images/logo/IITR.png";
import "./style.css";
import "./global.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosRef = useRef(null);
  const totalLogos = 6; // Number of logos
  const visibleLogos = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (totalLogos / visibleLogos)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalLogos, visibleLogos]);

  useEffect(() => {
    if (logosRef.current) {
      logosRef.current.style.transform = `translateX(-${
        (currentIndex * 100) / visibleLogos
      }%)`;
    }
  }, [currentIndex, visibleLogos]);

  return (
    <div className="collab-carousel">
      <ul className="logos" ref={logosRef}>
        <li className="logo">
          <img src={colombo_logo} alt="Colombo Logo" />
        </li>
        <li className="logo">
          <img src={nitbhopal_logo} alt="NIT Bhopal Logo" />
        </li>
        <li className="logo">
          <img src={science_hub_logo} alt="Science Hub Logo" />
        </li>
        <li className="logo">
          <img src={rika_logo} alt="Rika Logo" />
        </li>
        <li className="logo">
          <img src={IITRImg} alt="IITR Logo" />
        </li>
        <li className="logo">
          <img src={JNUImg} alt="JNU Logo" />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
