import React from "react";
import Style from "./HomeLayout.module.css";
import { SubTitle } from "../../Components/TitleHead";
import Icon from "../../Components/Icon";
function HeroSectionLayout() {
  return (
    <>
      <div className={Style.BannerContainer}>
        <div className={Style.TitleContainer}>
          <span className={Style.heroTitleOne}>
            One Auth System
            <span className={Style.AuthguardTitle}>
              AuthGuard
              <span className={Style.subline}>...Infinite Possiblites</span>
            </span>
          </span>

          <div className={Style.paraContainer}>
            AuthGuard eliminates password fatigue for users and integration
            headaches for developers. Secure, scalable authentication that works
            everywhere.
          </div>
          <div className={Style.box}>
            <ul className={Style.boxUl}>
              <li className={Style.boxUlli}>
                <span>99.9%</span>
                <SubTitle title={"uptime"}></SubTitle>
              </li>{" "}
              <li className={Style.boxUlli}>
                <span>1M+</span>
                <SubTitle title={"user protected"}></SubTitle>
              </li>{" "}
              <li className={Style.boxUlli}>
                <span>5 min</span>
                <SubTitle title={"Setup"}></SubTitle>
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.LogoContainer}>
          <Icon src={"/public/authguardlogo.png"}></Icon>
        </div>
      </div>
    </>
  );
}
export default HeroSectionLayout;
