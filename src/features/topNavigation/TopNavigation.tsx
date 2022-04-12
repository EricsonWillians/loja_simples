import React, { useState } from "react";
import { Menu } from "antd";
import {
  ShoppingOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

function TopNavigation() {
  const [current, setCurrent] = useState("products");

  return (
    <Menu onClick={(menuItem) => {
		setCurrent(menuItem?.key)
	}} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="products" icon={<ShoppingOutlined/>}>
        Produtos
      </Menu.Item>
      <Menu.Item key="shoppingCart" icon={<ShoppingCartOutlined/>}>
        Carrinho
      </Menu.Item>
    </Menu>
  );
}

export default TopNavigation;
