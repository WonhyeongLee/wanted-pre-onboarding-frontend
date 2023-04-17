/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { signInUser, signUpUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { inputCss, formCss, buttonCss, errorMessageCss } from "../component/style/CommonStyles";

function AuthForm({ authType }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validators = {
    email: (value) => {
      if (!value.includes("@")) {
        return "이메일 형식에 @이 포함되어야 합니다.";
      }
    },
    password: (value) => {
      if (value.length < 8) {
        return "비밀번호는 8자 이상이어야 합니다.";
      }
    },
    // 다른 검증이 필요한 값
  };

  const handleSignUp = async () => {
    const signUpResponse = await signUpUser(formData.email, formData.password);
    signUpResponse.status === 201 && navigate(`/signin`);
  };

  const handleSignIn = async () => {
    const signInResponse = await signInUser(formData.email, formData.password);
    signInResponse.status === 200 && navigate(`/todo`, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authType === "signup" ? handleSignUp() : handleSignIn();
  };
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: inputValue,
    }));
    const error = validators[inputName] && validators[inputName](inputValue);

    setErrors((prevErrors) => ({ ...prevErrors, [inputName]: error }));
  };

  const buttonDisabled =
    Object.values(errors).some((error) => error) || !formData.email || !formData.password;

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
