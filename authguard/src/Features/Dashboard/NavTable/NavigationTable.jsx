import React from "react";
import Style from "./NavigationTable.module.css";
import { TabButton } from "../../../Components/SubmitButton";
import Icon from "../../../Components/Icon";
import { useNavigate } from "react-router-dom";

function NavigationTable() {
  const navigate = useNavigate();
  function onClickHandel(url) {
    navigate(url);
  }
  return (
    <>
      <div className={Style.navContainer}>
        <div className={Style.navHead}></div>
        <div className={Style.tabContainer}>
          <TabButtonIcon
            handelClick={()=>{onClickHandel("../admin")}}
            title={"Admin"}
            src={"../../public/home.png"}
          ></TabButtonIcon>
          <TabButtonIcon
          handelClick={()=>{onClickHandel("../apps")}}
            title={"Apps"}
            src={"../../public/application.png"}
          ></TabButtonIcon>
          <TabButtonIcon
            handelClick={()=>{onClickHandel("../profile")}}
            title={"Profile"}
            src={"../../public/user.png"}
          ></TabButtonIcon>
        </div>
      </div>
    </>
  );
}

function TabButtonIcon({ handelClick, title, src }) {
  return (
    <TabButton title={title} handelClick={handelClick}>
      <div className={Style.navIconContainer}>
        <Icon src={src}></Icon>
      </div>
    </TabButton>
  );
}
export default NavigationTable;
