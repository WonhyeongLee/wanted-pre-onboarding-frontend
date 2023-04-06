import React from "react";
import AuthForm from "../component/common/AuthForm";
import GoBackButton from "../component/common/GoBackButton";

function SignIn() {
  return (
    <div>
      <p>로그인페이지</p>
      <GoBackButton />
      <AuthForm authType={`signin`} />
    </div>
  );
}

export default SignIn;
