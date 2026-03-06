import { Role } from "@shared/types";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
  currentRole: Role | null;
}

export const RouteGuard = ({
  children,
  allowedRoles,
  currentRole,
}: ProtectedRouteProps) => {
  if (!currentRole) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentRole)) {
    return <Navigate to="/not-authorized" replace />;
  }

  return <>{children}</>;
};
