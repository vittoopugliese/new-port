import React, {useState} from "react";

export const TechImages = ({tech}) => {
  const [techHovered, setTechHovered] = useState();

  function handleImageHover(e) {
    const selectedElement = e.target;
    const techUrl = selectedElement.src.split("/")[4];
    const techName = techUrl.split(".")[0];
    setTechHovered(techName);

    showTooltip();
  }

  function showTooltip() {}

  return (
    <div className="tech-slide-image">
      <img
        className="carrousel-image"
        draggable="false"
        src={`./tech-logos/${tech}.webp`}
        onMouseEnter={(e) => handleImageHover(e)}
        onMouseLeave={(e) => setTechHovered(null)}
        // style={{scale: techHovered == tech ? "1.2" : "1"}}
      />
      <p style={{opacity: techHovered == tech ? "1" : "-0"}}>
        {tech}
      </p>
    </div>
  );
};
