import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Planets} from "./components/Planets/Planets";
import {PlanetsMobile} from "./components/Planets/PlanetsMobile";
import {GlassSvgDefs} from "./components/Shared/GlassSvgDefs";
import {useMedia} from "./hooks/useMedia";

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
        isMobile && !mobileFull ? (
          <PlanetsMobile />
        ) : (
          <Planets
            selectorOpen={planetSelectorOpen}
            closeSelector={closePlanetSelector}
          />
        )
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
