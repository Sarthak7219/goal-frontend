import React from 'react';
import "./style.css"; // Make sure to include the CSS file
import "./shimmer.css"; // Make sure to include the CSS file

function AboutShimmer() {
  return (
    <div>
      <section className="about" id="abstract">
        <h1 className="shimmer-title"></h1>
        
        <div className="about-abs">
          <div className="content shimmer-content"></div>
          
          <div className="about-image shimmer-image">
            <div className="image-grid">
              <div className="shimmer-img"></div>
              <div className="shimmer-img"></div>
              <div className="shimmer-img"></div>
              <div className="shimmer-img"></div>
            </div>
          </div>
        </div>
        
          <div className="content desc-shimmer-content"></div>
          
         
          
        
      </section>
    </div>
  );
}

export default AboutShimmer;
