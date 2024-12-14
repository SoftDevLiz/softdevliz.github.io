import React from "react";
import BackgroundHeading from "./BackgroundHeading";
import MyTimeline from "./MyTimeline";
import AboutMeHeading from "./AboutMeHeading";
import Masonry from "./Masonry";
import Socials from "./Socials";

function ProfileContainer() {
    return (
        <div className="profile-container">
            <div className="timeline-section">
                <BackgroundHeading />
                <MyTimeline />
            </div>
            <div className="aboutme-section">
                <AboutMeHeading />
                <Masonry />
                <Socials />
            </div>
        </div>
    )
}

export default ProfileContainer;