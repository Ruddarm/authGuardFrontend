import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layouts/Dashboard/DashBoardLayout";
import AdminLayout from "../Layouts/Dashboard/AdminLayout";
import AppsLayout from "../Layouts/Dashboard/AppsLayout";
import AppViewLayout from "../Layouts/Dashboard/AppViewLayout";

function DashboardRoute() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <DashboardLayout>
            <AdminLayout></AdminLayout>
          </DashboardLayout>
        }
      ></Route>
      <Route
        path="/apps"
        element={
          <DashboardLayout>
            <AppsLayout></AppsLayout>
          </DashboardLayout>
        }
      ></Route>
      <Route
        path="/apps/app/:appId" 
        element={
          <DashboardLayout>
            <AppViewLayout></AppViewLayout>
          </DashboardLayout>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <DashboardLayout>
            <h1>fuck you man</h1>
          </DashboardLayout>
        }
      ></Route>
    </Routes>
  );
}
export default DashboardRoute;
