import React from "react";
import GithubLogo from "../assets/3DGithub.png"
import LinkedInLogo from "../assets/3DLinkedIn.png"

function Socials() {
    return (
        <div className="socials-section">
            <p>Hello! I am a junior dev based in Cape Town, South Africa. <br></br>I enjoy what I do, I've got what it takes, and I'd make an amazing addition to your team.</p>
            <h2>Links:</h2>
            <div>
            <img src={GithubLogo} />
            <img src={LinkedInLogo} />
            </div>
        </div>
    )
}

export default Socials;