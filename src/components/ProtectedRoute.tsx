import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
type Props = {
  children: React.ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuthContext();
  if (user === undefined) {
    return <></>;
  } else if (user === null) {
    return <Navigate to={"/"} replace={true} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
