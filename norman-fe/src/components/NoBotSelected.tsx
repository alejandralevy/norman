import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { styled } from "styled-components";

const NoBotSelected = () => {
  const { Title, Text } = Typography;

  return (
    <>
      <Container>
        <MiddleDiv>
          <Title level={1}>Hello there, this is norman</Title>
          <Text>Use this space to communicate something about the project</Text>
        </MiddleDiv>
        <BottomDiv>
          <Text>To start a conversation, please select a bot or</Text>
          <Button type="primary">Create a new bot</Button>
        </BottomDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  align-items: center;
  height: 100vh;
`;

const MiddleDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
  row-gap: 12px;
`;

export default NoBotSelected;
