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
      <div style={{paddingTop: 90}}></div>
      <SectionTitle aperture={true} title="About me" />
      <p>
        Im a Front-end and Mobile Developer based in Buenos Aires, Argentina,
        coding since June 2020 — focused on <b>JavaScript</b>,{" "}
        <b>TypeScript</b> and everything web & mobile.
        <br />
        <br />
        Currently a Product Engineer at{" "}
        <a
          href="https://www.linkedin.com/company/meet-luno-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="b">
          Luno
        </a>{" "}
        (Wollen Labs), building <b className="b">CampusHub</b> — a college
        marketplace — simultaneously for <b>Android</b>, <b>iOS</b> and{" "}
        <b>Web</b> from a single monorepo: a <b>Next.js</b> web app, a{" "}
        <b>React Native (Expo)</b> app and a <b>Hono + tRPC</b> backend, plus{" "}
        <b className="b">OS</b>, our internal back-office. Shared components
        live in packages, reused and optimized per platform, with heavy AI
        usage to cut time-per-feature.
        <br />
        <br />
        Before that, I led mobile development at{" "}
        <b className="b">Kubrik Digital</b> with <b>React Native</b> and{" "}
        <b className="b">Expo</b>, while contributing to their AI product{" "}
        <b className="b">Conversa</b> and the internal ERP{" "}
        <b className="b">TimelogBook</b> with <b>Angular</b>.
        <br />
        <br />
        In 2024 I enrolled at <b>UTN (Universidad Tecnológica Nacional)</b> to
        back hands-on experience with theory — graduated in 2026.
      </p>
      <Experiences />
      <Certificates />
      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "140px"}}></div>
    </section>
  );
};
