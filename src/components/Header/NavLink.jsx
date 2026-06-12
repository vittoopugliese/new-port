import {useLocation, useNavigate} from "react-router-dom";

export const NavLink = ({text, path, iconClass, setNavOpen}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleNavigate = () => {
    navigate(path);
    setNavOpen?.(false);
  };

  return (
    <button
      type="button"
      onClick={handleNavigate}
      className={isActive ? "nav-item nav-item-br" : "nav-item"}
      style={{fontWeight: "600"}}
      aria-current={isActive ? "page" : undefined}>
      <i className={iconClass} aria-hidden="true" />
      <p>{text}</p>
    </button>
  );
};
