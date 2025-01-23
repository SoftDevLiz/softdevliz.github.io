import React from "react";
import Arrow from "../assets/bckgroundarrow.png"

function BackgroundHeading() {
    return (
        <div className="background-heading">
            <h2>A little background</h2> 
            <img src={Arrow}/>
        </div>
    )
}

export default BackgroundHeading;