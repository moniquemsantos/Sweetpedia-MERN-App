import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ProtectedRoute({ children }) {
  const { loginUser } = useContext(AuthContext);

  const isUser = loginUser ? true : false;

  return <>{isUser ? children : <Navigate to="/login" />} </>;
}

export default ProtectedRoute;
