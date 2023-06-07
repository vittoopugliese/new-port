import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {useMedia} from "./../../hooks/useMedia";
import {useLightTheme} from "../../hooks/useLightTheme";
import "./header.css";
import {useEffect, useState} from "react";

export const Header = () => {
  const {isMobile} = useMedia(620);
  const {toggleLightmode, isLightMode} = useLightTheme();
  const heightCondition = window.innerHeight < 100

  return (
    <header style={{height: !isMobile ? "74px" : "90px"}}>
      {isMobile ? <NavLarge /> : <NavSmall />}

      {!isMobile && heightCondition &&(
        <img
          src="../avatar.png"
          alt="my personal image!"
          width={"174px"}
          draggable={false}
          className="nav-small-image"
        />
      )}

      <div className="theme-toggler">
        {isLightMode ? (
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
