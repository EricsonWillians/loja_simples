import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { StProductsContainer } from "./styled";

const Products = () => {
  const allProducts = useAppSelector((state) => state.getAllProducts.products);
  const allProductsLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );

  useEffect(() => {
    console.log("ALL PRODUCTS", allProducts);
  }, [allProducts]);

  const renderCards = () => {
    return allProducts.map((product: any) => {
      return (
        <Col span={6}>
          {
            <Card
              title={product?.title}
              loading={allProductsLoading}
              cover={<img alt={product?.title} src={product?.image}></img>}
              bordered
              style={{ width: 300 }}
              bodyStyle={{
                textAlign: "left",
              }}
            >
              <p>{product?.description}</p>
              <p>{product?.price}</p>
            </Card>
          }
        </Col>
      );
    });
  };

  return <StProductsContainer gutter={16}>{renderCards()}</StProductsContainer>;
};

export default Products;
