import {ProjectTechIcons} from "./ProjectTechIcons";
import {ProjectImageCarousel} from "./ProjectImageCarousel";
import {ImageViewer, useImageViewer} from "../Shared/ImageViewer";
import {useMedia} from "./../../hooks/useMedia";

export const ProjectBox = ({project}) => {
  const {isMobile} = useMedia();
  const {isOpen, initialIndex, openViewer, setIsOpen} = useImageViewer();

  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const viewerImages = images.map((uri) => ({
    uri,
    alt: project.title,
  }));

  const handleOpenLink = () => {
    if (project.link) window.open(project.link);
  };

  const stopClick = (e) => e.stopPropagation();

  return (
    <>
      <div
        className="project-box"
        data-aos="fade-up"
        onClick={handleOpenLink}
      >
        <div className="project-image-container" onClick={stopClick}>
          {project.images?.length ? (
            <ProjectImageCarousel
              images={project.images}
              title={project.title}
              onImageClick={openViewer}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              draggable={false}
              onClick={() => openViewer(0)}
            />
          )}
        </div>

        <div className="project-info">
          {!isMobile ? (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <h3>{project.title}</h3>
              <ProjectTechIcons project={project} />
            </div>
          ) : (
            <div>
              <h3>{project.title}</h3>
            </div>
          )}

          <p>{project.description}</p>

          {isMobile && <ProjectTechIcons project={project} />}
          {!isMobile && <hr />}
        </div>
      </div>

      <ImageViewer
        images={viewerImages}
        initialIndex={initialIndex}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
};
