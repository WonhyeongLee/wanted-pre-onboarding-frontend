import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import TodoPage from "../pages/TodoPage";
import ErrorPage from "../ErrorPage";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthRoute>
            <Main />
          </AuthRoute>
        }
      >
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>

      <Route
        path='/todo'
        element={
          <ProtectedRoute>
            <Routes>
              <Route index element={<TodoPage />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
