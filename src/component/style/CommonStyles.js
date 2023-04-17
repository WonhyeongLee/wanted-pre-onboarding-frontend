import { css } from "@emotion/react";

export const mainWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: #f0f2f5;
`;

export const headerCss = css`
  margin: 2rem;
  text-align: center;
`;

export const headingCss = css`
  margin: 0;
`;

export const errorMessageCss = css`
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
`;

export const inputCss = css`
  width: 100%;
  margin: 0 0.2rem;
  padding: 0.9rem 0.75rem;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: left;
`;

export const formCss = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const buttonVariants = {
  todo: css`
    width: 50px;
    height: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.2rem;
  `,
};

export const buttonCss = (variant) => css`
  border: none;
  text-align: center;
  padding: 0.625rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
  ${buttonVariants[variant]}
`;
