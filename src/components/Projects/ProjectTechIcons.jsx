export const ProjectTechIcons = ({project, miniBox}) => {
  return (
    <div className="project-techno-icons">
      {project.tech.map((t, i) => {
        let techName = `./vectors/${t}.svg`
        if (t == "next") techName = "./tech-logos/Next.png"
        if (t == "tailwind") techName = "./tech-logos/Tailwind.webp"
        return (
          <img src={techName} loading="lazy" draggable={false}
            alt={t} className={t} key={t + i}
            style={{
              position: "relative",
              fontSize: t == "angular" ? "1.4em" : "1em",
              bottom: t == "angular" ? "1px" : "0px",
              width: miniBox ? "0.8em" : "1em",
            }}
          />
        );
      })}
    </div>
  );
};
