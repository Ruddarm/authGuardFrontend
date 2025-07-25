import React from "react";
import Style from "./AuthLayout.module.css";
import LoginForm from "../../Features/Auth/LoginFrom";
import { ClientLoginHook } from "./Hooks/ClientAuthHooks";
function FormLayout() {
  return (
    <>
      <div className={Style.formContainer}>
        <div className={Style.formInnerContainer}>
          <LoginForm
            subtitle={"Secure access to your AuthGuard client portal"}
            creaturl={"/client/signup"}
            heading={"Welcome back to AuthGuard Console"}
            loginHook={ClientLoginHook}
          ></LoginForm>
        </div>
      </div>
    </>
  );
}
export default FormLayout;
