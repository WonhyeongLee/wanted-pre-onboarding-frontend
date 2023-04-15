import React from "react";
import AuthForm from "../component/AuthForm";

function SignIn() {
  return <AuthForm authType={`signin`} />;
}

export default SignIn;
