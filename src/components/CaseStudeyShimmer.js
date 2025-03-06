import React from "react";
function CaseStudeyShimmer() {
  return (
    <div>
      <div className="shimmer_case_studies case_studies">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="shimmer_item">
            <div className="shimmer_title"></div>
            <div className="shimmer_column"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudeyShimmer;
