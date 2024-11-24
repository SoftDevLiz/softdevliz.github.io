import React from "react";
import Hero from "./components/Hero";
import MyTimeline from "./components/MyTimeline";
import ProjectCarousel from "./components/ProjectCarousel";
import BackgroundHeading from "./components/Subheading";
import "./styles/stylesheet.css"

function App() {
  return (
    <>
      <Hero />
      <BackgroundHeading />
      <MyTimeline />
      <ProjectCarousel />
    </>
  )
}

export default App;