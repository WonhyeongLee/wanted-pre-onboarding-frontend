import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/todo' />;
  }

  return children;
};

export default AuthRoute;
