import { useEffect } from "react";
import { createPortal } from "react-dom";
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
    title: "Choose a destination",
    detail:
      'Choose a world from the destination dock to travel there. "Planets" opens the full collection of systems and effects.',
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Space events",
    detail:
      "Open Planets to toggle the comet, galactic background, meteors, and other cosmic effects.",
  },
  {
    icon: "fa-solid fa-crosshairs",
    title: "Discover the moons",
    detail: 'Select a moon marker or open "Explore moons" to follow a satellite. Recenter returns you to the planet.',
  },
  {
    icon: "fa-solid fa-circle-notch",
    title: "Set your own pace",
    detail: "Pause the motion to take a closer look, or turn on Orbits to reveal the paths around each world. Camera controls remain available while paused.",
  },
];

export const MapControlsModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="map-controls-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-controls-title">
      <div className="map-controls-modal" onClick={(event) => event.stopPropagation()}>
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
    </div>,
    document.body,
  );
};
