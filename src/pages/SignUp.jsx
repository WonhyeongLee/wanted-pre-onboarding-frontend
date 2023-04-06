import React from "react";
import AuthForm from "../component/common/AuthForm";
import GoBackButton from "../component/common/GoBackButton";

function SignUp() {
  return (
    <div>
      <p>회원가입 페이지</p>
      <GoBackButton />
      <AuthForm authType={`signup`} />
    </div>
  );
}

export default SignUp;
