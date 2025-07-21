import React from "react";
import Style from "./AppView.module.css";
import { Appscard } from "../../../Components/CardOne";

function AppsViewContainer() {
  return (
    <div className={Style.appsViewContainer}>
      <Appscard></Appscard>
      <Appscard></Appscard>
      <Appscard></Appscard>
      <Appscard></Appscard>
      <Appscard></Appscard>
      <Appscard></Appscard>
      <Appscard></Appscard>
    </div>
  );
}

export default AppsViewContainer;
