import React, { useEffect, useState } from "react";
import "./App.css";
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
import { Routes, Route } from "react-router-dom";
import Theme from "./components/Themes";



function App() {
  const [data, setData] = useState({
    resources: [],
    team_members: [],
    workshops: [],
    case_studies: []
  });
  const [images, setImages] = useState({
   
  });


  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  useEffect(() => {
    const API_URL_IMAGES = `${process.env.REACT_APP_API_URL}/workshop_images/`;
    fetch(API_URL_IMAGES)
      .then((response) => response.json())
      .then((images) => {
        console.log("Fetched images:", images);
        setImages(images);
      })
      .catch((error) => console.error("Error fetching image data:", error));
  }, []);

  console.log("Images in App component:", images);
  console.log("data workshop in App component:", data.workshops);
  

  console.log("Data in App component:", data);
  return (
    <div className="App">
      <Base />

      <Routes>
        <Route path="/" element={<Home data={data} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/workshops"
          element={<WorkshopList workshops={data.workshops} image_workshop={images} />}
        />

        <Route
          path="/workshops/workshop-detail/:id"
          element={<WorkshopDetail workshops={data.workshops} image_workshop={images}/>}
        />

        <Route path="/gallery" element={<Gallery workshops={data.workshops} case_studies={data.case_studies} image_workshop={images}/>}  />

        <Route
          path="/resources"
          element={<Resources resources={data.resources} />} // Pass props here
        />

        <Route
          path="/casestudy"
          element={<Casestudy case_studies={data.case_studies} workshops={data.workshops} image_case_study={data.image_case_study}  />}
        />

        <Route
          path="/team"
          element={<Team team_members={data.team_members} />}
        />

        <Route
          path="/team-member-detail/:id"
          element={<ProfileDetail team_members={data.team_members} />}
        />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/themes" element={<Theme />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
