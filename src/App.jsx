import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Planets} from "./components/Planets/Planets";

function AppContent() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <>
      {isMainPage && <Planets />}
      <div className="appContainer" data-aos="fade-up">
        <Header data-aos="fade-down" />
        <Routes>
          <Route path="/" element={<MainPage />} />
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
