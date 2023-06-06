import React from "react";

export const MiniProjectBox = ({project}) => {
  return (
    <div
      className="project-card"
      onClick={() => {
        window.open(project.link);
      }}>
      <div className="card-header">
        <h3>{project.title}</h3>
        <i className="openlinkicon fa-solid fa-arrow-up-right-from-square"></i>
      </div>
      <p>{project.description}</p>
      <div className="card-icons">
        {project.tech.map((t, i) => {
          return (
            <img src={`./vectors/${t}.svg`}
              loading="lazy" draggable={false}
              alt={t} key={t + i}
              style={{fontSize: t == "angular" ? "1.3em" : "1em"}}
            />
          );
        })}
      </div>
    </div>
  );
};
