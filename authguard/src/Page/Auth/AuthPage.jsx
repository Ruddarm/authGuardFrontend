import React from "react";
import Style from "./AuthPage.module.css";
import FormLayout from "../../Layouts/Auth/FormLayout";

function AuthPage() {
  return (
    <>
      <div className={Style.AuthPageContainer}>
        <div className={Style.AuthPageImageContainer}></div>
        <div className={Style.FormLayoutContainer}>
          <FormLayout></FormLayout>
        </div>
      </div>
    </>
  );
}
export default AuthPage;
