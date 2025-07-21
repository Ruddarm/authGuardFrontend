import React from "react";
import Style from "./AdminView.module.css";
import GraphContainers from "../../../Components/GraphContainers";
import LineChart from "../../../Components/Chart";

function AdminGraph({ title,children }) {
  return (
    <div className={Style.loginGraphContainer}>
      <GraphContainers title={title}>{children}</GraphContainers>
    </div>
  );
}
export default AdminGraph;
