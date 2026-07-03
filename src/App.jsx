import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {lazy, Suspense, useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {GlassSvgDefs} from "./components/Shared/GlassSvgDefs";
import {useMedia} from "./hooks/useMedia";

// Code-split the 3D hero: three.js + gsap only load when the scene mounts,
// keeping them out of the main bundle
const Planets = lazy(() =>
  import("./components/Planets/Planets").then((m) => ({default: m.Planets})),
);
const PlanetsMobile = lazy(() =>
  import("./components/Planets/PlanetsMobile").then((m) => ({default: m.PlanetsMobile})),
);

function AppContent() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const {isMobile} = useMedia();
  const [planetSelectorOpen, setPlanetSelectorOpen] = useState(false);
  const [mobileFull, setMobileFull] = useState(false);

  const togglePlanetSelector = () => setPlanetSelectorOpen((open) => !open);
  const closePlanetSelector = () => setPlanetSelectorOpen(false);
  const toggleMobileFull = () => {
    setMobileFull((open) => {
      if (open) setPlanetSelectorOpen(false);
      return !open;
    });
  };

  useEffect(() => {
    if (!isMobile) setMobileFull(false);
  }, [isMobile]);

  return (
    <>
      <GlassSvgDefs />
      {isMainPage && (
        <Suspense fallback={null}>
          {isMobile && !mobileFull ? (
            <PlanetsMobile />
          ) : (
            <Planets
              selectorOpen={planetSelectorOpen}
              closeSelector={closePlanetSelector}
            />
          )}
        </Suspense>
      )}
      <div className="appContainer" data-aos="fade-up">
        <Header data-aos="fade-down" />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                planetSelectorOpen={planetSelectorOpen}
                onTogglePlanets={togglePlanetSelector}
                mobileFull={mobileFull}
                onToggleMobileFull={toggleMobileFull}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    AOS.init({
      once: true,
      disable: prefersReducedMotion,
    });
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
