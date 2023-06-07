import React from "react";

export const SocialCard = ({social}) => {
  return (
    <a href={social.link} target="_blank">
      <div className="social">
        <i style={{color: social.color}}
          className={`fa-brands fa-${social.name.toLowerCase()}`}></i>
        <p style={{color: social.color}}>{social.name}</p>
      </div>
    </a>
  );
};
