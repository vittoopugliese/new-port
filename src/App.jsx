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

function AppContent() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const {isMobile} = useMedia();
  const [planetSelectorOpen, setPlanetSelectorOpen] = useState(false);
  const [mobileFull, setMobileFull] = useState(false);

  const togglePlanetSelector = () => setPlanetSelectorOpen((open) => !open);
  const closePlanetSelector = () => setPlanetSelectorOpen(false);
  const toggleMobileFull = () => {
    setPlanetSelectorOpen(false);
    setMobileFull((open) => !open);
  };

  useEffect(() => {
    setPlanetSelectorOpen(false);
    if (!isMobile) setMobileFull(false);
  }, [isMobile]);

  useEffect(() => {
    setPlanetSelectorOpen(false);
  }, [location.pathname]);

  return (
    <>
      <GlassSvgDefs />
      {isMainPage && (
        <Suspense fallback={null}>
          <Planets
            compact={isMobile && !mobileFull}
            selectorOpen={planetSelectorOpen}
            closeSelector={closePlanetSelector}
          />
        </Suspense>
      )}
      <div className="appContainer">
        <Header />
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
