import React from "react";

function AuthForm() {
  return (
    <form>
      <label htmlFor='email'>이메일</label>
      <input type='text' id='email' name='email' data-testid='email-input' />
      <label htmlFor='password'>비밀번호</label>
      <input type='password' id='password' name='password' data-testid='password-input' />
    </form>
  );
}

export default AuthForm;
