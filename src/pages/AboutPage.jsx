import React, {useEffect} from "react";
import "../components/About/about.css";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {Certificates} from "./../components/About/Certificates";
import Socials from "../components/About/Socials";
import {Experiences} from "./../components/About/Experiences";

export const AboutPage = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <section className="about-section-container">
      <div style={{paddingTop: 60}}></div>
      <SectionTitle aperture={true} title="About me" />
      <p>
        Im a Front-end and Mobile Developer based in Buenos Aires, Argentina.{" "}
        <br />
        Passionate about technology from a young age, I have been exploring the
        world of computers and music since childhood. I started web development
        and general programming in June 2020, focusing on <b>
          JavaScript
        </b>, <b>TypeScript</b>, and the web while building my skills along the
        way.
        <br />
        <br />
        Currently, I work as a Product Engineer at{" "}
        <a
          href="https://www.linkedin.com/company/meet-luno-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="b">
          {" "}
          Luno{" "}
        </a>
        , where I help build the newest mobile and web college-user-based
        marketplace, <b className="b">CampusHub</b>. <br />
        <br />
        Before that, I led mobile development at{" "}
        <b className="b">Kubrik Digital</b>, on a project for a Canadian client
        with <b>React Native</b> and the
        <b className="b"> Expo framework </b>. At the same time, I contributed
        to their main AI project, <b className="b">Conversa</b>, and the
        internal ERP tool, <b className="b">TimelogBook</b>, using{" "}
        <b>Angular</b>.<br />
        <br />
        To keep growing professionally, I enrolled at{" "}
        <b>UTN (Universidad Tecnológica Nacional) </b>
        in 2024 to study Computer Systems and strengthen my theoretical
        foundation alongside hands-on work. I graduated in 2026 and continue as
        a Product Engineer at{" "}
        <a
          href="https://www.linkedin.com/company/meet-luno-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="b">
          Luno
        </a>
        .
      </p>
      <Experiences />
      <Certificates />
      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "500px"}}></div>
    </section>
  );
};
