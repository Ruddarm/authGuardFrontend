import React from "react";
import Style from "./AuthLayout.module.css";
import LoginForm from "../../Features/Auth/LoginFrom";
function FormLayout() {
  return (
    <>
      <div className={Style.formContainer}>
        <div className={Style.formInnerContainer}>
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
}
export default FormLayout;
