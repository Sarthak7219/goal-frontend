import React from "react";

function ResourcesShimmer() {
  return (
    <div className=" resources-container">
      {" "}
      {/* Use unique class name */}
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
      <div className="resource-box resources-shimmer-box"></div>
    </div>
  );
}

export default ResourcesShimmer;
