import React from "react";
import Style from "./AppView.module.css";
import { Appscard } from "../../../Components/CardOne";
import { useNavigate } from "react-router-dom";
function AppsViewContainer() {
  const navigate = useNavigate();
  function onClickHandel(url) {
    navigate(url);
  }
  return (
    <div className={Style.appsViewContainer}>
      <Appscard handelClick={()=>{onClickHandel("app/1234")}}></Appscard>
      <Appscard handelClick={()=>{onClickHandel("app/1234")}}></Appscard>
      <Appscard handelClick={()=>{onClickHandel("app/1234")}}></Appscard>
      <Appscard handelClick={()=>{onClickHandel("app/1234")}}></Appscard>
      <Appscard handelClick={()=>{onClickHandel("app/1234")}}></Appscard>
    </div>
  );
}

export default AppsViewContainer;
