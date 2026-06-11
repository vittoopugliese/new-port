import { SPACE_EFFECTS } from "../../utils/constants";

export default function EffectsPanel({ open, activeEffects, onToggle, extraMoonsAvailable }) {
  return (
    <div className={`effects-selector ${open ? "open" : ""}`}>
      <div className="glass-distortion" />
      <div className="glass-tint" />
      <div className="glass-shine" />
      {SPACE_EFFECTS.map(({ id, label, icon }) => {
        const disabled = id === "extraMoons" && !extraMoonsAvailable;
        return (
          <button
            key={id}
            type="button"
            className={[
              activeEffects[id] && "active",
              disabled && "disabled",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => !disabled && onToggle(id)}
            disabled={disabled}
            title={disabled ? "No extra moons for this planet" : label}
            aria-pressed={activeEffects[id] ?? false}
            aria-label={label}>
            <i className={icon} aria-hidden="true" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
