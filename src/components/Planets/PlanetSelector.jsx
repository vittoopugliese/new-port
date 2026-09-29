import {useEffect, useRef} from "react";
import {planets} from "../../utils/constants";
import PlanetButton from "./PlanetButton";
import EffectsPanel from "./EffectsPanel";

export function PlanetSelector({open, onClose, selected, onSelect, activeEffects, onToggleEffect}) {
  const panelRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.querySelector('[aria-controls="planet-selector"]');
    panelRef.current.querySelector("[aria-pressed='true']")?.focus({preventScroll: true});
    const onKeyDown = event => {
      if (event.key === "Escape") closeRef.current?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      requestAnimationFrame(() => {
        if (previousFocus?.isConnected) previousFocus.focus({preventScroll: true});
      });
    };
  }, [open]);

  if (!open) return null;
  return (
    <section className="planet-panels" id="planet-selector" aria-label="Planet selector" ref={panelRef}>
      <div className="selector-heading"><span>Explore a planetary system</span><button type="button" aria-label="Close planet selector" onClick={onClose}>×</button></div>
      <div className="texture-selector open" role="group" aria-label="Planetary systems">
        {planets.map(planet => <PlanetButton key={planet.system} texture={planet.texture} system={planet.system} isActive={selected === planet.system} onClick={() => onSelect(planet)} />)}
      </div>
      <EffectsPanel open activeEffects={activeEffects} onToggle={onToggleEffect} />
    </section>
  );
}
