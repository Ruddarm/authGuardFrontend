import React from "react";
import Style from "./Auth.module.css";
import InputBox from "../../Components/inputBox";
import SubmitButton from "../../Components/SubmitButton";
import PTAG from "../../Components/Error";
import { TitleTwo } from "../../Components/TitleHead";
import Icon from "../../Components/Icon";
function LoginForm() {
  return (
    <>
      <div className={Style.LoginFormContainer}>
        {/* //Logo and Contetn */}
        <div className={Style.LoginHeadContainer}>
          <TitleTwo title={"Nice to see you agian...!"}></TitleTwo>
        </div>
        <div className={Style.loginFormDiv}>
          <form className={Style.loginForm}>
            <div className={Style.loginFormDataDiv}>
              <InputBox placeHolder={"UserName"}></InputBox>
              {/* <PTAG content={"Error"}></PTAG> */}
            </div>
            <div className={Style.loginFormDataDiv}>
              <InputBox type={"password"} placeHolder={"Password"}></InputBox>
              {/* <PTAG content={"Error"}></PTAG> */}
            </div>
            <div className={`${Style.loginFormDataDiv} flex-row justify-start`}>
              Don't have account ? <a href="#"> create account</a>
            </div>
            <div className={`${Style.loginFormDataDiv} align-center`}>
              <SubmitButton title={"Login"}></SubmitButton>
            </div>
            <div></div>
          </form>
        </div>
        {/* social login */}
        <div className={Style.socialLogin}>
          <div className={Style.divLine}>
            <div className={Style.line}></div>
            Or Login With
            <div className={Style.line}></div>
          </div>
          <div className={Style.socialIcon}>
            <div className={Style.icon}>
              <Icon src={"../public/googlelogin.png"}></Icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
