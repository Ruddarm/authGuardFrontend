import React from "react";
import Style from "./ClientSignupPage.module.css";
import { SubTitle, TitleThree, TitleTwo } from "../../Components/TitleHead";
import ClientSignupFormLayout from "../../Layouts/Auth/SignupFormLayout";

function SignupPage({ headTitle, footerTitle, loginUrl, children }) {
  return (
    <>
      <div className={Style.signUpPageContainer}>
        <div className={Style.signUpHeaderContainer}>
          <TitleThree title={headTitle}></TitleThree>
        </div>
        <div className={Style.signUpFormContainer}>{children}</div>
        <div className={Style.singupFooterContainer}>
          <SubTitle title={footerTitle}>
            <a href={loginUrl}> login Here</a>
          </SubTitle>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
