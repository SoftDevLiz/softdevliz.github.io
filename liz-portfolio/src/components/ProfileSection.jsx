import React from "react";
import BackgroundHeading from "./BackgroundHeading";
import MyTimeline from "./MyTimeline";
import Masonry from "./Masonry";

function ProfileSection() {
    return (
        <div className="profile-container">
            <div>
                <BackgroundHeading />
                <MyTimeline />
            </div>
            <div>
                <Masonry />
            </div>
        </div>
    )
}

export default ProfileSection;