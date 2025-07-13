import React from "react";
import Style from "./components.module.css";

const SubmitButton = ({ id, func, title }) => {
  return (
    <button onClick={func} id={id} className={`${Style.button} ${Style.submitButton}`}>
      {title}
    </button>
  );
};
export default SubmitButton;
