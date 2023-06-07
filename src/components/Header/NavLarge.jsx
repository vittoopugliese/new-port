import {NavLink} from "./NavLink";

export const NavLarge = () => {
  return (
    <nav>
      <NavLink text='/ ' path="/" iconClass="fa-sharp fa-solid fa-house" />
      <NavLink text='/ &nbsp;about' path="/about" iconClass="fa-solid fa-address-card" />
      <NavLink text='/ &nbsp;contact' path="/contact" iconClass="fa-sharp fa-solid fa-envelope" />
  </nav>
  );
};
