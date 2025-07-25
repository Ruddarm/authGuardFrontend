import React from "react";
import Style from "./components.module.css";
function Card({children}) {
  return (
    <>
      <div className={Style.cardOneContainer}>
        {children}
      </div>
    </>
  );
}

function Appscard({children,handelClick}) {
  return (
    <>
      <div onClick={()=>{handelClick()}} className={Style.appsCardContainer}>
        {children}
      </div>
    </>
  );
}
export default Card;

export {Appscard}