import React, { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import Loading from "../../Loading/Loading";
import useRole from "../../Hooks/useRole";
import { Link } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "admin") {
    return (
      <div className="text-5xl text-red-500 text-center mt-10">
        Access Forbidden
        <Link to={"/"}>
          <br />
          <button className="btn bg-green-600 mt-6">Home Page</button>
        </Link>
      </div>
    );
  }
  return children;
};

export default AdminRoute;
