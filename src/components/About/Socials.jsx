import {socials} from "../../utils/constants";
import {SocialCard} from "../Shared/SocialCard";

const Socials = () => {
  return (
    <nav className="socials-container" aria-label="Social links">
      {socials.map((social) => (
        <SocialCard social={social} key={social.name} />
      ))}
    </nav>
  );
};

export default Socials;
