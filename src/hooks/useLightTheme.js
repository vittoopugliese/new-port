import {useEffect, useState} from "react";
// refactor

export function useLightTheme() {
  const body = document.getElementsByTagName("body")[0];
  const [isLightMode, setisLightMode] = useState(false);

  function toggleLightmode() {
    setisLightMode((prev) => !prev);
    localStorage.setItem("lightmode", JSON.stringify(isLightMode));
    body.classList.toggle("lightmode");
  }

  useEffect(() => {
    const isLightSaved = JSON.parse(localStorage.getItem("lightmode"));
    if (isLightSaved) {
      body.classList.add("lightmode");
      setisLightMode(isLightSaved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lightmode", JSON.stringify(isLightMode));
  }, [isLightMode]);

  return {body, toggleLightmode, isLightMode};
}
