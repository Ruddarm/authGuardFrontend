import React from "react";
import Style from "./AuthLayout.module.css";
import ClientSignupForm from "../../Features/Auth/Client/ClientSignupForm";
function ClientSignupFormLayout({ children }) {
  return (
    <>
      <div className={Style.clientSignupFormLayout}>{children}</div>
    </>
  );
}
export default ClientSignupFormLayout;
