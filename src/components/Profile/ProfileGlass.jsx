import {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "../Shared/Button";
import "./profile.css";
import "./profile-glass.css";

const scrollToContent = () =>
  window.scrollTo({top: window.innerHeight * 0.8, behavior: "smooth"});

const COLLAPSE_MS = 380;

export const ProfileGlass = ({planetSelectorOpen, onTogglePlanets}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animTimerRef = useRef(null);

  const runCollapseAnimation = useCallback((nextMinimized) => {
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    setIsAnimating(true);
    setIsMinimized(nextMinimized);
    animTimerRef.current = setTimeout(() => setIsAnimating(false), COLLAPSE_MS);
  }, []);

  useEffect(
    () => () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    },
    [],
  );

  const handleWheel = (event) => {
    if (event.deltaY > 0 && window.scrollY < 50) scrollToContent();
  };

  const handleMinimize = (event) => {
    event.stopPropagation();
    if (planetSelectorOpen) onTogglePlanets();
    runCollapseAnimation(true);
  };

  const handleRestore = () => {
    if (!isMinimized) return;
    runCollapseAnimation(false);
  };

  return (
    <div className="profile-container">
      <svg className="glass-filter-defs" aria-hidden="true">
        <defs>
          <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="2"
              seed="2"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className={[
          "glass-card",
          "profile-data",
          isMinimized && "minimized",
          isAnimating && "is-animating",
        ]
          .filter(Boolean)
          .join(" ")}
        onWheel={handleWheel}
        onClick={isMinimized ? handleRestore : undefined}
        onKeyDown={
          isMinimized ? (e) => e.key === "Enter" && handleRestore() : undefined
        }
        role={isMinimized ? "button" : undefined}
        tabIndex={isMinimized ? 0 : undefined}
        aria-label={isMinimized ? "Expand profile card" : undefined}
        aria-expanded={!isMinimized}>
        <div className="glass-distortion" aria-hidden="true" />
        <div className="glass-tint" aria-hidden="true" />
        <div className="glass-shine" aria-hidden="true" />

        <button
          type="button"
          className="profile-minimize"
          onClick={handleMinimize}
          aria-label="Minimize profile card"
          tabIndex={isMinimized ? -1 : 0}>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </button>

        <div className="glass-content">
          <div className="profile-compact" aria-hidden={!isMinimized}>
            <i className="fa-solid fa-chevron-up" aria-hidden="true" />
            <span>Vittorio</span>
          </div>

          <div className="profile-expanded" aria-hidden={isMinimized}>
            <div className="profile-header">
              <h1>Vittorio...</h1>
              {/* <span className="profile-header-sep" aria-hidden="true">
                ,
              </span> */}
              <p>Product Engineer</p>
            </div>
            <p className="profile-tagline">
              Web & Mobile shipping Android, iOS and web.
            </p>
            <div className="profile-buttons">
              <a href="./Vittorio-Pugliese-Resume.pdf" download>
                <Button text="Resume" />
              </a>
              <Button
                text={planetSelectorOpen ? "Close" : "Planets"}
                onClick={onTogglePlanets}
              />
              <Button text="Scroll" onClick={scrollToContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
