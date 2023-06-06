import React from "react";
import {useNavigate} from "react-router-dom";

export const Button = ({text, path, iconClass, resume}) => {
  const navigate = useNavigate();
  return (
    <>
      {resume ? (
        <div className="contact-button-container" style={{margin:'0em'}}>
          <button
            onClick={() => navigate(path)}
            className="button-one contact-button">
            <img src="./vectors/resume.svg" alt="resume icon" width='20px' />
            {text}
          </button>
        </div>
      ) : (
        <div className="contact-button-container">
          <button
            onClick={() => navigate(path)}
            className="button-one contact-button">
            {text}
            <i className={iconClass}></i>
          </button>
        </div>
      )}
    </>
  );
};
