import React from "react";
import {Button} from "../Shared/Button";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-data">
        <h1>Vittorio Pugliese</h1>
        <p>Web & Mobile Developer with a passion for innovation.</p>

        <div className="profile-buttons">
          <a href="./Vittorio-Pugliese-Resume.pdf" download>
            <Button text="Download Resume" resume={true} iconClass={"fa-solid fa-paperclip"} />
            {/* <Button text="LinkedIn" resume={true} iconClass={"fa-brands fa-linkedin-in"} /> */}
          </a>
        </div>
      </div>
    </div>
  );
};
