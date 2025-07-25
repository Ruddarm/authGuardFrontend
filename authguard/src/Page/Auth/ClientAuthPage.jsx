import React from "react";
import Style from "./AuthPage.module.css";
import FormLayout from "../../Layouts/Auth/FormLayout";

function ClientAuthPage({children}) {
  return (
    <>
      <div className={Style.AuthPageContainer}>
        <div className={Style.AuthPageImageContainer}></div>
        <div className={Style.FormLayoutContainer}>
          {children}
        </div>
      </div>
    </>
  );
}
export default ClientAuthPage;
