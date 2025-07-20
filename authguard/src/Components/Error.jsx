import React from "react";
import Style from "./components.module.css";

function ErrorTag({ id, content }) {
  return <p className={Style.errotag} id={id}>{content}</p>;
}

export default ErrorTag;
