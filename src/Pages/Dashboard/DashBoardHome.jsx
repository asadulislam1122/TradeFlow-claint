import React from "react";
import useRole from "../../Hooks/useRole";
import Loading from "../../Loading/Loading";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const DashBoardHome = () => {
  const [role, roleLoading] = useRole();

  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  } else {
    return <UserDashboard></UserDashboard>;
  }
};

export default DashBoardHome;
