import React from "react";
import Style from "./components.module.css";

function InputLabel({ id, name, forHtml, text }) {
  return (
    <label id={id} htmlFor={forHtml} className={Style.subTitle}>
      {text}
    </label>
  );
}

export default InputLabel;