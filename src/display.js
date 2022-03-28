import React from "react";
import "./style.css";


// video.src = "car2.mp4";

function Display({handleDisplay}) {

    return(
        <div className="display" onClick={handleDisplay}>
            <div className="display__video">
                <video autoPlay loop muted height="1080px" width="auto" src="videos/car1.mp4"></video>
            </div>
            <div className="display__text">
                <svg width="100%" height="100%">
                    <text x="2.5%" y="95%">DREAM CAR</text>
                </svg>
            </div>
            <div className="display__click"></div>
        </div>
    )
}

export default Display;