import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Carousel from './ProjectCarousel.jsx'
import './index.css'
import ProjectCarousel from './ProjectCarousel.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectCarousel/>
  </StrictMode>,
)
