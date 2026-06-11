import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Planets} from "./components/Planets/Planets";
import {GlassSvgDefs} from "./components/Shared/GlassSvgDefs";

function AppContent() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [planetSelectorOpen, setPlanetSelectorOpen] = useState(false);

  const togglePlanetSelector = () => setPlanetSelectorOpen((open) => !open);
  const closePlanetSelector = () => setPlanetSelectorOpen(false);

  return (
    <>
      <GlassSvgDefs />
      {isMainPage && (
        <Planets
          selectorOpen={planetSelectorOpen}
          closeSelector={closePlanetSelector}
        />
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
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
