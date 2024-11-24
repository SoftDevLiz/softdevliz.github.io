import React from "react";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import ProfileSection from "./components/ProfileSection";
import "./styles/stylesheet.css"

function App() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <ProjectCarousel />
    </>
  )
}

export default App;