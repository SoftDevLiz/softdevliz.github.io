import React from "react";

const images = [

    {
      src: "/assets/3DGithub.png",
      alt: "Github Logo"
    },
    {
      src: "/assets/3DLinkedIn.png",
      alt: "LinkedIn Logo"
    },
    {
      src: "/assets/3DCv.png",
      alt: "Download CV Icon"
    }
  
  ]

function Socials() {
    return (
        <div className="socials-section">
            <h2>Links:</h2>
            {images.map((image) => (
                <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </div>
    )
}

export default Socials;

