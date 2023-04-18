/** @jsxImportSource @emotion/react */
import React from "react";
import useAuthForm from "../hooks/useAuthForm";
import { Link } from "react-router-dom";
import { inputCss, formCss, buttonCss, errorMessageCss } from "../component/style/CommonStyles";

function AuthForm({ authType }) {
  const { formData, errors, buttonDisabled, handleSubmit, handleInputChange } =
    useAuthForm(authType);

  return (
    <>
      <form onSubmit={handleSubmit} css={formCss}>
        <label htmlFor='email'>이메일</label>
        <input
          type='text'
          id='email'
          name='email'
          data-testid='email-input'
          value={formData.email}
          onChange={handleInputChange}
          css={inputCss}
        />
        {errors.email && <p css={errorMessageCss}>{errors.email}</p>}
        <label htmlFor='password'>비밀번호</label>
        <input
          type='password'
          id='password'
          name='password'
          data-testid='password-input'
          value={formData.password}
          onChange={handleInputChange}
          css={inputCss}
        />
        {errors.password && <p css={errorMessageCss}>{errors.password}</p>}
        <button
          type='submit'
          data-testid={`${authType}-button`}
          disabled={buttonDisabled}
          css={buttonCss}
        >
          {authType === "signin" ? "로그인" : "회원가입"}
        </button>
      </form>
      {authType === "signin" ? (
        <p>
          계정이 없나요 ? <Link to='/signup'>회원가입 하러가기</Link>
        </p>
      ) : (
        <p>
          계정이 있나요 ? <Link to='/signin'>로그인 하러가기</Link>
        </p>
      )}
    </>
  );
}

export default AuthForm;
