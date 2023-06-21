import {useEffect, useState} from "react";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {SocialCard} from "./../components/Shared/SocialCard";

const socials = [
  { name: "LinkedIn", color: "#466cf4", link: "https://www.linkedin.com/in/vittoopugliese/", },
  { name: "GitHub", color: "#d5d5d5", link: "https://github.com/vittoopugliese" },
  { name: "Twitter", color: "#549ef9", link: "https://twitter.com/vittoopugliese", },
  { name: "SoundCloud", color: "#f09c34", link: "https://soundcloud.com/vittoopugliese", },
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
    <div data-aos='fade-up' style={{minHeight:'840px'}}>
      <SectionTitle iconClass="fa-solid fa-address-book" title="Contact Me" />

      <a href="mailto:vittoopugliesedev@gmail.com">
        <button className="email-button" style={gradientStyle(gradient)}>
          <i className="fa-solid fa-envelope-open-text"></i>
          <p>Send me an Email</p>
        </button>
      </a>
      <SectionTitle iconClass="fa-solid fa-at" title="Social Media" />
      <div className="socials-container">
        {socials.map((social) => {
          return <SocialCard social={social} key={social.name} />;
        })}
      </div>
    </div>
  );
};
