import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem("todo_data");
  return token ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
