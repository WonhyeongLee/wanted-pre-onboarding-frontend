import { redirect } from "react-router-dom";

const AuthRoute = () => {
  console.log("AuthRote call");
  const isAuthenticated = localStorage.getItem("access_token") !== null;
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return redirect("/todo");
  } else if (!isAuthenticated) {
    return null;
  }
};

export default AuthRoute;
