import React, {useEffect} from "react";
import "../components/About/about.css";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {Certificates} from "./../components/About/Certificates";
import Socials from "../components/About/Socials";
import {Experiences} from "./../components/About/Experiences";

function openLink() {
  window.open(
    "https://www.linkedin.com/company/kubrik-digital/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ar"
  );
}

export const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="about-section-container">
      <SectionTitle aperture={true} title="About me" />
      <p>
        <b className="b">Vittorio</b> is a software developer based in Buenos
        Aires, Argentina. Since very young I am passionate about computers and music and in
        middle of 2020 I started learning Web Development.
        <br />
        Currently working at{" "}
        <b onClick={openLink} className="b" style={{cursor: "pointer"}}>
          Kubrik Digital{" "}
        </b>{" "}
        on TimelogBook© with <b style={{color: "#f84646"}}> Angular </b> and{" "}
        successfully developing a client app with
        <b style={{color: "#559ffa"}}> React Native </b> using the{" "}
        <b style={{color: "#f6e9cd"}}>Expo framework</b> by my own.
        <br />
        To improve my skills and developer carreer, in 2024 I started University to get a degree in
        Computer Science at <b>UTN (Universidad Tecnológica Nacional)</b>.
      </p>
      <Experiences />
      <Certificates />
      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "500px"}}></div>
    </section>
  );
};
