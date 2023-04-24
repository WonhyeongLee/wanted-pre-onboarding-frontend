import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Navigate to='/todo' replace /> : children;
};

export default AuthRoute;
