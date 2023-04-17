/** @jsxImportSource @emotion/react */

import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { mainWrapperCss, buttonCss, headerCss, headingCss } from "../component/style/CommonStyles";

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const renderButton = location.pathname !== "/signin" && location.pathname !== "/signup";
  return (
    <main css={mainWrapperCss}>
      <header css={headerCss}>
        <h1 css={headingCss}>원티드 프론트엔드 인턴쉽 사전과제</h1>
        <h2 css={headingCss}>TODOLIST</h2>
      </header>
      <Outlet />
      {renderButton && (
        <button
          css={buttonCss}
          type='button'
          data-testid={`signin-button`}
          onClick={() => navigate("/signin")}
        >
          로그인
        </button>
      )}
    </main>
  );
}

export default Main;
