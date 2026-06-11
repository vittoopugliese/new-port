import { SPACE_EFFECTS } from "../../utils/constants";

export default function EffectsPanel({ open, activeEffects, onToggle }) {
  return (
    <div className={`effects-selector ${open ? "open" : ""}`}>
      <div className="glass-distortion" />
      <div className="glass-tint" />
      <div className="glass-shine" />
      {SPACE_EFFECTS.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={activeEffects[id] ? "active" : ""}
          onClick={() => onToggle(id)}
          title={label}
          aria-pressed={activeEffects[id] ?? false}
          aria-label={label}>
          <i className={icon} aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
