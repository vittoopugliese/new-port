import {useEffect, useState} from "react";
import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {MapControlsModal} from "./MapControlsModal";
import {useMedia} from "./../../hooks/useMedia";
import {useNavigate, useLocation} from "react-router-dom";
import "./header.css";

export const Header = () => {
  const {isMobile} = useMedia();
  const [controlsOpen, setControlsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : undefined} style={{height: isMobile ? "70px" : "64px"}}>
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
