import React, { useState } from "react";

function AuthForm({ authType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const checkEmailVaildation = (email) => {
    // 요구조건 : @포함
    if (email.includes("@")) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const checkPasswordVaildation = (password) => {
    // 8자 이상
    if (password.length >= 8) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email : ${email} password : ${password}`);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmailVaildation(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordVaildation(e.target.value);
  };

  const buttonDisabled = email && password && !emailError && !passwordError;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>이메일</label>
      <input
        type='text'
        id='email'
        name='email'
        data-testid='email-input'
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p>이메일형식이 아닙니다</p>}
      <label htmlFor='password'>비밀번호</label>
      <input
        type='password'
        id='password'
        name='password'
        data-testid='password-input'
        value={password}
        onChange={handlePassWordChange}
      />
      {passwordError && <p>8자 이상으로 입력해주세요</p>}
      <button type='submit' data-testid={`${authType}-button`} disabled={!buttonDisabled}>
        {authType === "signin" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
}

export default AuthForm;
