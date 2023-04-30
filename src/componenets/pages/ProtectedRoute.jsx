import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function ProtectedRoute({ admin }) {
  const { loggedIn, user } = useAuth();

  if (admin && user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  if (!loggedIn) {
    console.log("giris yapildi logdin");
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
