import {useEffect, useState} from "react";

export function useLightTheme() {
  const body = document.getElementsByTagName("body")[0];
  const [isLightMode, setisLightMode] = useState(body.classList.contains("lightmode"))

  function toggleLightmode() {
    setisLightMode(prev => !prev)
    body.classList.toggle("lightmode");
    localStorage.setItem("lightmode", JSON.stringify(isLightMode));
  }

  const isLightSaved = JSON.parse(localStorage.getItem("lightmode"));

  useEffect(() => {
    if (isLightSaved) {
      body.classList.add("lightmode");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {body, toggleLightmode, isLightMode};
}
