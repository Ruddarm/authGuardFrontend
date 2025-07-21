import React from "react";
import Style from "./components.module.css";
import { TitleThree } from "./TitleHead";

function GraphContainers({ title, children }) {
  return (
    <div className={Style.graphContainer}>
      <div className={Style.graphContainerHeader}>
        <TitleThree title={title}></TitleThree>
      </div>
      <div>{children}</div>
    </div>
  );
}
export default GraphContainers;
