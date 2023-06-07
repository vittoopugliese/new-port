import {useEffect} from "react";
import {SectionTitle} from "../components/Shared/SectionTitle";
import {SocialCard} from "./../components/Shared/SocialCard";

const socials = [
  {name:'GitHub' , color: '#466cf4', link: 'https://github.com/vittoopugliese'},
  {name:'LinkedIn' , color: '#d5d5d5', link: 'https://www.linkedin.com/in/vittoopugliese/'},
  {name:'Twitter' , color: '#549ef9', link: 'https://twitter.com/vittoopugliese'},
  {name:'SoundCloud' , color: '#f09c34', link: 'https://soundcloud.com/vittoopugliese'},
]

export const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionTitle iconClass="fa-solid fa-address-book" title="Contact Me" />

      <a href="mailto:vittoopugliesedev@gmail.com" target="_blank">
        <button className="email-button">
          <i className="fa-solid fa-envelope-open-text"></i>
          <p>Send me an Email</p>
        </button>
      </a>
      <SectionTitle iconClass="fa-solid fa-at" title="Social Media" />

      <div className="socials-container">
          {
            socials.map(social => {
              return <SocialCard social={social} key={social.name} />
            })
          }
      </div>
    </div>
  );
};
