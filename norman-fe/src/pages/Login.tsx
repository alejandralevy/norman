import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { styled } from "styled-components";
const Login: React.FC = () => {
  return (
    <LoginLayout>
      <Content>Login Page</Content>
    </LoginLayout>
  );
};

const LoginLayout = styled(Layout)`
  height: 100vh;
`;

export default Login;
