import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Footer from "./components/Footer";
import WorkshopDetail from "./pages/WorkshopDetail";
import WorkshopList from "./pages/WorkshopList";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import ProfileDetail from "./pages/ProfileDetail";
import Resources from "./pages/Resources";
import Casestudy from "./pages/Casestudy";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Theme from "./pages/Themes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Base />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/member-detail/:id" element={<ProfileDetail />} />
        <Route path="/workshops" element={<WorkshopList />} />
        <Route
          path="/workshops/workshop-detail/:id"
          element={<WorkshopDetail />}
        />
        <Route path="/resources" element={<Resources />} />
        <Route path="/theme/:itemId" element={<Theme />} />
        <Route path="/casestudy/:itemId" element={<Casestudy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
