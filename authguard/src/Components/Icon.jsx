import React from "react";
import Style from "./components.module.css";
function Icon({ src, alt, id, className, onClick }) {
  return (
    <img id={id} src={src} alt={alt} className={`${Style.icon} className`} onClick={oncancel}></img>
  );
}

export default Icon;