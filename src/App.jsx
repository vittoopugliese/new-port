import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Misc/Header";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
