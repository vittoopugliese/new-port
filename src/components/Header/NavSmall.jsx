import {useEffect, useState} from "react";
import {NavLink} from "./NavLink";

export const NavSmall = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('#htmlTag')

    if(navOpen){
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = 'auto'
    }
  }, [navOpen])
  

  return (
    <>
    {navOpen && <div className="nav-small-background" onClick={() => setNavOpen(false)}></div>}
    
    <div>
      <i className="fa-solid fa-bars navTogglerIcon"
        onClick={() => setNavOpen(true)}></i>

      <div className="items-container"
        style={{left: navOpen ? "-20px" : "-260px"}}>

        <i className="fa-solid fa-arrow-right closeNavIcon"
          onClick={() => setNavOpen(false)}></i>

        <NavLink setNavOpen={setNavOpen} text="/ &nbsp;home" path="/" iconClass="fa-sharp fa-solid fa-house" />
        <NavLink setNavOpen={setNavOpen} text="/ &nbsp;about" path="/about" iconClass="fa-solid fa-address-card" />
        {/* <NavLink setNavOpen={setNavOpen} text="/ &nbsp;contact" path="/contact" iconClass="fa-sharp fa-solid fa-envelope" /> */}
      </div>
    </div>
    </>
  );
};
