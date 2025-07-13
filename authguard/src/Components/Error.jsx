import React from "react";
import Style from "./components.module.css";

function PTAG({ id, content }) {
  return <p id={id}>{content}</p>;
}

export default PTAG;
