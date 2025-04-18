const PlanetButton = ({texture, system, onClick, isActive, moonName}) => {
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      <img src={texture} alt={system} className="texture-thumb" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span>{system}</span> 
        <span>{moonName}</span>
      </div>
    </button>
  );
};

export default PlanetButton;