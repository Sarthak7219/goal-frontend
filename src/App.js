import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import Footer from "./components/Footer";
import WorkshopDetail from "./components/WorkshopDetail";
import WorkshopList from "./components/WorkshopList";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import ProfileDetail from "./components/ProfileDetail";
import Resources from "./components/Resources";
import Casestudy from "./components/Casestudy";
import About from "./components/About";
import SearchPage from "./components/SearchPage";
import PageNotFound from "./components/PageNotFound";
import Theme from "./components/Themes";

function App() {
  const [data, setData] = useState({
    resources: [],
    team_members: [],
    workshops: [],
    case_studies: [],
    themes: [],
    case_study_theme_descriptions: [],
  });

  console.log("App component called");
  const [workshopImages, setWorkshopImages] = useState([]);
  const [casestudyImages, setCasestudyImages] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL.replace(/\/+$/, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await fetch(API_URL);
        const data = await dataResponse.json();
        setData(data);

        const workshopImagesResponse = await fetch(
          `${API_URL}/workshop_images/`
        );
        const workshopImages = await workshopImagesResponse.json();
        setWorkshopImages(workshopImages);

        const casestudyImagesResponse = await fetch(
          `${API_URL}/casestudy_images/`
        );
        const casestudyImages = await casestudyImagesResponse.json();
        setCasestudyImages(casestudyImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const allImages = [...workshopImages, ...casestudyImages];
  return (
    <div className="App">
      <Base case_studies={data.case_studies} workshops={data.workshops} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              homepageData={data.homepage_data}
              images={allImages.slice(0, 8)}
            />
          }
        />
        <Route path="/about" element={<About about_data={data.about_data} />} />
        <Route
          path="/workshops"
          element={
            <WorkshopList
              workshops={data.workshops}
              image_workshop={workshopImages}
            />
          }
        />
        <Route
          path="/workshops/workshop-detail/:id"
          element={
            <WorkshopDetail
              workshops={data.workshops}
              image_workshop={workshopImages}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              workshops={data.workshops}
              case_studies={data.case_studies}
              image_workshop={workshopImages}
              image_casestudy={casestudyImages}
            />
          }
        />
        <Route
          path="/resources"
          element={<Resources resources={data.resources} />}
        />
        <Route
          path="/casestudy"
          element={
            <Casestudy
              case_studies={data.case_studies}
              workshops={data.workshops}
              image_case_study={casestudyImages}
            />
          }
        />
        <Route
          path="/team"
          element={<Team team_members={data.team_members} />}
        />
        <Route
          path="/team-member-detail/:id"
          element={<ProfileDetail team_members={data.team_members} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              case_studies={data.case_studies}
              workshops={data.workshops}
              themes={data.themes}
            />
          }
        />
        <Route
          path="/themes"
          element={
            <Theme
              themes={data.themes}
              case_study_theme_descriptions={data.case_study_theme_descriptions}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
