import {NavLink as RouterNavLink} from "react-router-dom";

export const NavLink = ({text, path, iconClass, setNavOpen}) => {
  return (
    <RouterNavLink
      to={path}
      end
      onClick={() => setNavOpen?.(false)}
      className={({isActive}) => isActive ? "nav-item nav-item-br" : "nav-item"}
      style={{fontWeight: "600"}}>
      <i className={iconClass} aria-hidden="true" />
      <p>{text}</p>
    </RouterNavLink>
  );
};
