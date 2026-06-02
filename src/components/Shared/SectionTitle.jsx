export const SectionTitle = ({iconClass, title, aperture, subtitle}) => {
  return (
    <div className="section-title" data-aos="fade-right">
      <div>
        {!aperture && <i className={iconClass}></i>}
        {aperture && <img className="react" src="./vectors/aperture.svg" />}
        <div className="section-title__heading">
          <h2>{title}</h2>
          {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};
