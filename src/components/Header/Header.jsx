import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {useMedia} from "./../../hooks/useMedia";
import {useNavigate, useLocation} from "react-router-dom";
import "./header.css";

export const Header = () => {
  const {isMobile} = useMedia();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header style={{height: !isMobile ? "74px" : "90px"}}>
      {isMobile ? <NavLarge /> : <NavSmall />}

      {!isMobile && location.pathname !== "/" && (
        <img
          src="../avatar.png"
          onClick={() => navigate("/")}
          alt="my personal image"
          draggable={false}
          className="nav-small-image"
        />
      )}
    </header>
  );
};
