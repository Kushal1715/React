import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((store) => store.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
