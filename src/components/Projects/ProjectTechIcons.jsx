import React from "react";

export const ProjectTechIcons = ({project, miniBox}) => {
  return (
    <div className="project-techno-icons">
      {project.tech.map((t, i) => {
        return (
          <img
            src={`./vectors/${t}.svg`}
            loading="lazy"
            draggable={false}
            alt={t}
            key={t + i}
            style={{
              position: "relative",
              fontSize: t == "angular" ? "1.4em" : "1em",
              bottom: t == "angular" ? "1px" : "0px",
              width: miniBox ? "0.8em" : "1em",
            }}
            className={t}
          />
        );
      })}
    </div>
  );
};
