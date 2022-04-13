import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  ShoppingOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getAllProductsStart } from "../../store/ducks/products/actions";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const [current, setCurrent] = useState("products");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsStart());
  }, []);

  return (
    <Menu onClick={(menuItem) => {
		setCurrent(menuItem?.key)
	}} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="products" icon={<ShoppingOutlined/>}>
        <Link to="/produtos">Produtos</Link>
      </Menu.Item>
      <Menu.Item key="shoppingCart" icon={<ShoppingCartOutlined/>}>
        <Link to="/carrinho">Carrinho</Link>
      </Menu.Item>
    </Menu>
  );
}

export default TopNavigation;
