import React from "react";
import Style from "./AuthLayout.module.css";
import LoginForm from "../../Features/Auth/LoginFrom";
import { ClientLoginHook } from "./Hooks/ClientAuthHooks";
import Icon from "../../Components/Icon";
import InfiniteLoader from "../../Components/infinteLoader";
function FormLayout({ children }) {
  return (
    <>
      <div className={Style.formContainer}>
        <div className={Style.formInnerContainer}>
          {children}
        </div>
      </div>
    </>
  );
}
export default FormLayout;
