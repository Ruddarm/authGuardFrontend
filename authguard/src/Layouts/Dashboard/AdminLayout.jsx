import React from "react";
import Style from "./DashboardLayout.module.css";
import BannerMatrix from "../../Features/Dashboard/AdminView/BannerMatrix";
import SubmitButton from "../../Components/SubmitButton";
import AdminGraph from "../../Features/Dashboard/AdminView/AdminGraph";
import Graph from "../../Components/Chart";

function AdminLayout() {
  return (
    <>
      <div className={Style.adminLayoutContainer}>
        <div className={Style.adminLayoutHeader}>
        </div>
        <div className={Style.bannerMatrixContainer}>
          <BannerMatrix></BannerMatrix>
        </div>
        <div className={Style.AdminLayoutGraphContainer}>
            <AdminGraph title={"Login Request"}>
              <Graph></Graph>
            </AdminGraph>
            <AdminGraph title={"Singup Request"}>
              <Graph chartype={"bar"} ></Graph>
            </AdminGraph>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
