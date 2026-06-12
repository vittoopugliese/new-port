import {useEffect, useState} from "react";

const BREAKPOINT = 888;

export function useMedia() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < BREAKPOINT);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {isMobile};
}
