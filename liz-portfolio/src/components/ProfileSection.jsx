import React from "react";
import BackgroundHeading from "./BackgroundHeading";
import MyTimeline from "./MyTimeline";
import Masonry from "./Masonry";

function ProfileSection() {
    return (
        <div className="profile-container">
            <div className="timeline-section">
                <BackgroundHeading />
                <MyTimeline />
            </div>
            <div className="masonry-section">
                <Masonry />
            </div>
        </div>
    )
}

export default ProfileSection;