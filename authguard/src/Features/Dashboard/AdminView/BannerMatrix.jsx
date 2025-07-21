import React from "react";
import Style from "./AdminView.module.css";
import Card from "../../../Components/CardOne";
function BannerMatrix() {
  return (
    <>
      <div className={Style.bannerMatrixContainer}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}
export default BannerMatrix;
