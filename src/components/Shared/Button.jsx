import {useNavigate} from "react-router-dom";
import "./shared.css";

export const Button = ({text, path, iconClass, onClick}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (path) navigate(path);
  };

  return (
    <button type="button" className="button" onClick={handleClick}>
      <span className="button__label">{text}</span>
      {iconClass && <i className={`button__icon ${iconClass}`} aria-hidden="true" />}
    </button>
  );
};
