
import { ProjectTechIcons } from './../Projects/ProjectTechIcons';

export const MiniProjectBox = ({project}) => {
  const handleOpen = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      className="project-card"
      data-aos={project.aos}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} project`}>
      <div className="card-header">
        <h3>{project.title}</h3>
        <i className="openlinkicon fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
      </div>
      <p>{project.description}</p>
      <div className="card-icons">
        <ProjectTechIcons project={project} miniBox={true}/>
      </div>
    </div>
  );
};
