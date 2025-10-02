import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../hooks";

export default function AuthRoute() {
  const location = useLocation();
  const authenticated = useAuth();

  if (!authenticated) {
    return <Outlet />;
  }

  const prevPath = location.state?.prevPath || "/";

  return <Navigate to={prevPath} replace />;
}
