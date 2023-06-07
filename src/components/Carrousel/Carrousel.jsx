import React, {useState} from "react";
import {TechImages} from "./TechImages";
import "./carrousel.css";
import { SectionTitle } from "../Shared/SectionTitle";

export const Carrousel = () => {
  const [techHovered, setTechHovered] = useState();
  const [techSelected, setTechSelected] = useState('Hover a tech to see a description...');
  const [opacity, setOpacity] = useState(0);

  const techslogos = [
    {name: "HTML", desc: "Hypertext markup language, it gives structure to the page. This works with 'Tags'."},
    {name: "CSS", desc: "Responsible for giving Style to the page. This works whit classes."},
    {name: "JavaScript", desc: "Programming language that allows you to put logic onto web pages."},
    {name: "Git", desc: "Source code management tool. It's used to control the versions of the page."},
    {name: "TypeScript", desc: "Superset of JavaScript that adds static typing to the language."},
    {name: "Angular", desc: "Front-end framework by Google. Used for building dynamic and scalable apps."},
    {name: "RxJS", desc: "Reactive programming library. It allows working with asynchronous data streams."},
    {name: "React", desc: "JavaScript library by Meta that's used for building user interfaces."},
    {name: "Tailwind", desc: "CSS framework that works with classes."},
    {name: "Firebase", desc: "Application development software. Databases, user registration & more."},
    {name: "NodeJS", desc: "A JS runtime environment that allows JS to be run on the server-side."},
  ];

  function handleTechSelected(e){
    setTechSelected(e)
  }

  return (
    <section className="carousel">
      <SectionTitle iconClass={'fa-solid fa-microchip'} 
      title={'Technologies I use'}/>

      <p className="tech-desc" style={{opacity:opacity ? '1' : '0'}} > {techSelected} </p>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            {techslogos.map((t, i) => {
              return <TechImages tech={t} key={i * i} techHover={e => setOpacity(e)}
              techSelected={handleTechSelected} />;
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
