import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import AuthRoute from "./AuthRoute";
import TodoPage from "../pages/TodoPage";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Main />
      </AuthRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute>
        <TodoPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
