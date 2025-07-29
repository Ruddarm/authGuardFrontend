import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./ClientDashboardRoute";
import FormLayout from "../Layouts/Auth/FormLayout";
import UserAuthPage from "../Page/Auth/UserAuthPage";
import SignupPage from "../Page/Auth/SignupPage";
import ClientSignupFormLayout from "../Layouts/Auth/SignupFormLayout";
import UserSignupForm from "../Features/Auth/User/UserSignupForm";
import ClientSignupForm from "../Features/Auth/Client/ClientSignupForm";
import { UserLoginHook } from "../Layouts/Auth/Hooks/UserAuthHook";
import LoginForm from "../Features/Auth/LoginFrom";

function UserRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <UserAuthPage>
            <FormLayout>
              <LoginForm
                subtitle={"Secure access to your AuthGuard User portal"}
                creaturl={"/user/signup"}
                heading={"Welcome back to AuthGuard..!"}
                loginHook={UserLoginHook}
              ></LoginForm>
            </FormLayout>
          </UserAuthPage>
        }
      />
      <Route
        path="signup"
        element={
          <SignupPage
            headTitle={"Welcome to AuthGuard.. ! Easy Login any where"}
            footerTitle={"Already have user account.."}
            loginUrl={"/user/login"}
          >
            <ClientSignupFormLayout>
              <UserSignupForm></UserSignupForm>
            </ClientSignupFormLayout>
          </SignupPage>
        }
      ></Route>
      <Route path="dashboard/*" element={<DashboardRoute />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="settings" element={<Settings />} /> */}
    </Routes>
  );
}

export default UserRoutes;
