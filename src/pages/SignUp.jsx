import React from "react";
import AuthForm from "../component/common/AuthForm";

function SignUp() {
  const handleSignUpClick = () => {
    console.log("회원가입 버튼 클릭됨");
  };
  return (
    <div>
      <p>회원가입 페이지</p>
      <AuthForm />
      <button type='button' data-testid='signup-button' onClick={handleSignUpClick}>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
