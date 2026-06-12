import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Button} from "../Shared/Button";
import {usePrefersReducedMotion} from "../../hooks/usePrefersReducedMotion";
import {useMedia} from "../../hooks/useMedia";
import "./profile.css";
import "./profile-glass.css";

const scrollToContent = () => window.scrollTo({top: window.innerHeight * 0.8, behavior: "smooth"});

const COLLAPSE_MS = 380;
const SWAP_MS = 260;
const ROLE_AUTO_MS = 3_000;
const INTRO_HOLD_MS = 10_000;
const SCENE_MOVE_EVENT = "portfolio-scene-move";

const ROLE_TAGS = [
  "Product Engineer",
  "Front-end Developer",
  "Neverending Learner",
  "Techno Enthusiast",
  "Mobile Developer",
  "React Native Dev",
  "Web Developer",
  "AI tools enthusiast",
  "Full-stack Tinkerer",
  "UI/UX Craftsman",
  "Pixel Perfectionist",
  "AI-powered Builder",
  "Graduated",
  "Monorepo Wrangler",
  "TypeScript Believer",
  "Coffee Converter",
  "Problem Solver",
];

const pickDifferentIndex = (current, length) => {
  if (length <= 1) return current;
  let next = current;
  while (next === current) next = Math.floor(Math.random() * length);
  return next;
};

export const ProfileGlass = ({planetSelectorOpen, onTogglePlanets, mobileFull, onToggleMobileFull}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const {isMobile} = useMedia();
  const [isIntroActive, setIsIntroActive] = useState(() => !prefersReducedMotion && !isMobile);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const animTimerRef = useRef(null);
  const swapTimerRef = useRef(null);
  const introTimerRef = useRef(null);
  const autoSwapTimeoutRef = useRef(null);
  const isSwappingRef = useRef(false);
  const cardRef = useRef(null);
  const prevWidthRef = useRef(null);
  const widthCleanupRef = useRef(null);

  const dismissIntro = useCallback(() => {
    if (introTimerRef.current) clearTimeout(introTimerRef.current);
    setIsIntroActive(false);
  }, []);

  useEffect(() => {
    if (isMobile || !isIntroActive) return;

    let dismissed = false;
    const onDismissIntro = () => {
      if (dismissed) return;
      dismissed = true;
      dismissIntro();
    };

    introTimerRef.current = setTimeout(onDismissIntro, INTRO_HOLD_MS);
    window.addEventListener(SCENE_MOVE_EVENT, onDismissIntro);

    return () => {
      if (introTimerRef.current) clearTimeout(introTimerRef.current);
      window.removeEventListener(SCENE_MOVE_EVENT, onDismissIntro);
    };
  }, [dismissIntro, isIntroActive, isMobile]);

  const runCollapseAnimation = useCallback((nextMinimized) => {
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    setIsAnimating(true);
    setIsMinimized(nextMinimized);
    animTimerRef.current = setTimeout(() => setIsAnimating(false), COLLAPSE_MS);
  }, []);

  const clearAutoSwap = useCallback(() => {
    if (autoSwapTimeoutRef.current) {
      clearTimeout(autoSwapTimeoutRef.current);
      autoSwapTimeoutRef.current = null;
    }
  }, []);

  const performRoleSwap = useCallback(
    (afterSwap) => {
      if (isSwappingRef.current) {
        afterSwap?.();
        return;
      }
      isSwappingRef.current = true;
      setIsSwapping(true);
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      swapTimerRef.current = setTimeout(() => {
        if (cardRef.current) prevWidthRef.current = cardRef.current.offsetWidth;
        setRoleIndex((current) => pickDifferentIndex(current, ROLE_TAGS.length));
        isSwappingRef.current = false;
        setIsSwapping(false);
        afterSwap?.();
      }, SWAP_MS);
    },
    [],
  );

  const scheduleAutoSwap = useCallback(() => {
    clearAutoSwap();
    if (prefersReducedMotion || isMinimized || planetSelectorOpen) return;
    autoSwapTimeoutRef.current = setTimeout(() => {
      performRoleSwap(scheduleAutoSwap);
    }, ROLE_AUTO_MS);
  }, [clearAutoSwap, isMinimized, performRoleSwap, planetSelectorOpen, prefersReducedMotion]);

  useEffect(() => {
    scheduleAutoSwap();
    return clearAutoSwap;
  }, [scheduleAutoSwap, clearAutoSwap]);

  useEffect(
    () => () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      clearAutoSwap();
      if (widthCleanupRef.current) widthCleanupRef.current();
    },
    [clearAutoSwap],
  );

  const handleRoleSwap = (event) => {
    event.stopPropagation();
    clearAutoSwap();
    performRoleSwap(scheduleAutoSwap);
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
    dismissIntro();
    runCollapseAnimation(true);
  };

  const handleMaximizeIntro = (event) => {
    event.stopPropagation();
    if (prefersReducedMotion) return;
    if (planetSelectorOpen) onTogglePlanets();
    if (isMinimized) runCollapseAnimation(false);
    setIsIntroActive(true);
  };

  const handleRestoreKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRestore();
    }
  };

  const handleRestore = () => {
    if (!isMinimized) return;
    runCollapseAnimation(false);
  };

  const showMaximize = !isMobile && !isIntroActive && !isMinimized && !planetSelectorOpen;

  return (
    <div className="profile-container">
      {planetSelectorOpen && (
        <button
          type="button"
          className="profile-restore-pill"
          onClick={onTogglePlanets}
          aria-label="Close planet selector and show profile">
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      )}

      <div
        className={["glass-card", "profile-data", isMobile && "mobile-static", isIntroActive && "intro-active", isMinimized && "minimized", isAnimating && "is-animating", planetSelectorOpen && "planets-hidden"].filter(Boolean).join(" ")}
        ref={cardRef} onWheel={handleWheel} onClick={isMinimized ? handleRestore : undefined}
        onKeyDown={isMinimized ? handleRestoreKeyDown : undefined}
        role={isMinimized ? "button" : undefined} tabIndex={isMinimized ? 0 : undefined}
        aria-label={isMinimized ? "Expand profile card" : undefined}
        aria-expanded={isMinimized ? false : undefined}>
        <div className="glass-distortion" aria-hidden="true" />
        <div className="glass-tint" aria-hidden="true" />
        <div className="glass-shine" aria-hidden="true" />

        {!isMobile && (
          <div className="profile-window-controls">
            {showMaximize && (
              <button
                type="button"
                className="profile-maximize"
                onClick={handleMaximizeIntro}
                aria-label="Center and enlarge profile card"
                tabIndex={0}>
                <i className="fa-solid fa-maximize" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              className="profile-minimize"
              onClick={handleMinimize}
              aria-label="Minimize profile card"
              tabIndex={isMinimized ? -1 : 0}>
              <i className="fa-solid fa-window-minimize" aria-hidden="true" />
            </button>
          </div>
        )}

        <div className="glass-content">
          <div className="profile-compact" aria-hidden={!isMinimized}>
            <i style={{fontSize: "1em", opacity: "0.72", position: "relative", top: "1px", left: "0"}} className="fa-solid fa-chevron-up" aria-hidden="true" />
            <span>Vittorio</span>
          </div>

          <div className="profile-expanded" aria-hidden={isMinimized} inert={isMinimized || undefined}>
            <div className="profile-header">
              <h1>Vittorio...</h1>
              <button type="button" className={`profile-role ${isSwapping ? "is-swapping" : ""}`} onClick={handleRoleSwap} title="Click to shuffle"
                aria-label={`Role: ${ROLE_TAGS[roleIndex]}. Click to shuffle.`}>
                <span className="profile-role-label">
                  {ROLE_TAGS[roleIndex]}
                  {!prefersReducedMotion && !isMinimized && (
                    <span className="profile-role-shine" key={roleIndex} aria-hidden="true">
                      {ROLE_TAGS[roleIndex]}
                    </span>
                  )}
                </span>
              </button>
            </div>
            <p className="profile-tagline">Web & Mobile shipping Android, iOS and Web.</p>
            <div className="profile-buttons">
              <a
                href="./Vittorio-Pugliese-Resume.pdf"
                download
                className="button profile-resume-link">
                <i className="button__icon fa-solid fa-file-pdf" aria-hidden="true" />
                <span className="button__label">Resume</span>
              </a>
              {isMobile && !mobileFull ? (
                <Button iconClass="fa-solid fa-expand" text="Full" onClick={onToggleMobileFull} />
              ) : (
                <Button
                  iconClass="fa-solid fa-globe"
                  text={planetSelectorOpen ? "Close" : "Planets"}
                  onClick={onTogglePlanets}
                />
              )}
              {isMobile && mobileFull ? (
                <Button iconClass="fa-solid fa-compress" text="Load Less" onClick={onToggleMobileFull} />
              ) : (
                <Button text="Scroll" iconClass="fa-solid fa-arrow-down" onClick={scrollToContent} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
