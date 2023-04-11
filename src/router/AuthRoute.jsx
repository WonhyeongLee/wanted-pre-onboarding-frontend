import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("access_token") !== null;
  return isAuthenticated ? <Navigate to='/todo' replace /> : children;
};

export default AuthRoute;
