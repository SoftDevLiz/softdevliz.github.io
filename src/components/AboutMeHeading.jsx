import React from "react"
import Arrow from "../assets/arrow-left.png"

function AboutMeHeading() {
    return (
        <div className="aboutme-heading">
            <h2>Me</h2> 
            <img src={Arrow}/>
        </div>
    )
}

export default AboutMeHeading;