import React from "react";
import AuthForm from "../component/common/AuthForm";

function SignIn() {
  const handleSignInClick = () => {
    console.log("로그인버튼 클릭됨");
  };
  return (
    <div>
      <p>로그인페이지</p>
      <AuthForm />
      <button type='button' data-testid='signup-button' onClick={handleSignInClick}>
        로그인
      </button>
    </div>
  );
}

export default SignIn;
