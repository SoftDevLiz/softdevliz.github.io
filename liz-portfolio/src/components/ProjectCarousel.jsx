import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css'; 
import p1 from "../assets/Project 1.png"
import p2 from "../assets/Project 1-2.png"
import p3 from "../assets/Project 1-3.png"

const items = [
  <img src={p1} alt="Project 1" />,
  <img src={p2} alt="Project 2" />,
  <img src={p3} alt="Project 3" />,
];

function ProjectCarousel() {
  return (
    <div className='carousel'>
      <h2>Projects:</h2>
      <div className="App">
        <Carousel
          items={items}
          startIndex={0}
          onChange={(currentIndex) => console.log(currentIndex)}
        />
      </div>
    </div>
  );
}

export default ProjectCarousel;