import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Typography } from "antd";
import React from "react";
import styled from "styled-components";

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  const antIcon = <LoadingOutlined spin style={{ fontSize: 24 }} />;
  const { Text } = Typography;

  return (
    <LoaderContainer>
      <Spin indicator={antIcon} />
      <Text>{text}</Text>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  text-align: center;
`;

export default Loader;
