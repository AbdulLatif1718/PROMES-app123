// src/components/Shared/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { hasRole } from "../../utils/roles";

interface PrivateRouteProps {
  requiredRole: "admin" | "super_admin";
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRole }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Development bypass
  if (import.meta.env.MODE === 'development') {
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
    if (!hasRole(user, requiredRole)) return <Navigate to="/" replace />;
  }

  // Production checks
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (!hasRole(user, requiredRole)) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PrivateRoute;