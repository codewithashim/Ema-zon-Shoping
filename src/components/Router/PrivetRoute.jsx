import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../Context/UserContex";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  //   if (!user && user.uid) {
  //     // Redirect them to the /login page, but save the current location they were
  //     // trying to go to when they were redirected. This allows us to send them
  //     // along to that page after they login, which is a nicer user experience
  //     // than dropping them off on the home page.
  //     return <Navigate to="/login" state={{ from: location }} replace />;
  //   }
  //   return children;

  if (user && user?.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivetRoute;
