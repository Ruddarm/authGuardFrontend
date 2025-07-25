import React from "react";
import Style from "./AuthPage.module.css";
import FormLayout from "../../Layouts/Auth/FormLayout";

function UserAuthPage({ children }) {
  return (
    <>
      <div className={Style.AuthPageContainer}>
        <div className={Style.FormLayoutContainer}>{children}</div>
        <div className={Style.AuthPageImageContainer}></div>
      </div>
    </>
  );
}
export default UserAuthPage;
