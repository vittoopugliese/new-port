import {planets} from "../../utils/constants";
import {destinations, getMoons} from "./observatoryData";
import {usePrefersReducedMotion} from "../../hooks/usePrefersReducedMotion";

export function Observatory({selected, paused, onPause, orbits, onOrbits, onReset, focusedMoon, onFocus, disabled}) {
  const destination = destinations[selected.system];
  const moons = getMoons(selected);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="observatory" style={{"--planet-accent": destination.color}}>
      <section className="observatory-info" aria-label="Space observatory">
        <div className="observatory-kicker"><span /> PERSONAL OBSERVATORY <span className="observatory-index">{String(planets.indexOf(selected) + 1).padStart(2, "0")} / 06</span></div>
        <p className="observatory-eyebrow">{destination.eyebrow}</p>
        <h2>{selected.system}</h2>
        <p className="observatory-description">{destination.description}</p>
        <div className="observatory-controls" role="group" aria-label="Orbit controls">
          <button type="button" onClick={onPause} aria-pressed={paused || reducedMotion} disabled={disabled || reducedMotion} aria-label={reducedMotion ? "Reduced motion enabled" : paused ? "Resume space motion" : "Pause space motion"}><i className={`fa-solid fa-${paused && !reducedMotion ? "play" : "pause"}`} aria-hidden="true" /><span>{reducedMotion ? "Still" : paused ? "Resume" : "Pause"}</span></button>
          <button type="button" onClick={onOrbits} aria-pressed={orbits} disabled={disabled}><i className="fa-solid fa-circle-notch" aria-hidden="true" /><span>Orbits</span></button>
          <button type="button" onClick={onReset} disabled={disabled}><i className="fa-solid fa-crosshairs" aria-hidden="true" /><span>Recenter</span></button>
        </div>
        <details className="observatory-moons" key={selected.system}>
          <summary>Explore {moons.length} moons <span>+</span></summary>
          <div className="moon-list">
            {moons.map(moon => <button key={moon.name} type="button" disabled={disabled} aria-pressed={focusedMoon === moon.name} onClick={() => onFocus(moon.name)}>{moon.name}<span aria-hidden="true">↗</span></button>)}
          </div>
        </details>
        {focusedMoon && <div className="moon-discovery" role="status"><span>NOW OBSERVING</span><strong>{focusedMoon}</strong><p>A natural satellite of {selected.system}.</p><button type="button" onClick={onReset}>Back to the planet <span aria-hidden="true">↗</span></button></div>}
      </section>

      <div className="observatory-footnote"><span className="observatory-live-dot" /> INTERACTIVE SPACE <span className="observatory-scale">Artistic view · not to scale</span></div>
      <p className="observatory-hint">Drag to orbit <span>·</span> Scroll to explore <span>·</span> Select a moon</p>
    </div>
  );
}
