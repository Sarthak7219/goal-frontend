import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page_404">
      <img src="/static/images/404.png" alt="" />

      <NavLink to="/">
        <h3>Back To Home</h3>
      </NavLink>
    </div>
  );
}

export default PageNotFound;
