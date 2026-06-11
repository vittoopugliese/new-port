const PlanetButton = ({texture, system, onClick, isActive, moonName}) => {
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      <img src={texture} alt={system} className="texture-thumb" />
        <span>{system}</span> 
    </button>
  );
};

export default PlanetButton;