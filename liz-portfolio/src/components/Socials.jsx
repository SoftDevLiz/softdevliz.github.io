import React from "react";
import GithubLogo from "../assets/3DGithub.png"
import LinkedInLogo from "../assets/3DLinkedIn.png"

function Socials() {
    return (
        <div className="socials-section">
            <h2>Links:</h2>
            <div>
                <img 
                    src={GithubLogo}
                    alt="Github Logo" 
                    style={{ width: '50px', height: '50px' }}
                />
                <img 
                    src={LinkedInLogo}   
                    alt="LinkedIn Logo" 
                    style={{ width: '50px', height: '50px' }}
                />
            </div>
        </div>
    )
}

export default Socials;