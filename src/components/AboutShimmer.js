import React from "react";

function AboutShimmer() {
  return (
    <div>
      <section className="about" id="abstract">
        <div className="shimmer-title"></div>

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
