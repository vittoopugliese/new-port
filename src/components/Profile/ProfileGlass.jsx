import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Button} from "../Shared/Button";
import "./profile.css";
import "./profile-glass.css";

const scrollToContent = () =>
  window.scrollTo({top: window.innerHeight * 0.8, behavior: "smooth"});

const COLLAPSE_MS = 380;
const SWAP_MS = 260;

const ROLE_TAGS = [
  "Product Engineer",
  "Front-end Developer",
  "Neverending Learner",
  "Technologic Enthusiast",
  "Mobile Developer",
  "React Native Dev",
  "Full-stack Tinkerer",
  "UI/UX Craftsman",
  "Pixel Perfectionist",
  "AI-powered Builder",
  "Monorepo Wrangler",
  "TypeScript Believer",
  "Coffee to Code Converter",
  "Problem Solver",
];

const pickDifferentIndex = (current, length) => {
  if (length <= 1) return current;
  let next = current;
  while (next === current) next = Math.floor(Math.random() * length);
  return next;
};

export const ProfileGlass = ({planetSelectorOpen, onTogglePlanets}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const animTimerRef = useRef(null);
  const swapTimerRef = useRef(null);
  const cardRef = useRef(null);
  const prevWidthRef = useRef(null);
  const widthCleanupRef = useRef(null);

  const runCollapseAnimation = useCallback((nextMinimized) => {
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    setIsAnimating(true);
    setIsMinimized(nextMinimized);
    animTimerRef.current = setTimeout(() => setIsAnimating(false), COLLAPSE_MS);
  }, []);

  useEffect(
    () => () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      if (widthCleanupRef.current) widthCleanupRef.current();
    },
    [],
  );

  const handleRoleSwap = (event) => {
    event.stopPropagation();
    if (isSwapping) return;
    setIsSwapping(true);
    swapTimerRef.current = setTimeout(() => {
      if (cardRef.current) prevWidthRef.current = cardRef.current.offsetWidth;
      setRoleIndex((current) => pickDifferentIndex(current, ROLE_TAGS.length));
      setIsSwapping(false);
    }, SWAP_MS);
  };

  // Animate the card width (FLIP) when the role changes length — CSS can't
  // transition a content-driven `fit-content` width on its own.
  useLayoutEffect(() => {
    const el = cardRef.current;
    const prevWidth = prevWidthRef.current;
    if (!el || prevWidth == null) return;

    const nextWidth = el.offsetWidth;
    prevWidthRef.current = null;
    if (prevWidth === nextWidth) return;

    if (widthCleanupRef.current) widthCleanupRef.current();

    el.style.width = `${prevWidth}px`;
    void el.offsetWidth; // force reflow so the start width is committed
    el.style.width = `${nextWidth}px`;

    let fallback;
    const clear = () => {
      el.style.width = "";
      el.removeEventListener("transitionend", onEnd);
      clearTimeout(fallback);
      widthCleanupRef.current = null;
    };
    const onEnd = (e) => {
      if (e.propertyName === "width") clear();
    };
    el.addEventListener("transitionend", onEnd);
    fallback = setTimeout(clear, 600);
    widthCleanupRef.current = clear;
  }, [roleIndex]);

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
        ref={cardRef}
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
            <i style={{fontSize: "1em", opacity: "0.72", position: "relative", top: "1px", left: "0"}} className="fa-solid fa-chevron-up" aria-hidden="true" />
            <span>Vittorio</span>
          </div>

          <div className="profile-expanded" aria-hidden={isMinimized}>
            <div className="profile-header">
              <h1>Vittorio...</h1>
              <button type="button" className={`profile-role ${isSwapping ? "is-swapping" : ""}`} onClick={handleRoleSwap} title="Click to shuffle"
                aria-label={`Role: ${ROLE_TAGS[roleIndex]}. Click to shuffle.`}>
                {ROLE_TAGS[roleIndex]}
              </button>
            </div>
            <p className="profile-tagline">Web & Mobile shipping Android, iOS and Web.</p>
            <div className="profile-buttons">
              <a href="./Vittorio-Pugliese-Resume.pdf" download>
                <Button iconClass="fa-solid fa-file-pdf" text="Resume" />
              </a>
              <Button iconClass="fa-solid fa-globe"
                text={planetSelectorOpen ? "Close" : "Planets"}
                onClick={onTogglePlanets}
              />
              <Button text="Scroll" iconClass="fa-solid fa-arrow-down" onClick={scrollToContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
