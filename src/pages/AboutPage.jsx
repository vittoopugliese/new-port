import React, {useEffect} from "react";
import "../components/About/about.css";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {Certificates} from "./../components/About/Certificates";
import Socials from "../components/About/Socials";
import {Experiences} from "./../components/About/Experiences";

export const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="about-section-container">
      <div style={{paddingTop: 60}}></div>
      <SectionTitle aperture={true} title="About me" />
      <p>
        <b className="b">Vittorio</b> is a Front-end and Mobile Developer based in Buenos Aires, Argentina. <br />
        Passionate about technology from a young age, he has been exploring the world of 
        computers and music since childhood. He began his journey into web development and general programming in June 2020,
        focusing on <b>JavaScript</b>, <b>TypeScript</b> and web knowledge rapidly developing his programming skills.<br /><br />

        Currently, he is working as a Product Engineer at <b className="b">Wollen Labs</b>, where he is responsible for the development of the newest mobile and web college-user-based marketplace called <b className="b">CampusHub</b>. <br /><br />

        Previously, he was leading a mobile application development at {" "}
        <b className="b">Kubrik Digital</b>, 
        working on a project for a Canadian client using <b>React Native</b> with the 
        <b className="b"> Expo framework </b>. Simultaneously, he contributed to the development of their most important AI project, <b className="b">Conversa</b>, and 
        its internal ERP tool, <b className="b">TimelogBook</b>, 
        using <b>Angular</b>.<br /><br />

        To further his professional growth, Vittorio enrolled at <b>UTN (Universidad Tecnológica Nacional) </b> 
        in 2024, pursuing a degree in Computer Systems to deepen his theoretical knowledge and complement his
        practical experience, and now in 2026, he is graduated and working as a Product Engineer at <b className="b">Wollen Labs</b>.
      </p>
      <Experiences />
      <Certificates />
      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "500px"}}></div>
    </section>
  );
};
