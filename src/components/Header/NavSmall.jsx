import {useEffect, useState} from "react";
import {NavLink} from "./NavLink";

export const NavSmall = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) return;
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    const trigger = document.activeElement;
    const menu = document.getElementById("mobile-navigation");
    const handleKey = (event) => {
      if (event.key === "Escape") setNavOpen(false);
      if (event.key === "Tab") {
        const items = menu.querySelectorAll("button, a");
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    html.style.overflow = "hidden";
    menu.querySelector("button")?.focus();
    window.addEventListener("keydown", handleKey);

    return () => {
      html.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      if (trigger?.isConnected) trigger.focus();
    };
  }, [navOpen]);

  return (
    <>
      {navOpen && (
        <button
          type="button"
          className="nav-small-background"
          aria-label="Close navigation menu"
          onClick={() => setNavOpen(false)}
        />
      )}

      <div>
        <button
          type="button"
          className="navTogglerIcon"
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          aria-controls="mobile-navigation"
          onClick={() => setNavOpen(true)}>
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>

        <div id="mobile-navigation" className={`items-container ${navOpen ? "open" : ""}`} inert={navOpen ? undefined : ""} aria-hidden={!navOpen}>
          <button
            type="button"
            className="closeNavIcon"
            aria-label="Close navigation menu"
            onClick={() => setNavOpen(false)}>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>

          <NavLink setNavOpen={setNavOpen} text="/ &nbsp;home" path="/" iconClass="fa-sharp fa-solid fa-house" />
          <NavLink setNavOpen={setNavOpen} text="/ &nbsp;about" path="/about" iconClass="fa-solid fa-address-card" />
        </div>
      </div>
    </>
  );
};
