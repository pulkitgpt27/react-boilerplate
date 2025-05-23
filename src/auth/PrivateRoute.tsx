import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import constants from "../utils/constants";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    // Redirect to login page and preserve the current location for redirect after login
    return (
      <Navigate
        to={constants.routes.login}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
