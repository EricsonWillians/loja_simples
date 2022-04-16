import { Col, Row, Spin } from "antd";
import React from "react";
import { StSpinContainer } from "./styled";
import { LoadingOutlined } from "@ant-design/icons";

const SpinContainer = () => {
  return (
    <StSpinContainer justify="center" align="middle">
      <Col span={24}>
        <Spin
          size="large"
          indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />}
        />
      </Col>
    </StSpinContainer>
  );
};

export default SpinContainer;
