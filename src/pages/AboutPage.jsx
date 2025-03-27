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
        <b className="b">Vittorio</b> is a Front-end and Mobile Developer based in Buenos Aires, Argentina. <br />
        Passionate about technology from a young age, he has been exploring the world of 
        computers and music since childhood.<br /><br />
        In June 2020, he began his journey into web development, 
        focusing on <b style={{color: "#fdf251"}}>JavaScript</b>, <b style={{color: "#4797f1"}}>TypeScript</b> and general web knowledge rapidly developing his programming skills.<br /><br />

        Currently, he is leading mobile application development at {" "}
        <b onClick={openLink} className="b" style={{cursor: "pointer"}}>Kubrik Digital</b>, 
        working on a project for a Canadian client using <b style={{color: "#525df8"}}>React Native</b> with the 
        <b style={{color: "#f5e2ba"}}> Expo framework </b>. Simultaneously, he contributes to the development of their
        internal ERP tool, <b>TimelogBook©</b>, 
        using <b style={{color: "#f84646"}}>Angular</b>.<br /><br />

        To further his professional growth, Vittorio enrolled at <b>UTN (Universidad Tecnológica Nacional) </b> 
        in 2024, pursuing a degree in Computer Systems to deepen his theoretical knowledge and complement his
        practical experience.
      </p>
      <Experiences />
      <Certificates />
      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "500px"}}></div>
    </section>
  );
};
