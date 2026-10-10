import {useEffect, useRef, useState} from "react";
import {planets} from "../../utils/constants";
import {createPlanetScene} from "./planetScene";
import {PlanetSelector} from "./PlanetSelector";
import {Observatory} from "./Observatory";
import {getMoons} from "./observatoryData";
import {LoadingSpinner} from "../Shared/LoadingSpinner";
import "./planets.css";

export const Planets = ({compact = false, selectorOpen = false, closeSelector}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const markers = useRef(new Map());
  const [selected, setSelected] = useState(planets[0]);
  const [effects, setEffects] = useState({galaxy: true, comet: true});
  const [paused, setPaused] = useState(false);
  const [orbits, setOrbits] = useState(false);
  const [focusedMoon, setFocusedMoon] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setStatus("loading");
    try {
      sceneRef.current = createPlanetScene({canvas: canvasRef.current, container: containerRef.current, compact, onStatus: setStatus, onFocus: setFocusedMoon, markers: markers.current});
    } catch {
      setStatus("unavailable");
    }
    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, [compact, attempt]);

  useEffect(() => {
    sceneRef.current?.setPlanet(compact ? planets[0] : selected);
  }, [compact, attempt, selected]);

  useEffect(() => {
    sceneRef.current?.setEffects(effects);
  }, [compact, attempt, effects]);

  useEffect(() => { sceneRef.current?.setPaused(paused); }, [compact, attempt, paused]);
  useEffect(() => { sceneRef.current?.setOrbits(orbits); }, [compact, attempt, orbits]);

  const selectPlanet = planet => {
    setSelected(planet);
    if (planet.system === selected.system) sceneRef.current?.resetView();
    window.dispatchEvent(new CustomEvent("portfolio-scene-move"));
  };
  const focusMoon = name => sceneRef.current?.focusMoon(name);

  return (
    <div className={`three-container${compact ? " scene-compact" : " scene-full"}`} ref={containerRef} data-scene-status={status} data-motion-paused={paused}>
      {status === "loading" && <div className="planet-loader" role="status" aria-label="Loading planet"><LoadingSpinner size={4} /></div>}
      {(status === "unavailable" || status === "texture-error") && (
        <div className="planet-fallback" role="status">
          <p>{status === "unavailable" ? "3D is unavailable. You can still explore the portfolio." : "Some planet textures could not load."}</p>
          <button type="button" onClick={() => setAttempt(value => value + 1)}>Retry 3D</button>
        </div>
      )}
      <canvas key={attempt} ref={canvasRef} className={`webgl ${status === "unavailable" ? "canvas-loading" : ""}`} aria-hidden="true" />
      {!compact && <>
        <div className="moon-markers" aria-label="Moons in view" role="group" hidden={selectorOpen || status !== "ready"}>
          {getMoons(selected).map(moon => <button key={`${selected.system}-${moon.name}`} ref={element => { if (element) markers.current.set(moon.name, element); else markers.current.delete(moon.name); }} className="moon-marker" type="button" onClick={() => focusMoon(moon.name)} aria-label={`Observe ${moon.name}`} aria-pressed={focusedMoon === moon.name}><span className="moon-marker-ring" /><span className="moon-marker-label">{moon.name}</span></button>)}
        </div>
        <Observatory selected={selected} paused={paused} onPause={() => setPaused(value => !value)} orbits={orbits} onOrbits={() => setOrbits(value => !value)} onReset={() => sceneRef.current?.resetView()} focusedMoon={focusedMoon} onFocus={focusMoon} disabled={status === "unavailable" || status === "loading"} />
        <PlanetSelector open={selectorOpen} onClose={closeSelector} selected={selected.system} onSelect={selectPlanet} activeEffects={effects} onToggleEffect={id => setEffects(previous => ({...previous, [id]: !previous[id]}))} />
      </>}
    </div>
  );
};
