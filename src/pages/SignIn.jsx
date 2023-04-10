import React from "react";
import AuthForm from "../component/AuthForm";

function SignIn() {
  return (
    <div>
      <AuthForm authType={`signin`} />
    </div>
  );
}

export default SignIn;
