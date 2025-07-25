import React from "react";
import Style from "./components.module.css";

function InputBox({
  id,
  placeHolder,
  type,
  error,
  touched,
  value,
  handelChange,
  handelBlur,
  name,
  isReadOnly = false,
}) {
  // console.log(name + " is" + value);

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      readOnly={isReadOnly}
      onChange={(e) => {
        handelChange(e);
      }}
      onBlur={(e) => {
        handelBlur(e);
      }}
      className={`${Style.inputFeild} ${
        touched ? (error ? Style.warnBorder : Style.successBorder) : ""
      }`}
    ></input>
  );
}
export default InputBox;
