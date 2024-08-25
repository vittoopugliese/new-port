import React from "react";
import "./profile.css";
import {Button} from "../Shared/Button";
import {ThreeDee} from "./../Shared/ThreeDee";



export const Profile = () => {
  return (
    <div className="profile-container">
      <ThreeDee />

      <div className="profile-data">
        <h1>Vittorio Pugliese</h1>
        <p>Web development and innovation passionate.</p>

        <div className="profile-buttons">
          <a href="./Vittorio-Pugliese-Resume.pdf" download>
            <Button
              text="Download Resume"
              resume={true}
              iconClass={"fa-solid fa-paperclip"} />
          </a>
        </div>
      </div>
    </div>
  );
};
