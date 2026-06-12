const PlanetButton = ({texture, system, onClick, isActive}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isActive ? "active" : ""}
      aria-pressed={isActive}
      aria-label={`Select ${system} planetary system`}>
      <img src={texture} alt="" className="texture-thumb" aria-hidden="true" />
      <span>{system}</span>
    </button>
  );
};

export default PlanetButton;
