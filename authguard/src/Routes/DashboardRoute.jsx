import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layouts/Dashboard/DashBoardLayout";
import AdminLayout from "../Layouts/Dashboard/AdminLayout";
import AppsLayout from "../Layouts/Dashboard/AppsLayout";

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
    </Routes>
  );
}
export default DashboardRoute;
