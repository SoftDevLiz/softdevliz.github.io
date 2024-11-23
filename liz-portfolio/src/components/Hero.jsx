import React from "react";
import "../styles/stylesheet.css"

function Hero() {
    return (
        <div className="hero">
            <h1>
                {Array.from("Liezl Mouton_").map((char, index) => (
                <span key={index}>
                {char === " " ? "\u00A0" : char}
                </span>
                ))}   
            </h1>
            <h2>Junior Developer</h2>
        </div>
    )
}

export default Hero;