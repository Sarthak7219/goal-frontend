import React from "react";

function TeamShimmer() {
  const shimmerArray = [1, 2, 3, 4]; // Array to simulate multiple loading cards

  return (
    <div className="shimmer-container">
      {shimmerArray.map((item, index) => (
        <div className="member-card shimmer" key={index}>
          <div className="member-img shimmer-effect"></div>
          <div className="member-card-bg shimmer-effect"></div>
          <div className="member-details">
            <div className="shimmer-text shimmer-effect"></div>
            <div className="shimmer-line shimmer-effect"></div>
            <div className="shimmer-text shimmer-effect"></div>
            <div className="shimmer-text shimmer-effect"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamShimmer;
