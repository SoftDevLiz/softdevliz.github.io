import React from "react";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/ProjectCarousel";
import ProfileContainer from "./components/ProfileContainer";
import Socials from "./components/Socials";
import "./styles/stylesheet.css"

function App() {
  return (
    <>
      <Hero />
      <ProfileContainer />
      <ProjectCarousel />
      <Socials />
    </>
  )
}

export default App;