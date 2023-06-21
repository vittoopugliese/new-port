import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {useMedia} from "./../../hooks/useMedia";
import {useLightTheme} from "../../hooks/useLightTheme";
import "./header.css";
import { useNavigate, useLocation } from "react-router-dom";


export const Header = () => {
  const {isMobile} = useMedia(620);
  const {toggleLightmode, isLightMode} = useLightTheme();

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header style={{height: !isMobile ? "74px" : "90px"}}>
      {isMobile ? <NavLarge /> : <NavSmall />}

      {(!isMobile && location.pathname !== '/') && 
        <img src="../avatar.png" onClick={() => navigate('/')}
          alt="my personal image"
          draggable={false}
          className="nav-small-image"
        />}

      <div className="theme-toggler">
        {!isLightMode ? (
          <img
            src="../vectors/sun.png"
            style={{width: "35px"}}
            onClick={toggleLightmode}
          />
        ) : (
          <img src="../vectors/moon.svg" onClick={toggleLightmode} />
        )}
      </div>
    </header>
  );
};
