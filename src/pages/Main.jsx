import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: #f0f2f5;
`;

const HeadingContainer = styled.header`
  text-align: center;
`;

const Heading1 = styled.h1`
  margin: 0;
`;

const Heading2 = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  text-align: center;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const renderButton = location.pathname !== "/signin" && location.pathname !== "/signup";
  return (
    <Container>
      <HeadingContainer>
        <Heading1>원티드 프론트엔드 인턴쉽 사전과제</Heading1>
        <Heading2>TODOLIST</Heading2>
      </HeadingContainer>
      <Outlet />
      {renderButton && (
        <Button type='button' data-testid={`signin-button`} onClick={() => navigate("/signin")}>
          로그인
        </Button>
      )}
    </Container>
  );
}

export default Main;
