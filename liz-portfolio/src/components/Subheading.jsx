import React from "react";
import Arrow from "../assets/bckgroundarrow.png"

function BackgroundHeading() {
    return (
        <div className="subheading">
            <h2>A little background</h2> 
            <img src={Arrow} width={"80px"}/>
        </div>
    )
}

export default BackgroundHeading;