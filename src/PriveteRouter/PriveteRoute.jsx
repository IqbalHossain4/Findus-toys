import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import LoadingSpinner from "../Component/loader/LoadingSpinner";

const PriveteRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/signin" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PriveteRoute;
