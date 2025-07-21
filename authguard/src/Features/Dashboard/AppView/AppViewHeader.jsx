import React from "react";
import Style from "./AppView.module.css";
import SubmitButton from "../../../Components/SubmitButton";
import InputBox from "../../../Components/InputBox";
function AppViewHeader() {
  return (
    <>
      <InputBox id={Style.createAppInput} placeHolder={"App Name"}></InputBox>
      <SubmitButton
        id={Style.createAppBtn}
        title={"Create Apps"}
      ></SubmitButton>
    </>
  );
}

export default AppViewHeader;
