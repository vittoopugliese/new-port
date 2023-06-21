import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'
import { SectionTitle } from './../Shared/SectionTitle';

const projects = [
  {
    title: "GPTherapist",
    description: "Talk about your problems with an OpenAi's GPT-based therapist trained with experienced psycologist data. App interactions costs credits, initially there're 1000 free.",
    image: "./project-images/image1.png",
    tech: ['react', 'javascript', 'openai'],
    link: 'https://gptherapist.vittoriop.dev'
  },
  {
    title: "NFTorio",
    description: "Digital market. Watch, listen and buy my personal list of images and music NFT's. Integrated Crypto payments. Includes a built-in music player made with vanilla JS.",
    image: "./project-images/image2.png",
    tech: ['html', 'css', 'javascript'],
    link: 'https://nftorio.vittoriop.dev'
  },
];

export const Projects = () => {
  return (
    <section className="projects-section-container">
      <SectionTitle iconClass='fa-solid fa-layer-group' 
      title='Main Projects' />

      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectBox project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};
