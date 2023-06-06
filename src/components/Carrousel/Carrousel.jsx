import React, { useState } from "react";
import { TechImages } from "./TechImages";
import './carrousel.css'

export const Carrousel = () => {

  const [techHovered, setTechHovered] = useState()

  const techslogos = [
    'HTML', 'CSS', 'JavaScript', 'Git',
    'TypeScript', 'Angular', 'RxJS', 
    'Firebase', 'React', 'NodeJS',
    'Tailwind'
  ]

  return (
    <section className="carousel">
      <div className="projects-section-title">
        <i className="fa-solid fa-microchip"></i>
        <h2>Technologies I use</h2>
      </div>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            {techslogos.map((t, i) => {
              return <TechImages tech={t} key={i * i}/>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
