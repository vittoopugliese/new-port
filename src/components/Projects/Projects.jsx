import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'

const projects = [
  {
    title: "My Therapist",
    description: "Talk about your problems with an openAi's GPT-based therapist trained with experienced psycologist data.",
    image: "./project-images/image1.png",
    tech: ['react', 'javascript', 'openai'],
    link: 'https://mytherapist.vittoriop.dev'
  },
  {
    title: "NFTorio",
    description: "Watch, listen and buy my list of images & music NFT's. Built-in music player with vanilla JS.",
    image: "./project-images/image2.png",
    tech: ['html', 'css', 'javascript'],
    link: 'https://nftorio.vittoriop.dev'
  },
];

export const Projects = () => {
  return (
    <section className="projects-section-container">
      <div className="projects-section-title">
        <i className="fa-solid fa-layer-group"></i>
        <h2>Main Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectBox project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};
