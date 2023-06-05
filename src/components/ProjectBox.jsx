import React from "react";

export const ProjectBox = ({project}) => {
  return (
    <div className="project-box">
      <div
        className="project-image-container"
        onClick={() => {
          window.open(project.link);
        }}>
        <img src={project.image} alt="project-image" draggable={false} />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-techno-icons">
          <img src="https://www.svgrepo.com/show/512400/javascript-155.svg" alt="javascript vector" />
          <img src="https://www.svgrepo.com/show/445968/react.svg" alt="react vector" />
          <img src="https://www.svgrepo.com/show/306500/openai.svg" alt="openAi vector" />
        </div>
        <div className="project-buttons">
          <button className="button-live">
            <a href={project.link} target="_blank" style={{fontWeight: "600"}}>
              View
            </a>
            <i className="fa-solid fa-turkish-lira-sign"></i>
          </button>
          <button className="button-live">
            <a href={project.link} target="_blank" style={{fontWeight: "600"}}>
              Code
            </a>
              <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
