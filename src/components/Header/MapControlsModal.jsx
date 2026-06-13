import { useEffect } from "react";
import "./map-controls-modal.css";

const CONTROLS = [
  {
    icon: "fa-solid fa-arrows-rotate",
    label: "Left click + drag",
    detail: "Orbit the camera around the planet.",
  },
  {
    icon: "fa-solid fa-hand",
    label: "Right click + drag",
    detail: "Pan across the scene.",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    label: "Scroll wheel",
    detail: "Zoom in and out.",
  },
];

const FEATURES = [
  {
    icon: "fa-solid fa-globe",
    title: "Planet selector",
    detail:
      'Click "Planets" on the profile card to swap the planetary system — each one changes the scene texture, moons, and rings.',
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Space events",
    detail:
      "When the planet selector is open, toggle cosmic effects like meteors, a sun, black holes, neutron stars, and galaxies.",
  },
];

export const MapControlsModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="map-controls-backdrop" onClick={onClose} role="presentation">
      <div
        className="map-controls-modal glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="map-controls-title"
        onClick={(event) => event.stopPropagation()}>
        <div className="glass-distortion" aria-hidden="true" />
        <div className="glass-tint" aria-hidden="true" />
        <div className="glass-shine" aria-hidden="true" />

        <div className="map-controls-content">
          <header className="map-controls-header">
            <h2 id="map-controls-title">Scene controls</h2>
            <button
              type="button"
              className="map-controls-close"
              onClick={onClose}
              aria-label="Close controls guide">
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          </header>

          <section className="map-controls-section">
            <h3>Navigation</h3>
            <ul className="map-controls-list">
              {CONTROLS.map(({ icon, label, detail }) => (
                <li key={label}>
                  <span className="map-controls-icon" aria-hidden="true">
                    <i className={icon} />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="map-controls-section">
            <h3>Interactive panels</h3>
            <ul className="map-controls-list map-controls-list--features">
              {FEATURES.map(({ icon, title, detail }) => (
                <li key={title}>
                  <span className="map-controls-icon map-controls-icon--accent" aria-hidden="true">
                    <i className={icon} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
