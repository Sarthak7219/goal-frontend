import React from "react";

const GalleryShimmer = () => {
  return (
    <div className="shimmer-gallery-container">
      {/* Placeholder grid for shimmer effect */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="shimmer-gallery-item" key={index}>
          <div className="shimmer-img"></div>
          <div className="shimmer-details">
            <div className="shimmer-title"></div>
            <div className="shimmer-text"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryShimmer;
