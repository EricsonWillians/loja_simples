import { Avatar, Col, List } from "antd";
import React from "react";
import { StProductsContainer } from "../../common/productCard/styled";

const ShoppingCart = () => {
  const shoppingCartProducts: string[] = [];

  return (
    <StProductsContainer>
      <Col span={24}>
        <List
          itemLayout="horizontal"
          dataSource={shoppingCartProducts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{"example"}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Col>
    </StProductsContainer>
  );
};

export default ShoppingCart;
