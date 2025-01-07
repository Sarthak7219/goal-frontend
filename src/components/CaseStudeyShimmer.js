import React from 'react';
import "./style.css"; // Make sure to include the CSS file
import "./shimmer.css"; // Make sure to include the CSS file
function CaseStudeyShimmer() {
  return (
    <div>
      <div className='shimmer_case_studies case_studies'>
        {/* Render 3 or 4 shimmer divs */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className='shimmer_item'>
            <div className='shimmer_title'></div>
            <div className='shimmer_column'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudeyShimmer;
