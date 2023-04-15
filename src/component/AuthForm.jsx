import React, { useState } from "react";
import { signInUser, signUpUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  /* InputWrapper에 맞춰짐 */
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0;
  margin-bottom: 0;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

function AuthForm({ authType }) {
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
    // 다른 검증이 필요한 값
  };

  const handleSignUp = async () => {
    const signUpResponse = await signUpUser(formData.email, formData.password);
    signUpResponse.status === 201 && navigate(`/signin`);
  };

  const handleSignIn = async () => {
    const signInResponse = await signInUser(formData.email, formData.password);
    signInResponse.status === 200 && navigate(`/todo`, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authType === "signup" ? handleSignUp() : handleSignIn();
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

  const buttonDisabled =
    Object.values(errors).some((error) => error) || !formData.email || !formData.password;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor='email'>이메일</label>
          <Input
            type='text'
            id='email'
            name='email'
            data-testid='email-input'
            value={formData.email}
            onChange={handleInputChange}
          />
        </InputWrapper>
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <InputWrapper>
          <label htmlFor='password'>비밀번호</label>
          <Input
            type='password'
            id='password'
            name='password'
            data-testid='password-input'
            value={formData.password}
            onChange={handleInputChange}
          />
        </InputWrapper>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Button type='submit' data-testid={`${authType}-button`} disabled={buttonDisabled}>
          {authType === "signin" ? "로그인" : "회원가입"}
        </Button>
      </Form>
      {authType === "signin" ? (
        <p>
          계정이 없나요 ? <Link to='/signup'>회원가입 하러가기</Link>
        </p>
      ) : (
        <p>
          계정이 있나요 ? <Link to='/signin'>로그인 하러가기</Link>
        </p>
      )}
    </>
  );
}

export default AuthForm;
