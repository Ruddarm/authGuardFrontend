import React from "react";
import Style from "./Auth.module.css";
import InputBox from "../../Components/inputBox";
import SubmitButton from "../../Components/SubmitButton";
import PTAG from "../../Components/Error";
import { SubTitle, TitleTwo } from "../../Components/TitleHead";
import Icon from "../../Components/Icon";
import ErrorTag from "../../Components/Error";
import InfiniteLoader from "../../Components/infinteLoader";
function LoginForm({ heading, subtitle, creaturl, loginHook }) {
  const {
    credential,
    erros,
    touched,
    handelChange,
    handleBlur,
    handelLogin,
    loader,
    apiResponse,
    loginSuccess,
  } = loginHook();
  const handelSubmit = (e) => {
    e.preventDefault();
    handelLogin();
  };
  return (
    <>
      {loader&&<InfiniteLoader></InfiniteLoader>}
      <div className={Style.LoginFormContainer}>
        <div className={Style.authlogoContainer}>
          <Icon src="../public/authguardlogo.png"></Icon>
        </div>
        <div className={Style.LoginHeadContainer}>
          <TitleTwo title={heading}></TitleTwo>
          <SubTitle title={subtitle}></SubTitle>
        </div>
        <div className={Style.loginFormDiv}>
          <CoreLoginForm
            credential={credential}
            touched={touched}
            erros={erros}
            handelChange={handelChange}
            handleBlur={handleBlur}
            handelSubmit={handelSubmit}
            apiResponse={apiResponse}
            creaturl={creaturl}
          ></CoreLoginForm>
        </div>
        {/* social login */}
        {
          // <div className={Style.socialLogin}>
          //   <div className={Style.divLine}>
          //     <div className={Style.line}></div>
          //   </div>
          // </div>
        }
      </div>
    </>
  );
}
function CoreLoginForm({
  apiResponse,
  credential,
  handelChange,
  handleBlur,
  touched,
  erros,
  creaturl,
  handelSubmit,
}) {
  return (
    <form className={Style.loginForm}>
      <div className={Style.loginFormDataDiv}>
        {apiResponse.erroMsg && (
          <ErrorTag content={apiResponse.erroMsg}></ErrorTag>
        )}
        <InputBox
          name={"email"}
          value={credential.email}
          handelChange={handelChange}
          handelBlur={handleBlur}
          touched={touched.email}
          error={erros.email}
          placeHolder={"Email"}
        ></InputBox>
        <ErrorTag content={erros.email}></ErrorTag>
      </div>
      <div className={Style.loginFormDataDiv}>
        <InputBox
          name={"password"}
          value={credential.password}
          handelChange={handelChange}
          handelBlur={handleBlur}
          touched={touched.password}
          error={erros.password}
          type={"password"}
          placeHolder={"Password"}
        ></InputBox>
        <ErrorTag content={erros.password}></ErrorTag>
      </div>
      <div className={`${Style.loginFormDataDiv} flex-row justify-start`}>
        Don’t have an account ? <a href={creaturl}> create one</a>
      </div>
      <div className={`${Style.loginFormDataDiv} align-center`}>
        <SubmitButton handelClick={handelSubmit} title={"Login"}></SubmitButton>
      </div>
    </form>
  );
}
export { CoreLoginForm };
export default LoginForm;
