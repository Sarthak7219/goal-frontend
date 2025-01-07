import React from "react";
import "./style.css"; // Make sure to include the CSS file
import "./shimmer.css"; // Make sure to include the CSS file

function ResourcesShimmer() {
  return (
    <div className=" resources-container"> {/* Use unique class name */}
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
    </div>
  );
}

export default ResourcesShimmer;
