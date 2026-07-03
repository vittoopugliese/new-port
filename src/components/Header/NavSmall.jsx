import {useEffect, useState} from "react";
import {NavLink} from "./NavLink";

export const NavSmall = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("#htmlTag");
    if (!html) return;

    html.style.overflow = navOpen ? "hidden" : "auto";

    return () => {
      html.style.overflow = "auto";
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
          className="navTogglerIcon fa-solid fa-bars"
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(true)}
        />

        <div className={`items-container ${navOpen ? "open" : ""}`}>
          <button
            type="button"
            className="closeNavIcon fa-solid fa-arrow-right"
            aria-label="Close navigation menu"
            onClick={() => setNavOpen(false)}
          />

          <NavLink setNavOpen={setNavOpen} text="/ &nbsp;home" path="/" iconClass="fa-sharp fa-solid fa-house" />
          <NavLink setNavOpen={setNavOpen} text="/ &nbsp;about" path="/about" iconClass="fa-solid fa-address-card" />
        </div>
      </div>
    </>
  );
};
