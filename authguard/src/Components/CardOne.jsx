import React from "react";
import Style from "./components.module.css";
function Card() {
  return (
    <>
      <div className={Style.cardOneContainer}></div>
    </>
  );
}

function Appscard() {
  return (
    <>
      <div className={Style.appsCardContainer}></div>
    </>
  );
}
export default Card;

export {Appscard}