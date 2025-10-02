import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector, useAuth } from "../hooks";
import { constants } from "../utils";

export default function PrivateRoute() {
  const authenticated = useAuth();
  const location = useLocation();
  const auth = useAppSelector((state) => state.auth);

  if (authenticated && auth?.user?.role == constants.USER) {
    return <Outlet />;
  }

  const prevPath = location.search
    ? `${location.pathname}${location.search}`
    : location.pathname;

  return (
    <Navigate
      to="/login"
      replace
      state={{
        prevPath: prevPath,
      }}
    />
  );
}
