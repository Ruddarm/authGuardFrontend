import React from "react";
import Style from "./Header.module.css";
import Icon from "../../Components/Icon";
import { SubTitle, TitleThree } from "../../Components/TitleHead";

function Header() {
  return (
    <>
      <div className={`${Style.HeadContainer}`}>
        <div className={Style.headerLeftContainer}>
          <div className={Style.logoContainer}>
            <a id={Style.logoacnhor} href="/">
              <div className={Style.logoIconContainer}>
                <Icon src={"/public/authguardlogo.png"}></Icon>
              </div>
              <TitleThree title={"AuthGuard"}></TitleThree>
            </a>
          </div>
        </div>
        <div className={Style.headerRightContainer}>
          <ul className={Style.rightUlContainer}>
            <li className={Style.ulItem}>
              <a href="/features">
                <SubTitle title={"Features"}></SubTitle>
              </a>
            </li>
            <li className={Style.ulItem}>
              <a href="/documentation">
                <SubTitle title={"Documentation"}></SubTitle>
              </a>
            </li>
            <li className={Style.ulItem}>
              <a href="#pricing">
                <SubTitle title={"Pricing"}></SubTitle>
              </a>
            </li>
            <li className={Style.ulItem}>
              <a href="#support">
                <SubTitle title={"Support"}></SubTitle>
              </a>
            </li>
          </ul>
          <ul className={Style.rightLoginContainer}>
            <DashboardOption></DashboardOption>
            <LoginOption></LoginOption>
          </ul>
        </div>
      </div>
    </>
  );
}

function LoginOption() {
  return (
    <li id={Style.dashboardDropDown} className={Style.ulItem}>
      <div style={{ padding: "0 1.5rem" }}>
        <SubTitle title={"Login/Signup"}></SubTitle>
      </div>
      <ul className={Style.dashboardOptionUl}>
        <li className={Style.dashboardItem}>
          <a href="/user/login">
            <SubTitle id={Style.dashoardTitile} title={"User Login"}></SubTitle>
          </a>
        </li>
        <li className={Style.dashboardItem}>
          <a href="/client/login">
            <SubTitle
              id={Style.dashoardTitile}
              title={"Developer Login"}
            ></SubTitle>
          </a>
        </li>
      </ul>
    </li>
  );
}
function DashboardOption() {
  return (
    <li id={Style.dashboardDropDown} className={Style.ulItem}>
      <div style={{ padding: "0 1.5rem" }}>
        <SubTitle title={"Dashboard"}></SubTitle>
      </div>
      <ul className={Style.dashboardOptionUl}>
        <li className={Style.dashboardItem}>
          <a href="/user/dashboard/admin">
            <SubTitle
              id={Style.dashoardTitile}
              title={"User Dashboard"}
            ></SubTitle>
          </a>
        </li>
        <li className={Style.dashboardItem}>
          <a href="/client/dashboard/admin">
            <SubTitle
              id={Style.dashoardTitile}
              title={"Developer Dashboard"}
            ></SubTitle>
          </a>
        </li>
      </ul>
    </li>
  );
}
export default Header;
