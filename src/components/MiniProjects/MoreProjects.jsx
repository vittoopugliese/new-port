import React, {useEffect} from "react";
import {MiniProjectBox} from "./MiniProjectBox";
import "./moreProjects.css";
import { SectionTitle } from './../Shared/SectionTitle';
import { moreProjects } from '../../utils/constants';

export const MoreProjects = () => {
  return (
    <div>
      <section className="more-projects-section">
      <SectionTitle iconClass='fa-solid fa-network-wired' 
      title='More Projects' />

        <div className="more-projects-container">
          {moreProjects.map(project => <MiniProjectBox project={project} key={project.title} />)}
        </div>
      </section>
    </div>
  );
};
