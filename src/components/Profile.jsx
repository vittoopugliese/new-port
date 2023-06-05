import React from "react";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src="../avatar.png" alt="my personal image!" draggable={false} />
      </div>
      <div className="profile-data">
        <h1>Vittorio Pugliese</h1>
        <p>Web development and innovation passionate.</p>

        <div className="profile-buttons">
          <a href="./Vittorio-Pugliese-Resume.pdf" download>
            <button className="profile-resume button-one">
              <i className="fa-sharp fa-solid fa-file"></i>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
