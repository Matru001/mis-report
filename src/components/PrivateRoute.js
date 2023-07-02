import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const isUserLoggedIn = localStorage.getItem("login");

  return isUserLoggedIn === "true" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
