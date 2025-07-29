import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./ClientDashboardRoute";
import FormLayout from "../Layouts/Auth/FormLayout";
import ClientAuthPage from "../Page/Auth/ClientAuthPage";
import SignupPage from "../Page/Auth/SignupPage";
import ClientSignupFormLayout from "../Layouts/Auth/SignupFormLayout";
import UserSignupForm from "../Features/Auth/User/UserSignupForm";
import ClientSignupForm from "../Features/Auth/Client/ClientSignupForm";
import {
  ClientLoginHook,
  ClientProtectedRoute,
} from "../Layouts/Auth/Hooks/ClientAuthHooks";
import LoginForm from "../Features/Auth/LoginFrom";

function ClientRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <ClientAuthPage>
            <FormLayout>
              <LoginForm
                subtitle={"Secure access to your AuthGuard client portal"}
                creaturl={"/client/signup"}
                heading={"Welcome back to AuthGuard Console"}
                loginHook={ClientLoginHook}
              ></LoginForm>
            </FormLayout>
          </ClientAuthPage>
        }
      />
      <Route
        path="signup"
        element={
          <SignupPage
            headTitle={"Welcome to AuthGuard - Get Started with AuthGuard API"}
            footerTitle={"Already have Business Account ? "}
            loginUrl={"login"}
          >
            <ClientSignupFormLayout>
              <ClientSignupForm></ClientSignupForm>
            </ClientSignupFormLayout>
          </SignupPage>
        }
      />
      <Route
        path="dashboard/*"
        element={
          <ClientProtectedRoute>
            <DashboardRoute />
          </ClientProtectedRoute>
        }
      />
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="settings" element={<Settings />} /> */}
    </Routes>
  );
}

export default ClientRoutes;
