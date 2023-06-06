import React from "react";

export const ProjectBox = ({project}) => {
  return (
    <div className="project-box">
      <div
        className="project-image-container"
        onClick={() => { window.open(project.link); }}>
        <img src={project.image} alt="project-image" draggable={false} />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="icons-buttons-container">

          <div className="project-techno-icons">
            {project.tech.map((t, i) => {
              return (
                <img src={`./vectors/${t}.svg`} loading="lazy" draggable={false}
                alt={t} key={t + i} />
              );
            })}
          </div>

          <div className="project-buttons">
            <button className="button-live">
              <a href={project.link} target="_blank" 
              style={{fontWeight: "600"}}> View </a>
              
              <i className="fa-solid fa-turkish-lira-sign"></i>
            </button>
            <button className="button-live">
              <a href={project.link} target="_blank" 
              style={{fontWeight: "600"}}> Code </a>

              <i className="fa-brands fa-github"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
