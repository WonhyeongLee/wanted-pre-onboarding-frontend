import { useState } from "react";
import { signInUser, signUpUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function useAuthForm(authType) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validators = {
    email: (value) => {
      if (!value.includes("@")) {
        return "이메일 형식에 @이 포함되어야 합니다.";
      }
    },
    password: (value) => {
      if (value.length < 8) {
        return "비밀번호는 8자 이상이어야 합니다.";
      }
    },
  };
  const handleSignUp = async () => {
    console.log("signup요청");
    const signUpResponse = await signUpUser(formData.email, formData.password);
    signUpResponse.status === 201 && navigate(`/signin`);
  };

  const handleSignIn = async () => {
    console.log("signin요청");
    const signInResponse = await signInUser(formData.email, formData.password);
    signInResponse.status === 200 && navigate(`/todo`, { replace: true });
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: inputValue,
    }));
    const error = validators[inputName] && validators[inputName](inputValue);

    setErrors((prevErrors) => ({ ...prevErrors, [inputName]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authType === "signup" ? handleSignUp() : handleSignIn();
  };

  const buttonDisabled =
    Object.values(errors).some((error) => error) || !formData.email || !formData.password;

  return {
    formData,
    errors,
    buttonDisabled,
    handleSubmit,
    handleInputChange,
  };
}

export default useAuthForm;
