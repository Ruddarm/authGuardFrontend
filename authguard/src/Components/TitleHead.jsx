import React from "react";
import Style from "./components.module.css";

function TitleTwo({ id, className, title }) {
  return (
    <>
      <h2 id={id} className={className}>
        {title}
      </h2>
    </>
  );
}
function TitleThree({ id, style, className, title }) {
  return (
    <h2 id={id} style={style} className={`${Style.titleThree} ${className}`}>
      {title}
    </h2>
  );
}

function SubTitle({ id, style, className, title, children }) {
  return (
    <p id={id} style={style} className={Style.subTitle}>
      {title}
      {children}
    </p>
  );
}
export { TitleTwo, TitleThree, SubTitle };
