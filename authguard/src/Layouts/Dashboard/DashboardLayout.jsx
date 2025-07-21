import React from "react";
import Style from "./DashboardLayout.module.css";
import AdminLayout from "./AdminLayout";
import NavigationTable from "../../Features/Dashboard/NavTable/NavigationTable";

function DashboardLayout({ children }) {
  return (
    <>
      <div className={Style.dashboardLayoutContainer}>
        <div className={Style.navtableLayoutContainer}>
          <NavigationTable></NavigationTable>
        </div>
        <div className={Style.dataViewContainer}>{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
