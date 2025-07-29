import React from "react";
import { SubTitle } from "../../../Components/TitleHead";
import InputLabel from "../../../Components/InputLabel";
import Style from "./ClientSignupForm.module.css";
import InputBox from "../../../Components/inputBox";
import SubmitButton from "../../../Components/SubmitButton";
import SignupHook from "../../../Layouts/Auth/Hooks/ClientSignupHook";
import ErrorTag from "../../../Components/Error";
import ClientSignupHook from "../../../Layouts/Auth/Hooks/ClientSignupHook";
import InfiniteLoader from "../../../Components/infinteLoader";
function ClientSignupForm() {
  const {
    user,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSignup,
    loader,
    apiResponse,
  } = ClientSignupHook();
  const signup = (e) => {
    e.preventDefault();
    handleSignup();
  };
  return (
    <form className={Style.signupFormContainer}>
      {loader && <InfiniteLoader></InfiniteLoader>}
      <div className={Style.signupInputContainer}>
        <ErrorTag content={apiResponse.erroMsg}></ErrorTag>

        <InputLabel
          id={Style.signupInputLable}
          text={"First Name"}
        ></InputLabel>
        <InputBox
          value={user.firstName}
          handelChange={handleChange}
          handelBlur={handleBlur}
          error={errors.firstName}
          touched={touched.firstName}
          name={"firstName"}
          id={Style.signupInputBox}
          placeHolder={"Jhon"}
        ></InputBox>
        <ErrorTag content={errors.firstName}></ErrorTag>
      </div>
      <div className={Style.signupInputContainer}>
        <InputLabel id={Style.signupInputLable} text={"Last Name"}></InputLabel>
        <InputBox
          name={"lastName"}
          value={user.lastName}
          handelChange={handleChange}
          handelBlur={handleBlur}
          error={errors.lastName}
          touched={touched.lastName}
          id={Style.signupInputBox}
          placeHolder={"Due"}
        ></InputBox>
        <ErrorTag content={errors.lastName}></ErrorTag>
      </div>
      <div className={Style.signupInputContainer}>
        <InputLabel id={Style.signupInputLable} text={"Email"}></InputLabel>
        <InputBox
          type={"email"}
          name={"email"}
          value={user.email}
          handelChange={handleChange}
          handelBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
          id={Style.signupInputBox}
          placeHolder={"jhonedue@gmail.com"}
        ></InputBox>
        <ErrorTag content={errors.email}></ErrorTag>
      </div>
      <div className={Style.signupInputContainer}>
        <InputLabel id={Style.signupInputLable} text={"Password"}></InputLabel>
        <InputBox
          name={"password"}
          value={user.password}
          handelChange={handleChange}
          handelBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
          id={Style.signupInputBox}
          placeHolder={"********"}
        ></InputBox>
        <ErrorTag content={errors.password}></ErrorTag>
      </div>
      <div className={Style.signupInputContainer}>
        <InputLabel
          id={Style.signupInputLable}
          text={"Confirm Password"}
        ></InputLabel>
        <InputBox
          type={"password"}
          name={"confirmPassword"}
          value={user.confirmPassword}
          handelChange={handleChange}
          handelBlur={handleBlur}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          id={Style.signupInputBox}
          placeHolder={"*******"}
        ></InputBox>
        <ErrorTag content={errors.confirmPassword}></ErrorTag>
      </div>
      <div className={Style.signupInputContainer}>
        <SubmitButton
          handelClick={signup}
          id={Style.createAccountBtn}
          title={"Create Acccount"}
        ></SubmitButton>
      </div>
    </form>
  );
}

export default ClientSignupForm;
