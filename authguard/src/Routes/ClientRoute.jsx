import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Page/Auth/AuthPage";
import DashboardPage from "../Page/DashBoard/DashBoardPage";
import DashboardRoute from "./DashboardRoute";

function ClientRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route path="dashboard/*" element={<DashboardRoute />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="settings" element={<Settings />} /> */}
    </Routes>
  );
}

export default ClientRoutes;
