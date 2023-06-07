import React, {useEffect} from "react";
import {MiniProjectBox} from "./MiniProjectBox";
import "./moreProjects.css";
import { SectionTitle } from './../Shared/SectionTitle';

const miniProjects = [
  {
    title: "drumpads",
    description:
      "Assign a letter and a sound to a pad, then play the drums like an expert!",
    link: "https://drumpads.vittoriop.dev/",
    tech: ["html", "css", "javascript"],
    aos: 'fade-right'
  },
  {
    title: "TopCloud",
    description:
      "Music page where you can create an account and upload your own music.",
    link: "https://topcloud-9b8d4.web.app/",
    tech: ["angular", "typescript", "firebase"],
    aos: 'fade-left'
  },
  {
    title: "dsf representations",
    description: "Presentation card to a recognized salesman.",
    link: "https://dsfrepresentaciones.com/",
    tech: ["html", "css", "javascript"],
    aos: 'fade-right'
  },
  {
    title: "breaking bad quotes",
    description: "Simple page to get quotes from Breaking Bad's characters.",
    link: "https://breakingquotes.vittoriop.dev/",
    tech: ["react", "breakingbad"],
    aos: 'fade-left'
  },
  {
    title: "Previous Portfolio",
    description: "My own old portfolio page made with vanilla JS.",
    link: "https://vittoriop.dev/",
    tech: ["html", "css", "javascript"],
    aos: 'fade-right'
  },
];

export const MoreProjects = () => {
  return (
    <div>
      <section className="more-projects-section">
      <SectionTitle iconClass='fa-solid fa-network-wired' 
      title='More Projects' />

        <div className="more-projects-container">
          {miniProjects.map((project) => {
            return <MiniProjectBox project={project} key={project.title} />;
          })}
        </div>
      </section>
    </div>
  );
};
