import React from "react";
import AuthForm from "../component/AuthForm";
import GoBackButton from "../component/common/GoBackButton";

function SignUp() {
  return (
    <>
      <GoBackButton />
      <AuthForm authType={`signup`} />
    </>
  );
}

export default SignUp;
