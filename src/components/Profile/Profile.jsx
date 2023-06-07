import React from "react";
import "./profile.css";
import { Button } from '../Shared/Button';

function openLink(){
  window.open('https://www.linkedin.com/company/kubrik-digital/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ar')
}

export const Profile = () => {

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img
          src="../avatar.png"
          alt="my personal image!"
          width={"174px"}
          draggable={false}
        />

        <div className="profile-status">
          <div className="status"></div>
          <p className="profile-status-p"> Working at <b style={{cursor:'pointer'}} onClick={openLink}> &nbsp;Kubrik</b></p>
        </div>

      </div>
      <div className="profile-data">
        <h1>Vittorio Pugliese</h1>
        <p>Web development and innovation passionate.</p>

        <div className="profile-buttons">
          <a href="./Vittorio-Pugliese-Resume.pdf" download>
            <Button text='Download Resume' resume={true}
              iconClass={'fa-solid fa-paperclip'} />
          </a>
        </div>
      </div>
    </div>
  );
};
