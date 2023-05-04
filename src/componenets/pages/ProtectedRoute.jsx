import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function ProtectedRoute({ admin }) {
  const { loggedIn, user } = useAuth();
  const location = useLocation();

  if (admin && user?.role !== "admin") {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (!loggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
