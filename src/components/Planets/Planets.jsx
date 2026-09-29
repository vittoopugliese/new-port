import {useEffect, useRef, useState} from "react";
import {planets} from "../../utils/constants";
import {createPlanetScene} from "./planetScene";
import {PlanetSelector} from "./PlanetSelector";
import {LoadingSpinner} from "../Shared/LoadingSpinner";
import "./planets.css";

export const Planets = ({compact = false, selectorOpen = false, closeSelector}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [selected, setSelected] = useState(planets[0]);
  const [effects, setEffects] = useState({});
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setStatus("loading");
    try {
      sceneRef.current = createPlanetScene({canvas: canvasRef.current, container: containerRef.current, compact, onStatus: setStatus});
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

  return (
    <div className="three-container" ref={containerRef} data-scene-status={status}>
      {status === "loading" && <div className="planet-loader" role="status" aria-label="Loading planet"><LoadingSpinner size={4} /></div>}
      {(status === "unavailable" || status === "texture-error") && (
        <div className="planet-fallback" role="status">
          <p>{status === "unavailable" ? "3D is unavailable. You can still explore the portfolio." : "Some planet textures could not load."}</p>
          <button type="button" onClick={() => setAttempt(value => value + 1)}>Retry 3D</button>
        </div>
      )}
      <canvas key={attempt} ref={canvasRef} className={`webgl ${status === "loading" || status === "unavailable" ? "canvas-loading" : ""}`} aria-hidden="true" />
      {!compact && <PlanetSelector open={selectorOpen} onClose={closeSelector} selected={selected.system} onSelect={setSelected} activeEffects={effects} onToggleEffect={id => setEffects(previous => ({...previous, [id]: !previous[id]}))} />}
    </div>
  );
};
