import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'
import { SectionTitle } from './../Shared/SectionTitle';
import { projects } from './../../utils/constants';

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
