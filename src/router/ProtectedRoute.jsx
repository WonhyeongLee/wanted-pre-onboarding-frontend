import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("access_token") !== null;
  return isAuthenticated ? children : <Navigate to='/signin' replace />;
};

export default ProtectedRoute;
