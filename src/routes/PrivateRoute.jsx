import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth");

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
