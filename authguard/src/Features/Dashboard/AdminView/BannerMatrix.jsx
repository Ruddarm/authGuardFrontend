import React from "react";
import Style from "./AdminView.module.css";
import Card from "../../../Components/CardOne";
import Icon from "../../../Components/Icon";
import { SubTitle, TitleThree } from "../../../Components/TitleHead";
function BannerMatrix() {
  return (
    <>
      <div className={Style.bannerMatrixContainer}>
        <Card>
          <>
            <Matrix title={"Users"} value={800}></Matrix>
            <Matrix title={"New users  (7 days)"} value={80}></Matrix>
          </>
        </Card>
        <Card>
          <>
            <Matrix title={"Login Request (7 days) "} value={500}></Matrix>
            <Matrix title={"Refresh Request (7 days) "} value={1500}></Matrix>
          </>
        </Card>{" "}
        <Card>
          <>
            <Matrix title={"Request Failuer (7 days)"} value={80}></Matrix>
          </>
        </Card>
      </div>
    </>
  );
}
function Matrix({ title, value, icon }) {
  return (
    <div className={Style.matrixCardItemContainer}>
      <SubTitle title={title}></SubTitle>
      <div className={Style.matrixCardInnerContainer}>
        <Icon id={Style.matrixIcon} src={"../../public/user.png"}></Icon>
        <TitleThree title={value}></TitleThree>
      </div>
    </div>
  );
}
export default BannerMatrix;
