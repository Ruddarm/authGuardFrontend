import React from "react";
import Style from "./components.module.css";

function InputBox({ id, placeHolder, type }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeHolder}
      className={Style.inputFeild}
    ></input>
  );
}
export default InputBox;
