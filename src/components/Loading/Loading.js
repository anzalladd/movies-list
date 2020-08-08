import React from "react";
import Container from "../../styles/common/Container";
import { Spin } from "antd";

const Loading = () => {
  return (
    <Container
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spin tip="Loading..."></Spin>
    </Container>
  );
};

export default Loading;
