import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const body = document.getElementsByTagName("body")[0];

  function toggleLightmode() {
    body.classList.toggle("lightmode");
    const isLight = body.classList.contains("lightmode");
    localStorage.setItem("lightmode", isLight);
  }

  useEffect(() => {
    const isLightCondition = JSON.parse(localStorage.getItem("lightmode"));
    if (isLightCondition) {
      body.classList.add("lightmode");
    } else {
      body.classList.remove("lightmode");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate()
  const location = window.location.pathname
  function activeLink(link){
    return location == link ? "700" : "400"
  }

  return (
    <header>
      <nav>
        <div className="nav-item" onClick={() => navigate('/')} 
        style={{fontWeight: activeLink('/') }}>
          <i className="fa-sharp fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="nav-item" onClick={() => navigate('/about')} 
        style={{fontWeight: activeLink('/about') }}>
          <i className="fa-solid fa-address-card"></i>
          <p>About</p>
        </div>
        <div className="nav-item" onClick={() => navigate('/contact')} 
        style={{fontWeight: activeLink('/contact') }}>
          <i className="fa-sharp fa-solid fa-envelope"></i>
          <p>Contact</p>
        </div>
      </nav>

      <div className="theme-toggler">
        <i
          className="fa-sharp fa-solid fa-circle-half-stroke"
          onClick={toggleLightmode}></i>
      </div>
    </header>
  );
};
