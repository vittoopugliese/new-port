import "./shared.css";

export const SocialCard = ({social}) => {
  const accentStyle = {"--social-accent": social.color};

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      className="social-card-link"
      aria-label={`Visit ${social.name}`}>
      <div className="social-glass">
        <div className="glass-distortion" aria-hidden="true" />
        <div className="glass-tint" aria-hidden="true" />
        <div className="glass-shine" aria-hidden="true" />
        <div className="social-glass__content">
          <i
            className={`social-glass__icon fa-brands fa-${social.name.toLowerCase()}`}
            style={accentStyle}
            aria-hidden="true"
          />
          <span className="social-glass__label" style={accentStyle}>
            {social.name}
          </span>
        </div>
      </div>
    </a>
  );
};
