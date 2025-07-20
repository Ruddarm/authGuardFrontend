import React from "react";
import Style from "./components.module.css";

const SubmitButton = ({ id, handelClick, title }) => {
  return (
    <button onClick={handelClick} id={id} className={`${Style.button} ${Style.submitButton}`}>
      {title}
    </button>
  );
};
export default SubmitButton;
