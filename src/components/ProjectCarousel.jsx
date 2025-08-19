import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css'; 
import p1 from "../assets/vowelcounter.png"
import p2 from "../assets/ticketbounty.png"
import p3 from "../assets/podify.png"

const projects = [
  {
    img: p1,
    alt: "Fancy Vowel Counter",
    link: "https://fancyvowelcounter.netlify.app/",
  },
  {
    img: p2,
    alt: "Ticket Bounty",
    link: "https://the-road-to-next-basic-app.vercel.app/",
  },
  {
    img: p3,
    alt: "Podify",
    link: "https://main--podifyproject.netlify.app/", 
  },
];

const items = projects.map((project) => (
  <img src={project.img} alt={project.alt} />
));

const handleClick = (e, index, _item, isCurIndex) => {
  if (!isCurIndex) return
  const project = projects[index]
  if (project && project.link) {
    window.open(project.link, '_blank', 'noopener,noreferrer')
  }
}

function ProjectCarousel() {
  return (
    <div className='carousel'>
      <h2>Projects (some of these are WIP!)</h2>
      <div className="App">
        <Carousel
          items={items}
          startIndex={0}
          onClickItem={handleClick}
        />
      </div>
    </div>
  );
}

export default ProjectCarousel;