import React from "react";
import Style from "./DashboardLayout.module.css";
import Card, { Appscard } from "../../Components/CardOne";
import SubmitButton from "../../Components/SubmitButton";
function AppsLayout() {
  return (
    <>
      <div className={Style.adminLayoutContainer}>
        <div className={Style.appLayoutHeader}>
          <SubmitButton
            id={Style.createAppBtn}
            title={"Create Apps"}
          ></SubmitButton>
        </div>
        <div className={Style.appsContainer}>
          <Appscard></Appscard>
          <Appscard></Appscard>
          <Appscard></Appscard>
          <Appscard></Appscard>
          <Appscard></Appscard>
          <Appscard></Appscard>
          <Appscard></Appscard>
        </div>
      </div>
    </>
  );
}

export default AppsLayout;
