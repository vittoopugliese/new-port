import { useEffect, useState} from "react";

export function useMedia() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", handleToggle);

    function handleToggle() {
      window.innerWidth < 768 ? setIsMobile(false) : setIsMobile(true);
    }

    handleToggle()

    return () => {
      window.removeEventListener("resize", handleToggle);
    };
  }, []);

  return {isMobile};
}
