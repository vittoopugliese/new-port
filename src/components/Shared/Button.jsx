import {useNavigate} from "react-router-dom";
import "./shared.css";

export const Button = ({text, path, iconClass, onClick, ...props}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (path) navigate(path);
  };

  return (
    <button type="button" className="button" onClick={handleClick} {...props}>
      {iconClass && <i style={{fontSize: "12px"}} className={`button__icon ${iconClass}`} aria-hidden="true" />}
      <span className="button__label">{text}</span>
    </button>
  );
};
