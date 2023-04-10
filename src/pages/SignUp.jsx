import React from "react";
import AuthForm from "../component/AuthForm";
import GoBackButton from "../component/common/GoBackButton";

function SignUp() {
  return (
    <div>
      <GoBackButton />
      <AuthForm authType={`signup`} />
    </div>
  );
}

export default SignUp;
