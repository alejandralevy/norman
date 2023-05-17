import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin, Typography } from "antd";
import React from "react";

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { Text } = Typography;
  return (
    <Col>
      <Row justify="center" align="middle">
        <Spin indicator={antIcon} />;
      </Row>
      <Row justify="center" align="middle">
        <Text>{text}</Text>
      </Row>
    </Col>
  );
};

export default Loader;
