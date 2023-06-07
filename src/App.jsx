import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {OnPageLoad} from "./components/Shared/OnPageLoad";

function App() {
  const [pageLoading, setpageLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setpageLoading(false);
    }, 1250);
  }, []);

  return (
    <>
      {pageLoading ? (
        <OnPageLoad />
      ) : (
        <BrowserRouter>
          <Header data-aos="fade-down" />
          <div className="appContainer" data-aos="fade-up">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
