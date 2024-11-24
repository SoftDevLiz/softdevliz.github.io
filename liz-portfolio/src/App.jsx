import React from "react";
import Hero from "./components/Hero";
import MyTimeline from "./components/MyTimeline";
import ProjectCarousel from "./components/ProjectCarousel";
import Subheading from "./components/Subheading";
import "./styles/stylesheet.css"

function App() {
  return (
    <>
      <Hero />
      <Subheading />
      <MyTimeline />
      <ProjectCarousel />
    </>
  )
}

export default App;