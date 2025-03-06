import React from "react";
import ReactDOM from "react-dom/client";

import "./static/css/global.css";
import "./static/css/index.css";
import "./static/css/style.css";
import "./static/css/shimmer.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
