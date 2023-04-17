/** @jsxImportSource @emotion/react */
import React from "react";
import { headerCss, headingCss } from "../component/style/CommonStyles";
import { css } from "@emotion/react";

const todolayoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 0.5rem;
  box-sizing: border-box;
  background-color: #f0f2f5;
  overflow-y: hidden;
`;

const todoSectionCss = css`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
`;

function TodoLayout({ children }) {
  return (
    <main css={todolayoutCss}>
      <header css={headerCss}>
        <h1 css={headingCss}>TodoList</h1>
      </header>
      <section css={todoSectionCss}>{children}</section>
    </main>
  );
}

export default TodoLayout;
