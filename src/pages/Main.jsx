import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const renderButton = location.pathname !== "/signin" && location.pathname !== "/signup";
  return (
    <div>
      Main
      <Outlet />
      {renderButton && (
        <button type='button' onClick={() => navigate("/signin")}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Main;
