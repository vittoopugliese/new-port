import {useEffect, useState} from "react";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {SocialCard} from "./../components/Shared/SocialCard";
import { ThreeDee } from "../components/Shared/ThreeDee";

const socials = [
  {
    name: "LinkedIn",
    color: "#466cf4",
    link: "https://www.linkedin.com/in/vittoopugliese/",
  },
  {name: "GitHub", color: "#d5d5d5", link: "https://github.com/vittoopugliese"},
  {
    name: "Twitter",
    color: "#549ef9",
    link: "https://twitter.com/vittoopugliese",
  },
  {
    name: "SoundCloud",
    color: "#f09c34",
    link: "https://soundcloud.com/vittoopugliese",
  },
];

export const ContactPage = () => {
  const [gradient, setGradient] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);

    setInterval(() => {
      setGradient((prev) => prev + 1);
    }, 1250);

    return () => {
      clearInterval();
    };
  }, []);

  function gradientStyle(n = 1) {
    if (n > 7) setGradient(1);

    return {
      background: `var(--gradient${n})`,
    };
  }

  return (
    <div data-aos="fade-up" className="contactContainer">

      {/* <SectionTitle title={window.innerWidth > 400 ? "Welcome to My World" : "My World"} iconClass={"fa-solid fa-earth-americas"} /> */}
      <ThreeDee />

      {/* <SectionTitle iconClass="fa-solid fa-at" title="Social Media" /> */}
      <div className="socials-container">
        {socials.map((social) => {
          return <SocialCard social={social} key={social.name} />;
        })}
      </div>

      {/* <SectionTitle iconClass="fa-solid fa-address-book" title="Contact Me" /> */}
      {/* <hr style={{margin:'3em 0em', opacity:'0.054'}}/>
      <a href="mailto:vittoopugliesedev@gmail.com">
        <button className="email-button" style={gradientStyle(gradient)}>
          <i className="fa-solid fa-envelope-open-text"></i>
          <p>Send me an Email</p>
        </button>
      </a>  */}

    </div>
  );
};
