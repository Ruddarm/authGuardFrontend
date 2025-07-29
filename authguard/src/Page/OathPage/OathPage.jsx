import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./OathPage.module.css";
import LoginForm, { CoreLoginForm } from "../../Features/Auth/LoginFrom";
import { UserLoginHook } from "../../Layouts/Auth/Hooks/UserAuthHook";
import Icon from "../../Components/Icon";
import { SubTitle, TitleThree } from "../../Components/TitleHead";
import { OauthLoginHook, useOauth } from "../../Layouts/Auth/Hooks/Oathhooks";
import ErrorTag from "../../Components/Error";
import InfiniteLoader from "../../Components/infinteLoader";

function OathPage() {
  const location = useLocation();
  const [formLogin, setFormlogin] = useState(false);
  const { accessToken, setAccessToken, logout, verifying, userEmail } =
    useOauth();
  const {
    credential,
    erros,
    touched,
    validateAll,
    handelChange,
    clientPayLoad,
    handleBlur,
    setClientPayload,
    loader,
    handelCodeGenrationWithoutLogin,
    handelLogin,
    apiResponse,
    loginSuccess,
  } = OauthLoginHook();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const client_id = params.get("client_id");
    const appId = params.get("appId");
    const redirectUrl = params.get("redirectUrl") || "https://yourapp.com";
    const state = params.get("state");
    const nonce = params.get("nonce");
    setClientPayload((prev) => ({ ...prev, client_id: client_id }));
    setClientPayload((prev) => ({ ...prev, appId: appId }));
    setClientPayload((prev) => ({ ...prev, redirectUrl: redirectUrl }));
    setClientPayload((prev) => ({ ...prev, state: state }));
    setClientPayload((prev) => ({ ...prev, nonce: nonce }));
  }, []);

  if (verifying)
    return (
      <>
        <div className={styles.oathContainer}>
          <div className={styles.oathCard}>
            <InfiniteLoader></InfiniteLoader>
          </div>
        </div>
      </>
    );
  return (
    !verifying && (
      <div className={styles.oathContainer}>
        <div className={styles.oathCard}>
          {loader && <InfiniteLoader></InfiniteLoader>}
          <div className={styles.authGuardLogoContainer}>
            <img src={"../../public/authguardlogo.png"}></img>
          </div>
          <ErrorTag content={apiResponse.erroMsg}></ErrorTag>
          {/* <h2 className={styles.appTitle}>{}</h2> */}
          <TitleThree title={"Youtube"}></TitleThree>
          <p className={styles.subtitle}>is requesting secure sign-in</p>
          <div className={styles.oauthCardInnerContainer}>
            {!userEmail || formLogin ? (
              <div className={styles.coreLoginFormContainer}>
                <CoreLoginForm
                  apiResponse={apiResponse}
                  erros={erros}
                  handelChange={handelChange}
                  handelSubmit={handelLogin}
                  handleBlur={handleBlur}
                  creaturl={"/user/signup"}
                  credential={credential}
                  touched={touched}
                ></CoreLoginForm>
              </div>
            ) : (
              <>
                <AccountCard
                  handelClick={handelCodeGenrationWithoutLogin}
                  userEmail={userEmail}
                ></AccountCard>
                <div>
                  <button
                    onClick={() => {
                      setFormlogin(!formLogin);
                    }}
                    className={styles.anthrAccBtn}
                  >
                    Another account
                  </button>
                </div>
              </>
            )}
            <div className={styles.info}>
              <p>You will be redirected to:</p>
              <span className={styles.redirectUrl}>
                {clientPayLoad.redirecturl}
              </span>
            </div>
          </div>

          <div className={styles.footer}>
            <p>🔒 Secured sign-in via password</p>
            <p className={styles.powered}>
              Powered by <strong>AuthGuard</strong>
            </p>
          </div>
        </div>
      </div>
    )
  );
}
function AccountCard({ userEmail, handelClick }) {
  return (
    <>
      <span style={{ display: "flex", padding: "0.5rem 0 " }}>
        <span
          style={{ fontFamily: "lato", fontSize: "1.5rem", color: "#3298d7 " }}
        >
          Continue With
        </span>
      </span>
      <div onClick={handelClick} className={styles.accountCard}>
        <div className={styles.userIconContainer}>
          <Icon src={"/public/user.png"}></Icon>
        </div>
        <div className={styles.userInfoContainer}>
          <SubTitle title={userEmail}></SubTitle>
          {/* <span>userfuck@fuck.com</span> */}
        </div>
      </div>
    </>
  );
}
export default OathPage;
