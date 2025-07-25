import React from "react";
import Style from "./DashboardLayout.module.css";
import { Appscard } from "../../Components/CardOne";
import AppViewHeader from "../../Features/Dashboard/AppView/AppViewHeader";
import AppsViewContainer from "../../Features/Dashboard/AppView/AppsViewContainer";
import { TitleThree } from "../../Components/TitleHead";
function AppsLayout() {
  
  return (
    <>
      <div className={Style.adminLayoutContainer}>
        <div className={Style.appLayoutHeader}>
          <AppViewHeader></AppViewHeader>
        </div>

        <div className={Style.appsContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "flex-end",
            }}
          >
            <TitleThree title={"Your Apps"}></TitleThree>
          </div>
          <AppsViewContainer></AppsViewContainer>
        </div>
      </div>
    </>
  );
}

export default AppsLayout;
