import {useState} from "react";
import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {MapControlsModal} from "./MapControlsModal";
import {useMedia} from "./../../hooks/useMedia";
import {useNavigate, useLocation} from "react-router-dom";
import "./header.css";

export const Header = () => {
  const {isMobile} = useMedia();
  const [controlsOpen, setControlsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header style={{height: isMobile ? "90px" : "74px"}}>
      {isMobile ? <NavSmall /> : <NavLarge />}

      {!isMobile && isHome && (
        <>
          <button
            type="button"
            className="nav-header-action"
            onClick={() => setControlsOpen(true)}
            aria-label="Open scene controls guide">
            <i className="fa-solid fa-gear" aria-hidden="true" />
          </button>
          <MapControlsModal open={controlsOpen} onClose={() => setControlsOpen(false)} />
        </>
      )}

      {!isMobile && !isHome && (
        <img
          src="/avatar.png"
          onClick={() => navigate("/")}
          alt="my personal image"
          draggable={false}
          className="nav-small-image"
        />
      )}
    </header>
  );
};
