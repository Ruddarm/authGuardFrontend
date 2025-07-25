import React from "react";
import Style from "./DashboardLayout.module.css";
import BannerMatrix from "../../Features/Dashboard/AdminView/BannerMatrix";
import { SubTitle, TitleThree } from "../../Components/TitleHead";
import Card from "../../Components/CardOne";
import InputBox from "../../Components/InputBox";
import InputLabel from "../../Components/InputLabel";
import GraphContainers from "../../Components/GraphContainers";
import Chart from "../../Components/Chart"
function AppViewLayout() {
  return (
    <div className={Style.AppViewLayoutContainer}>
      <div>
        <SubTitle title={"App Matrix"}></SubTitle>
      </div>
      <div>
        <BannerMatrix></BannerMatrix>
      </div>
      <div className={Style.appDetialContainer}>
        <div className={Style.infoContainer}>
          <InputLabel text={"App Name : "}></InputLabel>
          <InputBox
            handelChange={() => {}}
            value={"Demo app"}
            isReadOnly={true}
            id={Style.infoInput}
          ></InputBox>
        </div>
        <div className={Style.infoContainer}>
          <InputLabel text={"App Id : "}></InputLabel>
          <InputBox
            handelChange={() => {}}
            value={"12adgu31571c4"}
            isReadOnly={true}
            id={Style.infoInput}
          ></InputBox>
        </div>
        <div className={Style.infoContainer}>
          <InputLabel text={"Created At : "}></InputLabel>
          <InputBox
            handelChange={() => {}}
            value={"20/10/2002"}
            isReadOnly={true}
            id={Style.infoInput}
          ></InputBox>
        </div>
        <div className={Style.infoContainer}>
          <InputLabel text={"API key : "}></InputLabel>
          <InputBox
            handelChange={() => {}}
            value={"20/10/2002"}
            isReadOnly={true}
            id={Style.infoInput}
          ></InputBox>
        </div>
      </div>
      <GraphContainers  title={"Login reqest"}>
        <Chart></Chart>
      </GraphContainers>
      <GraphContainers title={"User"}>
        <Chart chartype="bar"></Chart>
      </GraphContainers>
    </div>
  );
}

export default AppViewLayout;
